import React from 'react';
import { useForm } from 'react-hook-form';
import { graphql, useMutation } from 'react-relay/hooks';
import { questionFormMutation } from '../../__generated__/questionFormMutation.graphql';
import { useHistory } from 'react-router-dom';

export default function QuestionForm() {
  const { register, handleSubmit } = useForm();
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded p-6"
        >
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Question
              <input
                name="question"
                placeholder="e.g. How do I exit vim?"
                className="border p-2 mt-3 w-full"
                ref={register({ required: true })}
              />
            </label>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Body
              <textarea
                name="body"
                cols={10}
                rows={5}
                placeholder="Provide information for others to help you"
                className="border p-2 mt-3 w-full"
                ref={register({ required: true })}
              ></textarea>
            </label>
          </div>
          <input
            type="submit"
            value="Submit"
            className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold p-3 cursor-pointer"
            disabled={isInFlight}
          />
        </form>
      </div>
    </>
  );
}
