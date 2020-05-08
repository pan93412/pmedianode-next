import Head from 'next/head';
import {
  Section, Container, Columns, Column, Content,
} from 'bloomer';
import React from 'react';
import Nav from '../components/nav';

const imgOf404 = [
  'https://httpstatusdogs.com/img/404.jpg',
  'https://http.cat/404',
];

export default function Error404() {
  const img = imgOf404[Math.floor(Math.random() * 2)];

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
              <img src={img} alt="404 Not Found" width="100%" height="100%" />
            </Column>
            <Column>
              <Content>
                <p>可能是這些原因:</p>
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
