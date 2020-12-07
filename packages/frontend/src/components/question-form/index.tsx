import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { graphql, useMutation } from 'react-relay/hooks';
import { questionFormMutation } from '../../__generated__/questionFormMutation.graphql';
import { useHistory } from 'react-router-dom';
import { Input, TagInput, TextArea } from '../form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  question: yup.string().required(),
  body: yup.string().required(),
});

export default function QuestionForm() {
  const formMethods = useForm({
    resolver: yupResolver(schema),
    shouldFocusError: false,
  });

  const [commit, isInFlight] = useMutation<questionFormMutation>(graphql`
    mutation questionFormMutation($input: AddQuestionInput!) {
      addQuestion(input: $input) {
        id
      }
    }
  `);
  const history = useHistory();

  const onSubmit = (values: Record<string, string>) => {
    commit({
      variables: {
        input: {
          body: values.body,
          question: values.question,
          ...(values.tags && { tags: values.tags }),
        },
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
