import Head from 'next/head';
import { Section, Container, Title, Columns, Column } from 'bloomer';
import Nav from '../components/nav';
import { Subtitle } from 'bloomer/lib/elements/Subtitle';
import { useEffect } from 'react';
import Router from 'next/router';

export default function About() {
  useEffect(() => {
    setTimeout(() => Router.push('/home'), 5000); // 5s
  });

  return (
    <div className="container">
      <Head>
        <title>pMediaNode / 404</title>
      </Head>
      <Nav pageTitle='OAO' />
      <Section>
        <Container>
          <Columns>
            <Column>
              <Title isSize={1}>
                OAO <sup>404</sup>
              </Title>
              <Subtitle isSize={5}>您欲存取的頁面不存在! 5 秒後返回首頁。</Subtitle>
            </Column>
          </Columns>
        </Container>
      </Section>
    </div>
  )
}
