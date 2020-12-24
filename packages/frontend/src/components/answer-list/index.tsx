import React from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { answerListQuery } from '../../__generated__/answerListQuery.graphql';

interface AnswerDetailsProps {
  body: string;
}

function AnswerDetails(props: AnswerDetailsProps) {
  return (
    <div className="bg-white border-l border-b p-4">
      <div className="flex">
        <div className="flex-grow">
          <div className="text-sm">{props.body}</div>
          <div className="flex flex-row-reverse justify-between min-w-full mt-6">
            <div className="p-2 text-gray-500 text-sm align-middle w-28 min-w-min">
              <div className="text-xs">Answered ...</div>
              <div>author</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Props {
  questionId: string;
}

export default function AnswerList(props: Props) {
  const {
    viewQuestion: { questionAnswers },
  } = useLazyLoadQuery<answerListQuery>(
    graphql`
      mutation answerListQuery($input: ViewQuestionInput!) {
        viewQuestion(input: $input) {
          questionAnswers {
            body
          }
        }
      }
    `,
    {
      input: {
        id: props.questionId,
      },
    },
    {
      fetchPolicy: 'store-and-network',
    }
  );

  return (
    <>
      {questionAnswers.map((answer) => (
        <AnswerDetails body={answer.body} />
      ))}
    </>
  );
}
