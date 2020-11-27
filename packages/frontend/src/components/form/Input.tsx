import React, { InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export default function Input(props: InputProps) {
  const { errors, register } = useFormContext();
  const errorMessage = errors[props.name]?.message;

  return (
    <div className={clsx('mb-6', props.className)}>
      <label className="block text-gray-700 text-sm font-bold mb-1">
        {props.label}
        <input
          name={props.name}
          className={clsx(
            'border p-2 mt-3 w-full',
            errorMessage && 'border-red-500'
          )}
          ref={register}
        />
      </label>
      {errorMessage && (
        <span className="text-sm text-red-600">{errorMessage}</span>
      )}
    </div>
  );
}
