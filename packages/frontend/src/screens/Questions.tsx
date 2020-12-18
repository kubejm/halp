import React from 'react';
import { QuestionSorter, QuestionList } from '../components';

export default function Questions() {
  const orderBy = 'NEW';

  return (
    <>
      <QuestionSorter />
      <QuestionList orderBy={orderBy} />
    </>
  );
}
