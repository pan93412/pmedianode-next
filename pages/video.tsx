import Head from 'next/head';
import { Section, Container, Title, Columns, Column, LevelLeft, LevelItem, Field, Control, Input, Button, LevelRight, Level } from 'bloomer';
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
      <Nav pageTitle='影片' />
      <Section>
        <Container>
          <Title>影片庫</Title>
        </Container>
      </Section>
      <Section>
        <Container style={{ marginBottom: '3em' }}>
          <Level>
            <LevelLeft>
              <LevelItem>
                <Subtitle tag='p' isSize={5}><strong>{videoData.length}</strong> 部影片</Subtitle>
              </LevelItem>
            </LevelLeft>
            <LevelRight>
              <LevelItem>
                <Field hasAddons>
                  <Control>
                    <Input placeholder='搜尋影片...' />
                  </Control>
                  <Control>
                    <Button>搜尋</Button>
                  </Control>
                </Field>
              </LevelItem>
            </LevelRight>
          </Level>
        </Container>
        <Container>
          <Columns isMultiline>
            {
              videoData.map(vid => {
                return (
                  <Column isSize={'1/3'}>
                    <VideoCard id={vid.id} title={vid.title} desc={vid.desc} larger></VideoCard>
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
