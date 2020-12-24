import React from 'react';
import QuestionSummary from './QuestionSummary';
import { graphql, useFragment } from 'react-relay/hooks';
import { QuestionList_questionsPage$key } from '../../__generated__/QuestionList_questionsPage.graphql';

interface Props {
  questionsPage: QuestionList_questionsPage$key;
}

export default function QuestionList(props: Props) {
  const { questions } = useFragment(
    graphql`
      fragment QuestionList_questionsPage on QuestionsPage {
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
    props.questionsPage
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
