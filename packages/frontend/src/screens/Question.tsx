import React from 'react';
import { match, RouteComponentProps } from 'react-router-dom';
import { QuestionDetails, AnswerList, AnswerForm } from '../components';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { QuestionMutation } from '../__generated__/QuestionMutation.graphql';

interface QuestionScreenParams {
  id: string;
}

interface QuestionScreenProps extends RouteComponentProps {
  match: match<QuestionScreenParams>;
}

export default function Question(props: QuestionScreenProps) {
  const id = props.match.params.id;

  const { viewQuestion: question } = useLazyLoadQuery<QuestionMutation>(
    graphql`
      mutation QuestionMutation($input: QuestionByIdInput!) {
        viewQuestion(input: $input) {
          ...questionDetails_question
          ...answerList_question
        }
      }
    `,
    {
      input: {
        id,
      },
    },
    {
      fetchPolicy: 'store-and-network',
    }
  );

  return (
    <>
      <QuestionDetails id={id} question={question} />
      <AnswerList questionId={id} question={question} />
      <AnswerForm questionId={id} />
    </>
  );
}
