import Head from 'next/head';
import {
  Section, Container, Title, Columns, Column, LevelLeft,
  LevelItem, Field, Control, Input, LevelRight, Level,
} from 'bloomer';
import { Subtitle } from 'bloomer/lib/elements/Subtitle';
import React, { FormEvent } from 'react';
import Nav from '../../components/nav';
import getAnnounce, { IAnnounce } from '../../libs/getAnnounce';
import MediaCard, { ECardContext as cardCtx } from '../../components/mediaCard';

interface IProps {}
interface IState {
  mediaData: IAnnounce[];
}

function getData() {
  return getAnnounce().announcements;
}

const subFind = (str1: string, str2: string) => (
  str1.toLowerCase().includes(str2.toLowerCase())
);

export default class Video extends React.Component<IProps, IState> {
  ctx = cardCtx.announce;

  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      mediaData: getData(),
    };

    this.search = this.search.bind(this);
    this.updateMediaData = this.updateMediaData.bind(this);
  }

  updateMediaData(mediaData: IAnnounce[]) {
    this.setState({ mediaData });
  }

  search(e: FormEvent<HTMLInputElement>) {
    const query = e.currentTarget.value;
    this.updateMediaData(getData().filter((meta) => {
      let found = false;
      if (query !== '') {
        query.toLowerCase().split(' ').forEach((q) => {
          if (
            meta.id === query
            || subFind(meta.title, q)
            || subFind(meta.content, q)
          ) found = true;
        });
      }
      return found;
    }));
  }

  render() {
    const { mediaData } = this.state;

    return (
      <div className="container">
        <Head>
          <title>pMediaNode / 公告</title>
        </Head>
        <Nav pageTitle="公告" />
        <Section>
          <Container style={{ marginBottom: '3em' }}>
            <Title>公告</Title>
          </Container>
          <Container style={{ marginBottom: '3em' }}>
            <Level>
              <LevelLeft>
                <LevelItem>
                  <Subtitle tag="p" isSize={5}>
                    <strong>{mediaData.length}</strong>
                    {' '}
                    則公告
                  </Subtitle>
                </LevelItem>
              </LevelLeft>
              <LevelRight>
                <LevelItem>
                  <Field hasAddons>
                    <Control>
                      <Input onChange={this.search} placeholder="搜尋公告..." />
                    </Control>
                  </Field>
                </LevelItem>
              </LevelRight>
            </Level>
          </Container>
          <Container>
            <Columns isMultiline>
              {
                mediaData.map((m) => (
                  <Column isSize="1/3">
                    <MediaCard
                      context={this.ctx}
                      id={m.id}
                      title={m.title}
                      desc={m.content}
                      larger
                    />
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
