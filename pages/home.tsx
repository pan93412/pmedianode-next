import Head from 'next/head';
import { Section, Container, Title } from 'bloomer';
import Nav from '../components/nav';
import getVideo, { IVideoMeta } from '../libs/getVideo';
import { Subtitle } from 'bloomer/lib/elements/Subtitle';
import { useState } from 'react';

export default function Home() {
  const [videoData, setVideoData] = useState([] as IVideoMeta[]);
  getVideo().then(d => d.videos).then(d => {
    setVideoData(d);
  });

  return (
    <div className="container">
      <Head>
        <title>pMediaNode / 首頁</title>
      </Head>
      <Nav pageTitle='首頁'/>
      <Section>
        <Container>
          <Title>歡迎使用 pMediaNode!</Title>
          <Subtitle>目前已有 {videoData.length} 部影片。</Subtitle>
        </Container>
      </Section>
    </div>
  )
}
