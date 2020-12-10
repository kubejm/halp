import React from 'react';
import QuestionSummary from './QuestionSummary';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { QuestionListByTagQuery } from '../../__generated__/QuestionListByTagQuery.graphql';

interface Props {
  tag: string;
}

export default function QuestionListByTag(props: Props) {
  const { questions } = useLazyLoadQuery<QuestionListByTagQuery>(
    graphql`
      query QuestionListByTagQuery($input: GetQuestionsInput!) {
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
        tag: props.tag,
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
