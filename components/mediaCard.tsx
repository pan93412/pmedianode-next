import {
  Card, CardContent, Content, Title,
} from 'bloomer';
import { CardFooter } from 'bloomer/lib/components/Card/Footer/CardFooter';
import { CardFooterItem } from 'bloomer/lib/components/Card/Footer/CardFooterItem';
import Link from 'next/link';
import React from 'react';

export enum ECardContext {
  video = 'video',
  audio = 'audio',
  announce = 'announce',
}

export interface ICardProps {
  context: ECardContext;
  id: string;
  title: string;
  desc: string;
  larger?: boolean;
}

export default function MediaCard({
  context, larger, title, id, desc,
}: ICardProps) {
  const playUrl = `/play/${context}/${id}`;

  return (
    <Card style={{ maxWidth: (larger ? '25em' : '15em') }}>
      <CardContent>
        <Content>
          <Title isSize={4}>
            {title}
            <br />
            <small style={{ color: 'lightgray', fontSize: '0.6em' }}>
              {`[${context}]`}
              {' '}
              {id}
            </small>
          </Title>
          <p>
            {desc.substr(0, 50)}
            {desc.length > 50 && '...'}
          </p>
        </Content>
      </CardContent>
      <CardFooter>
        {
          context === ECardContext.announce
          || <Link href={playUrl}><CardFooterItem href={playUrl}>播放</CardFooterItem></Link>
        }
      </CardFooter>
    </Card>
  );
}
