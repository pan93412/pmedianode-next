import {
    Card, CardContent, Content, Title
} from 'bloomer';
import formatDate from '../components/formatDate';
import { CardFooter } from 'bloomer/lib/components/Card/Footer/CardFooter';
import { CardFooterItem } from 'bloomer/lib/components/Card/Footer/CardFooterItem';
import Link from 'next/link';

export interface NavProps {
    id: string;
    title: string;
    desc: string;
    uploadedOn: Date;
}

export default function nav(props: NavProps) {
    return (
        <Card style={{ maxWidth: '15em' }}>
            <CardContent>
                <Content>
                    <Title isSize={3}>{props.title}</Title>
                    <p>{props.desc}</p>
                    <small>{formatDate(props.uploadedOn)}</small>
                </Content>
            </CardContent>
            <CardFooter>
                <Link href={`/play/${props.id}`}><CardFooterItem href='#'>播放</CardFooterItem></Link>
            </CardFooter>
        </Card>
    );
}