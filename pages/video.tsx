import Head from 'next/head';
import { Section, Container, Title, Columns, Column } from 'bloomer';
import Nav from '../components/nav';
import getVideo from '../libs/getVideo';
import { Subtitle } from 'bloomer/lib/elements/Subtitle';
import { useState } from 'react';
import VideoCard from '../components/videoCard';

export default function Home() {
  const [videoData, setVideoData] = useState(getVideo().videos);

  return (
    <div className="container">
      <Head>
        <title>pMediaNode / 影片</title>
      </Head>
      <Nav pageTitle='影片'/>
      <Section>
        <Container>
          <Title>影片庫</Title>
          <Subtitle>目前此站台有 {videoData.length} 部影片。</Subtitle>
        </Container>
      </Section>
      <Section>
        <Container>
          <Columns isMultiline>
            {
              videoData.map(vid => {
                return (
                  <Column isSize={'1/3'}>
                    <VideoCard id={vid.id} title={vid.title} desc={vid.desc}></VideoCard>
                  </Column>
                );
              })
            }  
          </Columns>  
        </Container>
      </Section>
    </div>
  )
}
