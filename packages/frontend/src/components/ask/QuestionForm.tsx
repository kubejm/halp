import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { graphql, useMutation } from 'react-relay/hooks';
import { QuestionFormMutation } from '../../__generated__/QuestionFormMutation.graphql';
import { useHistory } from 'react-router-dom';
import { Input, TagInput, TextArea } from '../shared';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { handleFormError } from '../../utils';

const schema = yup.object().shape({
  question: yup.string().required(),
  body: yup.string().required(),
  tags: yup.array().required(),
});

interface QuestionFormInput {
  body: string;
  question: string;
  tags: string[];
}

export default function QuestionForm() {
  const formMethods = useForm({
    resolver: yupResolver(schema),
    shouldFocusError: false,
  });

  const [commit, isInFlight] = useMutation<QuestionFormMutation>(graphql`
    mutation QuestionFormMutation($input: AddQuestionInput!) {
      addQuestion(input: $input) {
        id
      }
    }
  `);
  const history = useHistory();

  const onSubmit = (values: QuestionFormInput) => {
    commit({
      variables: {
        input: {
          body: values.body,
          question: values.question,
          tags: values.tags,
        },
      },
      onError(error) {
        handleFormError(formMethods, error);
      },
      onCompleted() {
        history.push('/');
      },
    });
  };

  return (
    <>
      <div className="w-full mt-6">
        <FormProvider {...formMethods}>
          <form
            onSubmit={formMethods.handleSubmit(onSubmit)}
            className="bg-white shadow-md rounded p-6"
          >
            <Input
              label="Question"
              name="question"
              placeholder="e.g. How do I exit vim?"
              maxLength={300}
            />
            <TextArea
              label="Body"
              name="body"
              cols={10}
              rows={5}
              placeholder="Provide information for others to help you"
            />
            <TagInput label="Tags" name="tags" />
            <input
              type="submit"
              value="Submit"
              className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold p-3 cursor-pointer"
              disabled={isInFlight}
            />
          </form>
        </FormProvider>
      </div>
    </>
  );
}
