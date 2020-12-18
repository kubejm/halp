import React from 'react';
import QuestionSummary from './QuestionSummary';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { QuestionListQuery } from '../../__generated__/QuestionListQuery.graphql';

interface Props {
  orderBy: 'ACTIVE' | 'NEW' | 'VOTES';
}

export default function QuestionList(props: Props) {
  const { questions } = useLazyLoadQuery<QuestionListQuery>(
    graphql`
      query QuestionListQuery($input: GetQuestionsInput!) {
        questions(input: $input) {
          answers
          createdAtRelative
          excerpt
          id
          question
          tags {
            name
          }
          user {
            username
          }
          views
          votes
        }
      }
    `,
    {
      input: {
        orderBy: props.orderBy,
      },
    },
    {
      fetchPolicy: 'store-and-network',
    }
  );

  return (
    <>
      {questions.map((question) => (
        <QuestionSummary
          key={question.id}
          id={question.id}
          answers={question.answers}
          createdAtRelative={question.createdAtRelative}
          username={question.user.username}
          excerpt={question.excerpt}
          question={question.question}
          tags={question.tags}
          views={question.views}
          votes={question.votes}
        />
      ))}
    </>
  );
}
