import React from 'react';
import AnswerDetails from './AnswerDetails';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { answerListQuery } from '../../__generated__/answerListQuery.graphql';

interface Props {
  questionId: string;
}

export default function AnswerList(props: Props) {
  const {
    viewQuestion: { questionAnswers },
  } = useLazyLoadQuery<answerListQuery>(
    graphql`
      mutation answerListQuery($input: ViewQuestionInput!) {
        viewQuestion(input: $input) {
          questionAnswers {
            body
            user {
              username
            }
            createdAtRelative
          }
        }
      }
    `,
    {
      input: {
        id: props.questionId,
      },
    },
    {
      fetchPolicy: 'store-and-network',
    }
  );

  return (
    <>
      {questionAnswers.map((answer, index) => (
        <AnswerDetails
          key={index}
          body={answer.body}
          username={answer.user.username}
          createdAtRelative={answer.createdAtRelative}
        />
      ))}
    </>
  );
}
