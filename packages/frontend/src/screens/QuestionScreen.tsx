import React from 'react';
import { match, RouteComponentProps } from 'react-router-dom';
import { QuestionDetails, AnswerList, AnswerForm } from '../components';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { QuestionScreenMutation } from '../__generated__/QuestionScreenMutation.graphql';
import { useStore } from '../store';

interface QuestionScreenParams {
  id: string;
}

interface QuestionScreenProps extends RouteComponentProps {
  match: match<QuestionScreenParams>;
}

export default function QuestionScreen(props: QuestionScreenProps) {
  const id = props.match.params.id;
  const isAuthenticated = useStore((state) => state.isAuthenticated);

  const { viewQuestion: question } = useLazyLoadQuery<QuestionScreenMutation>(
    graphql`
      mutation QuestionScreenMutation($input: QuestionByIdInput!) {
        viewQuestion(input: $input) {
          ...QuestionDetails_question
          ...AnswerList_question
          isUserAuthor
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

  const { isUserAuthor } = question;

  return (
    <>
      <QuestionDetails id={id} question={question} />
      <AnswerList questionId={id} question={question} />
      {isAuthenticated && !isUserAuthor && <AnswerForm questionId={id} />}
    </>
  );
}
