import React from 'react';
import { match, RouteComponentProps } from 'react-router-dom';
import {
  QuestionSorter,
  QuestionList,
  QuestionPageNavigation,
} from '../components';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { QuestionsScreenQuery } from '../__generated__/QuestionsScreenQuery.graphql';
import * as H from 'history';

interface ScreenParams {
  tag: string;
}

interface ScreenProps extends RouteComponentProps {
  location: H.Location;
  match: match<ScreenParams>;
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

export default function QuestionsScreen(props: ScreenProps) {
  const query = new URLSearchParams(props.location.search);
  const orderByQuery = query.get('orderBy') || 'new';
  const orderBy = getOrderBy(orderByQuery);
  const page = Number(query.get('page')) || 1;
  const tag = props.match.params.tag;

  const { questionsPage } = useLazyLoadQuery<QuestionsScreenQuery>(
    graphql`
      query QuestionsScreenQuery($input: GetQuestionsInput!) {
        questionsPage(input: $input) {
          ...QuestionSorter_questionsPage
          ...QuestionList_questionsPage
          ...QuestionPageNavigation_questionsPage
        }
      }
    `,
    {
      input: {
        orderBy,
        page,
        ...(tag && { tag }),
      },
    },
    {
      fetchPolicy: 'store-and-network',
    }
  );

  // TODO: base path for sorter
  return (
    <>
      <QuestionSorter
        questionsPage={questionsPage}
        orderBy={orderBy}
        tag={tag}
      />
      <QuestionList questionsPage={questionsPage} />
      <QuestionPageNavigation
        questionsPage={questionsPage}
        currentPage={page}
      />
    </>
  );
}
