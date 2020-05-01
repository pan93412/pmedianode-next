import Head from 'next/head';
import { Section, Container, Title, Columns, Column } from 'bloomer';
import Nav from '../components/nav';
import getVideo from '../libs/getVideo';
import { Subtitle } from 'bloomer/lib/elements/Subtitle';
import { useState } from 'react';
import VideoCard from '../components/videoCard';

export default function Home() {
  const [videoData, setVideoData] = useState(getVideo().videos);
  const [latestVideo, setLatestVideo] = useState(getVideo().videos[videoData.length - 1]);

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
      <Section>
        <Container>
          <Columns>
            <Column>
              <Title isSize={4}>最新影片</Title>
              {
                videoData.length > 0
                ? (
                  <VideoCard id={latestVideo.id} title={latestVideo.title} desc={latestVideo.desc}></VideoCard>
                )
                : (
                  <div><b>喔不。</b>這站台空空如也，連一則影片都沒有!</div>
                )
              }
            </Column>
          </Columns>          
        </Container>
      </Section>
    </div>
  )
}
