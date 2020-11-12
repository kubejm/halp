import React from 'react';
import QuestionSummary from './QuestionSummary';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { questionListQuery } from '../../__generated__/questionListQuery.graphql';

export default function QuestionList() {
  const { questions } = useLazyLoadQuery<questionListQuery>(
    graphql`
      query questionListQuery {
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
    {}
  );

  return (
    <>
      {questions.map((question) => (
        <QuestionSummary
          key={question.id}
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
