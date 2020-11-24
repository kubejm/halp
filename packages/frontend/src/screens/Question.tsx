import React from 'react';
import { match, RouteComponentProps } from 'react-router-dom';
import { QuestionDetails } from '../components';

interface QuestionScreenParams {
  id: string;
}

interface QuestionScreenProps extends RouteComponentProps {
  match: match<QuestionScreenParams>;
}

export default function Question(props: QuestionScreenProps) {
  const id = props.match.params.id;

  return (
    <>
      <QuestionDetails id={id} />
    </>
  );
}
