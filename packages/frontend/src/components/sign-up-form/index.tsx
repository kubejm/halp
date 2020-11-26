import React from 'react';
import { useForm } from 'react-hook-form';
import { graphql, useMutation } from 'react-relay/hooks';
import { signUpFormMutation } from '../../__generated__/signUpFormMutation.graphql';
import { useHistory } from 'react-router-dom';
import { useStore } from '../../store';
import { ValidationError } from '../../utils';

export default function SignInForm() {
  const { register, handleSubmit, errors, setError } = useForm();
  const [commit, isInFlight] = useMutation<signUpFormMutation>(graphql`
    mutation signUpFormMutation($input: SignUpInput!) {
      signUp(input: $input) {
        ok
      }
    }
  `);

  const history = useHistory();
  const authenticate = useStore((state) => state.authenticate);

  const onSubmit = (values: Record<string, string>) => {
    commit({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password,
        },
      },
      onError(error) {
        if (error instanceof ValidationError) {
          setError(error.property, {
            type: 'server',
            message: error.constraint,
          });
        }
      },
      onCompleted() {
        authenticate();
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
                Email
                <input
                  name="email"
                  className="border p-2 mt-3 w-full"
                  ref={register({ required: true })}
                />
              </label>
              {errors.email && (
                <span className="text-sm text-red-600">
                  {errors.email.message}
                </span>
              )}
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
              value="Sign Up"
              className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold p-3 cursor-pointer"
              disabled={isInFlight}
            />
          </form>
        </div>
      </div>
    </>
  );
}
