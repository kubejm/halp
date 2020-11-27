import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { graphql, useMutation } from 'react-relay/hooks';
import { signInFormMutation } from '../../__generated__/signInFormMutation.graphql';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useStore } from '../../store';
import * as yup from 'yup';
import { Input } from '../form';
import { ValidationError } from '../../utils';

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

export default function SignInForm() {
  const formMethods = useForm({
    resolver: yupResolver(schema),
    shouldFocusError: false,
  });

  const [commit, isInFlight] = useMutation<signInFormMutation>(graphql`
    mutation signInFormMutation($input: SignInInput!) {
      signIn(input: $input) {
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
          password: values.password,
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
        authenticate();
        history.push('/');
      },
    });
  };

  return (
    <>
      <div className="flex">
        <div className="w-auto inline-block m-auto mt-6">
          <FormProvider {...formMethods}>
            <form
              onSubmit={formMethods.handleSubmit(onSubmit)}
              className="bg-white shadow-md rounded p-6"
            >
              <Input label="Username" name="username" />
              <Input label="Password" name="password" />
              <input
                type="submit"
                value="Sign In"
                className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold p-3 cursor-pointer"
                disabled={isInFlight}
              />
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
}
