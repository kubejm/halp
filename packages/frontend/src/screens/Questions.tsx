import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { QuestionSorter, QuestionList } from '../components';
import * as H from 'history';

interface ScreenProps extends RouteComponentProps {
  location: H.Location;
}

enum OrderBy {
  active = 'ACTIVE',
  new = 'NEW',
  votes = 'VOTES',
}

type OrderByKey = keyof typeof OrderBy;

function getOrderBy(query: string) {
  const orderByKey = Object.keys(OrderBy).find(
    (key) => key === query
  ) as OrderByKey;
  return OrderBy[orderByKey];
}

export default function Questions(props: ScreenProps) {
  const query = new URLSearchParams(props.location.search);
  const orderByQuery = query.get('orderBy') || 'new';
  const orderBy = getOrderBy(orderByQuery);

  return (
    <>
      <QuestionSorter orderBy={orderBy} />
      <QuestionList orderBy={orderBy} />
    </>
  );
}
