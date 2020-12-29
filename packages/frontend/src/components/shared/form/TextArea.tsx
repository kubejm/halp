import React, { TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';
import { FormInput } from './shared';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

export default function TextArea({
  name,
  label,
  className,
  ...rest
}: TextAreaProps) {
  const { errors, register } = useFormContext();
  const errorMessage = errors[name]?.message;

  return (
    <FormInput label={label} errorMessage={errorMessage}>
      <textarea
        {...rest}
        name={name}
        className={clsx(
          'border p-2 mt-3 w-full',
          errorMessage && 'border-red-500'
        )}
        ref={register}
      />
    </FormInput>
  );
}
