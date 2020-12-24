import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { TextArea } from '../form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  body: yup.string().required(),
});

interface AnswerFormInput {
  body: string;
}

export default function AnswerForm() {
  const formMethods = useForm({
    resolver: yupResolver(schema),
    shouldFocusError: false,
  });

  const onSubmit = (values: AnswerFormInput) => {
    console.log(values);
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
            disabled={false}
          />
        </form>
      </FormProvider>
    </div>
  );
}
