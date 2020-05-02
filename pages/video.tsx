import Head from 'next/head';
import {
  Section, Container, Title, Columns, Column, LevelLeft,
  LevelItem, Field, Control, Input, Button, LevelRight, Level,
} from 'bloomer';
import { Subtitle } from 'bloomer/lib/elements/Subtitle';
import React, { useState } from 'react';
import Nav from '../components/nav';
import getVideo from '../libs/getVideo';
import VideoCard from '../components/videoCard';

export default function Video() {
  const [videoData] = useState(getVideo().videos);

  return (
    <div className="container">
      <Head>
        <title>pMediaNode / 影片</title>
      </Head>
      <Nav pageTitle="影片" />
      <Section>
        <Container style={{ marginBottom: '3em' }}>
          <Title>影片庫</Title>
        </Container>
        <Container style={{ marginBottom: '3em' }}>
          <Level>
            <LevelLeft>
              <LevelItem>
                <Subtitle tag="p" isSize={5}>
                  <strong>{videoData.length}</strong>
                  {' '}
                  部影片
                </Subtitle>
              </LevelItem>
            </LevelLeft>
            <LevelRight>
              <LevelItem>
                <Field hasAddons>
                  <Control>
                    <Input placeholder="搜尋影片..." />
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
              videoData.map((vid) => (
                <Column isSize="1/3">
                  <VideoCard id={vid.id} title={vid.title} desc={vid.desc} larger />
                </Column>
              ))
            }
          </Columns>
        </Container>
      </Section>
    </div>
  );
}
