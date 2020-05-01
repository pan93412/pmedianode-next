import {
    Card, CardContent, Content, Title
} from 'bloomer';
import { CardFooter } from 'bloomer/lib/components/Card/Footer/CardFooter';
import { CardFooterItem } from 'bloomer/lib/components/Card/Footer/CardFooterItem';
import Link from 'next/link';

export interface INavProps {
    id: string;
    title: string;
    desc: string;
    larger?: boolean;
}

export default function nav(props: INavProps) {
    return (
        <Card style={{ maxWidth: (props.larger? '25em': '15em') }}>
            <CardContent>
                <Content>
                    <Title isSize={3}>{props.title}</Title>
                    <p>{props.desc}</p>
                </Content>
            </CardContent>
            <CardFooter>
                <Link href={`/play/${props.id}`}><CardFooterItem href='#'>播放</CardFooterItem></Link>
            </CardFooter>
        </Card>
    );
}