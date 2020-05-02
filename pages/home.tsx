import Head from 'next/head';
import {
  Section, Container, Title, Columns, Column,
} from 'bloomer';
import { Subtitle } from 'bloomer/lib/elements/Subtitle';
import React, { useState } from 'react';
import Nav from '../components/nav';
import getVideo from '../libs/getVideo';
import VideoCard from '../components/videoCard';

export default function Home() {
  const [videoData] = useState(getVideo().videos);
  const [latestVideo] = useState(getVideo().videos[0]);

  return (
    <div className="container">
      <Head>
        <title>pMediaNode / 首頁</title>
      </Head>
      <Nav pageTitle="首頁" />
      <Section>
        <Container>
          <Title>歡迎使用 pMediaNode!</Title>
          <Subtitle>
            目前此站台有
            {' '}
            {videoData.length}
            {' '}
            部影片。
          </Subtitle>
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
                    <VideoCard
                      id={latestVideo.id}
                      title={latestVideo.title}
                      desc={latestVideo.desc}
                    />
                  )
                  : (
                    <div>
                      <Title isSize={5}>喔不。</Title>
                      <Subtitle isSize={6}>這站台空空如也，連一則影片都沒有!</Subtitle>
                    </div>
                  )
              }
            </Column>
          </Columns>
        </Container>
      </Section>
    </div>
  );
}
