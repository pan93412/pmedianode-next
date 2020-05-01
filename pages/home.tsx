import Head from 'next/head';
import { Section, Container, Title } from 'bloomer';
import Nav from '../components/nav';
import getVideo, { IVideoMeta } from '../libs/getVideo';
import { Subtitle } from 'bloomer/lib/elements/Subtitle';
import { useState } from 'react';

export default function Home() {
  const [videoData, setVideoData] = useState(getVideo().videos);

  return (
    <div className="container">
      <Head>
        <title>pMediaNode / 首頁</title>
      </Head>
      <Nav pageTitle='首頁'/>
      <Section>
        <Container>
          <Title>歡迎使用 pMediaNode!</Title>
          <Subtitle>目前此站台有 {videoData.length} 部影片。</Subtitle>
        </Container>
      </Section>
    </div>
  )
}
