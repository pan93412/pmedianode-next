import Head from 'next/head';
import {
  Section, Container, Title, Columns, Column,
} from 'bloomer';
import { Subtitle } from 'bloomer/lib/elements/Subtitle';
import React from 'react';
import Nav from '../components/nav';
import getVideo, { IVideoMeta } from '../libs/getVideo';
import getAudio, { IAudioMeta } from '../libs/getAudio';
import MediaCard, { ECardContext as cardCtx } from '../components/mediaCard';

const getLatest = (content: Array<IVideoMeta|IAudioMeta>) => content[0];

export default function Home() {
  const [
    videoData,
    audioData,
  ] = [
    getVideo().videos,
    getAudio().audios,
  ];

  const [
    latestVideo,
    latestAudio,
  ] = [
    getLatest(videoData),
    getLatest(audioData),
  ];

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
            部影片和
            {' '}
            {audioData.length}
            {' '}
            張專輯。
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
                    <MediaCard
                      context={cardCtx.video}
                      id={latestVideo.id}
                      title={latestVideo.title}
                      desc={latestVideo.desc}
                    />
                  )
                  : (
                    <div>
                      <Title isSize={5}>喔不。</Title>
                      <Subtitle isSize={6}>這站台沒有任何影片!</Subtitle>
                    </div>
                  )
              }
            </Column>
            <Column>
              <Title isSize={4}>最新專輯</Title>
              {
                audioData.length > 0
                  ? (
                    <MediaCard
                      context={cardCtx.audio}
                      id={latestAudio.id}
                      title={latestAudio.title}
                      desc={latestAudio.desc}
                    />
                  )
                  : (
                    <div>
                      <Title isSize={5}>喔不。</Title>
                      <Subtitle isSize={6}>這站台沒有任何音樂!</Subtitle>
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
