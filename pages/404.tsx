import Head from 'next/head';
import {
  Section, Container, Title, Columns, Column, Content,
} from 'bloomer';
import { Subtitle } from 'bloomer/lib/elements/Subtitle';
import React from 'react';
import Nav from '../components/nav';

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>pMediaNode / 404</title>
      </Head>
      <Nav pageTitle="404" />
      <Section>
        <Container>
          <Columns>
            <Column>
              <Title isSize={1}>
                OAO
                {' '}
                <sup>404</sup>
              </Title>
              <Subtitle isSize={5}>您欲存取的頁面不存在!</Subtitle>
            </Column>
            <Column>
              <Content>
                <p>可能是這些原因：</p>
                <ul>
                  <li>此頁面已被刪除。</li>
                  <li>您輸入的網址錯誤。</li>
                  <li>此頁面仍在開發中。</li>
                </ul>
              </Content>
            </Column>
          </Columns>
        </Container>
      </Section>
    </div>
  );
}
