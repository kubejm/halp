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
          author
          createdAtRelative
          excerpt
          id
          question
          tags {
            name
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
          askedTime={question.createdAtRelative}
          author={question.author}
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
