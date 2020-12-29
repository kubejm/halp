import React from 'react';
import { useHistory } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { TextArea } from '../shared';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { graphql, useMutation } from 'react-relay/hooks';
import { AnswerFormMutation } from '../../__generated__/AnswerFormMutation.graphql';
import { handleFormError } from '../../utils';

const schema = yup.object().shape({
  answer: yup.string().required(),
});

interface AnswerFormInput {
  answer: string;
}

interface Props {
  questionId: string;
}

export default function AnswerForm(props: Props) {
  const formMethods = useForm({
    resolver: yupResolver(schema),
    shouldFocusError: false,
  });

  const [commit, isInFlight] = useMutation<AnswerFormMutation>(graphql`
    mutation AnswerFormMutation($input: AnswerQuestionInput!) {
      answerQuestion(input: $input) {
        id
        ...QuestionDetails_question
        ...AnswerList_question
      }
    }
  `);
  const history = useHistory();

  const onSubmit = (values: AnswerFormInput) => {
    console.log(values);
    commit({
      variables: {
        input: {
          id: props.questionId,
          answer: values.answer,
        },
      },
      onError(error) {
        handleFormError(formMethods, error);
      },
      onCompleted() {
        history.push(`/question/${props.questionId}`);
      },
    });
  };

  return (
    <div className="bg-white border-l border-b p-6">
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <TextArea label="Your Answer" name="answer" cols={10} rows={5} />
          <input
            type="submit"
            value="Post Your Answer"
            className="w-full bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold p-3 cursor-pointer"
            disabled={isInFlight}
          />
        </form>
      </FormProvider>
    </div>
  );
}
