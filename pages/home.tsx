import Head from 'next/head';
import { Section, Container, Title } from 'bloomer';
import Nav from '../components/nav';
import getVideo, { IVideoMeta } from '../libs/getVideo';
import VideoCard from '../components/videoCard';
import { Columns } from 'bloomer/lib/grid/Columns';
import { Column } from 'bloomer/lib/grid/Column';
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
          <Columns>
            <Column>
              <Title>最新影片</Title>
              <Subtitle>時刻保持最新。</Subtitle>
              {
                videoData.map(meta => (
                  <VideoCard id={meta.id} title={meta.title} desc={meta.desc}></VideoCard>
                ))
              }
            </Column>
            {/* <Column>
              <Title>熱門影片</Title>
              <Subtitle>跟上最新潮流！</Subtitle>
            </Column> */}
          </Columns>
        </Container>
      </Section>
    </div>
  )
}
