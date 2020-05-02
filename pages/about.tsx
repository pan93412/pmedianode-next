import Head from 'next/head';
import {
  Section, Container, Title, Columns, Column, Tag, Content,
} from 'bloomer';
import { Subtitle } from 'bloomer/lib/elements/Subtitle';
import React, { useState } from 'react';
import Nav from '../components/nav';
import packageJson from '../package.json';

function useSpecialTag(version: string): string[] {
  let theSpecialTag = '';
  let theSpecialTagColor = '';

  if (version.match('-dev')) {
    theSpecialTag = 'DEV';
    theSpecialTagColor = 'danger';
  } else if (version.match('-alpha')) {
    theSpecialTag = 'α';
    theSpecialTagColor = 'warning';
  } else if (version.match('-beta')) {
    theSpecialTag = 'β';
    theSpecialTagColor = 'info';
  }

  const [specialTag] = useState(theSpecialTag);
  const [specialTagColor] = useState(theSpecialTagColor);

  return [specialTag, specialTagColor];
}
export default function About() {
  const { version } = packageJson;
  const [specialTag, specialTagColor] = useSpecialTag(version);

  return (
    <div className="container">
      <Head>
        <title>pMediaNode / 關於</title>
      </Head>
      <Nav pageTitle="關於" />
      <Section>
        <Container>
          <Columns>
            <Column>
              <Title isSize={4}>
                pMediaNode
                <Tag isColor="success">NEXT</Tag>
                {
                  specialTag !== ''
                  && <Tag isColor={specialTagColor}>{specialTag}</Tag>
                }
              </Title>
              <Subtitle isSize={6}>嶄新的輕量影片寄存平台。</Subtitle>
            </Column>
            <Column>
              <Content>
                <Title isSize={5}>組建版本</Title>
                <p>{packageJson.version}</p>
                <Title isSize={5}>開發者</Title>
                <ul>
                  <li>
                    Pan93412
                    {' '}
                    <br />
                    專案創始者、核心開發者
                  </li>
                </ul>
              </Content>
            </Column>
          </Columns>
        </Container>
      </Section>
    </div>
  );
}
