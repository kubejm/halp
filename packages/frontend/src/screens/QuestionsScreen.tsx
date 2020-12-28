import React from 'react';
import { match, RouteComponentProps } from 'react-router-dom';
import {
  QuestionSorter,
  QuestionList,
  QuestionPageNavigation,
} from '../components';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { QuestionsScreenQuery } from '../__generated__/QuestionsScreenQuery.graphql';
import { OrderQuestionsBy } from '../types';
import * as H from 'history';

interface ScreenParams {
  tag: string;
}

interface ScreenProps extends RouteComponentProps {
  location: H.Location;
  match: match<ScreenParams>;
}

type OrderByKey = keyof typeof OrderQuestionsBy;

function getOrderBy(query: string) {
  const orderByKey = Object.keys(OrderQuestionsBy).find(
    (key) => key === query.toUpperCase()
  ) as OrderByKey;
  return OrderQuestionsBy[orderByKey];
}

export default function QuestionsScreen(props: ScreenProps) {
  const query = new URLSearchParams(props.location.search);
  const page = Number(query.get('page')) || 1;
  const tag = props.match.params.tag;

  const orderByQuery = query.get('orderBy') || 'active';
  const orderBy = getOrderBy(orderByQuery);

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
