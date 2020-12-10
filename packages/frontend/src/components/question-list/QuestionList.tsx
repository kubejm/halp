import React from 'react';
import QuestionSummary from './QuestionSummary';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { QuestionListQuery } from '../../__generated__/QuestionListQuery.graphql';

export default function QuestionList() {
  const { questions } = useLazyLoadQuery<QuestionListQuery>(
    graphql`
      query QuestionListQuery {
        questions {
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
    {},
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
