import React from 'react';
import QuestionSummary from './QuestionSummary';
import questions from '../../fixtures/questions.json';

interface Tag {
  label: string;
}

interface Question {
  answers: number;
  askedTime: string;
  author: string;
  excerpt: string;
  question: string;
  tags: Tag[];
  views: number;
  votes: number;
}

export default function QuestionList() {
  return (
    <>
      {questions.map((question: Question, index: number) => (
        <QuestionSummary
          key={index}
          answers={question.answers}
          askedTime={question.askedTime}
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
