import React from 'react';
import { useHistory } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { TextArea } from '../form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { graphql, useMutation } from 'react-relay/hooks';
import { answerFormMutation } from '../../__generated__/answerFormMutation.graphql';
import { ValidationError } from '../../utils';

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

  const [commit, isInFlight] = useMutation<answerFormMutation>(graphql`
    mutation answerFormMutation($input: AnswerQuestionInput!) {
      answerQuestion(input: $input) {
        id
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
        if (error instanceof ValidationError) {
          formMethods.setError(error.property, {
            type: 'server',
            message: error.constraint,
          });
        }
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
