import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { QuestionSorter, QuestionList, QuestionPager } from '../components';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { QuestionsQuery } from '../__generated__/QuestionsQuery.graphql';
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
  const page = Number(query.get('page')) || 1;

  const { questionsPage } = useLazyLoadQuery<QuestionsQuery>(
    graphql`
      query QuestionsQuery($input: GetQuestionsInput!) {
        questionsPage(input: $input) {
          ...QuestionList_questionsPage
        }
      }
    `,
    {
      input: {
        orderBy,
        page,
      },
    },
    {
      fetchPolicy: 'store-and-network',
    }
  );

  return (
    <>
      <QuestionSorter orderBy={orderBy} />
      <QuestionList questionsPage={questionsPage} />
      <QuestionPager page={page} />
    </>
  );
}
