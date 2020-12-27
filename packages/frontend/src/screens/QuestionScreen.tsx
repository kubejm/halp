import React from 'react';
import { match, RouteComponentProps } from 'react-router-dom';
import { QuestionDetails, AnswerList, AnswerForm } from '../components';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { QuestionScreenMutation } from '../__generated__/QuestionScreenMutation.graphql';

interface QuestionScreenParams {
  id: string;
}

interface QuestionScreenProps extends RouteComponentProps {
  match: match<QuestionScreenParams>;
}

export default function QuestionScreen(props: QuestionScreenProps) {
  const id = props.match.params.id;

  const { viewQuestion: question } = useLazyLoadQuery<QuestionScreenMutation>(
    graphql`
      mutation QuestionScreenMutation($input: QuestionByIdInput!) {
        viewQuestion(input: $input) {
          ...QuestionDetails_question
          ...AnswerList_question
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
