import React from 'react';
import { match, RouteComponentProps } from 'react-router-dom';
import { QuestionListByTag } from '../components';

interface ScreenParams {
  tag: string;
}

interface ScreenProps extends RouteComponentProps {
  match: match<ScreenParams>;
}

export default function QuestionsByTag(props: ScreenProps) {
  const tag = props.match.params.tag;

  return (
    <>
      <QuestionListByTag tag={tag} />
    </>
  );
}
