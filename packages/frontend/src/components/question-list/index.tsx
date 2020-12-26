import React from 'react';
import QuestionSummary from './QuestionSummary';
import { graphql, useFragment } from 'react-relay/hooks';
import { questionList_questionsPage$key } from '../../__generated__/questionList_questionsPage.graphql';

interface Props {
  questionsPage: questionList_questionsPage$key;
}

export default function QuestionList(props: Props) {
  const { questions } = useFragment(
    graphql`
      fragment questionList_questionsPage on QuestionsPage {
        questions {
          answerCount
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
          voteCount
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
          answerCount={question.answerCount}
          createdAtRelative={question.createdAtRelative}
          username={question.user.username}
          excerpt={question.excerpt}
          question={question.question}
          tags={question.tags}
          views={question.views}
          voteCount={question.voteCount}
        />
      ))}
    </>
  );
}
