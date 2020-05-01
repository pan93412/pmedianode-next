import Head from 'next/head';
import { Section, Container, Button, Title } from 'bloomer';
import Nav from '../components/nav';
import VideoCard from '../components/videoCard';
import { Columns } from 'bloomer/lib/grid/Columns';
import { Column } from 'bloomer/lib/grid/Column';
import { Subtitle } from 'bloomer/lib/elements/Subtitle';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>pMediaNode / 首頁</title>
      </Head>
      <Nav pageTitle='首頁' user='admin'/>
      <Section>
        <Container>
          <Columns>
            <Column>
              <Title>最新影片</Title>
              <Subtitle>時刻保持最新。</Subtitle>
              <VideoCard id='test' title='測試' desc='測試' uploadedOn={new Date()}></VideoCard>
            </Column>
            <Column>
              <Title>熱門影片</Title>
              <Subtitle>跟上最新潮流！</Subtitle>
            </Column>
          </Columns>
        </Container>
      </Section>
    </div>
  )
}
