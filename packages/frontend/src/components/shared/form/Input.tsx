import React, { InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';
import { FormInput } from './shared';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export default function Input({ name, label, className, ...rest }: InputProps) {
  const { errors, register } = useFormContext();
  const errorMessage = errors[name]?.message;

  return (
    <FormInput label={label} errorMessage={errorMessage}>
      <input
        {...rest}
        name={name}
        className={clsx(
          'border p-2 mt-3 w-full',
          errorMessage && 'border-red-500'
        )}
        autoComplete="off"
        ref={register}
      />
    </FormInput>
  );
}
