import React from 'react';
import { useForm } from 'react-hook-form';
import { graphql, useMutation } from 'react-relay/hooks';
import { loginFormMutation } from '../../__generated__/loginFormMutation.graphql';
import { useHistory } from 'react-router-dom';

export default function QuestionForm() {
  const { register, handleSubmit } = useForm();
  const [commit, isInFlight] = useMutation<loginFormMutation>(graphql`
    mutation loginFormMutation($input: SignInInput!) {
      signIn(input: $input) {
        ok
      }
    }
  `);
  const history = useHistory();

  const onSubmit = (values: Record<string, string>) => {
    commit({
      variables: {
        input: {
          username: values.username,
          password: values.password,
        },
      },
      onCompleted() {
        history.push('/');
      },
    });
  };

  return (
    <>
      <div className="flex">
        <div className="w-auto inline-block m-auto mt-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white shadow-md rounded p-6"
          >
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
                <input
                  name="username"
                  className="border p-2 mt-3 w-full"
                  ref={register({ required: true })}
                />
              </label>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
                <input
                  name="password"
                  className="border p-2 mt-3 w-full"
                  ref={register({ required: true })}
                />
              </label>
            </div>
            <input
              type="submit"
              value="Log In"
              className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold p-3 cursor-pointer"
              disabled={isInFlight}
            />
          </form>
        </div>
      </div>
    </>
  );
}
