import React from 'react';
import AnswerDetails from './AnswerDetails';
import { graphql, useFragment } from 'react-relay/hooks';
import { answerList_question$key } from '../../__generated__/answerList_question.graphql';

interface Props {
  questionId: string;
  question: answerList_question$key;
}

export default function AnswerList(props: Props) {
  const { answers } = useFragment(
    graphql`
      fragment answerList_question on Question {
        answers {
          body
          user {
            username
          }
          createdAtRelative
        }
      }
    `,
    props.question
  );

  return (
    <>
      {answers.map((answer, index) => (
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
