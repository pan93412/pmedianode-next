import Head from 'next/head';
import {
  Section, Container, Title, Columns, Column, LevelLeft,
  LevelItem, Field, Control, Input, LevelRight, Level,
} from 'bloomer';
import { Subtitle } from 'bloomer/lib/elements/Subtitle';
import React, { FormEvent } from 'react';
import Nav from '../components/nav';
import getVideo, { IVideoMeta } from '../libs/getVideo';
import VideoCard from '../components/videoCard';

interface IProps {}
interface IState {
  videoData: IVideoMeta[];
}

export default class Video extends React.Component<IProps, IState> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      videoData: getVideo().videos,
    };

    this.search = this.search.bind(this);
    this.updateVideoData = this.updateVideoData.bind(this);
  }

  updateVideoData(query: string) {
    const newResult = getVideo().videos.filter((meta) => {
      if (query === '') return true;
      if (
        meta.id === query
        || meta.author === query
        || meta.title.includes(query)
        || meta.desc.includes(query)
        || meta.tags.includes(query)
      ) return true;
      return false;
    });

    this.setState({ videoData: newResult });
  }

  search(e: FormEvent<HTMLInputElement>) {
    this.updateVideoData(e.currentTarget.value);
  }

  render() {
    const { videoData } = this.state;

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
                      <Input onChange={this.search} placeholder="搜尋影片..." />
                    </Control>
                    {/* <Control>
                      <Button onClick={doSearch()}>搜尋</Button>
                    </Control> */}
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
}
