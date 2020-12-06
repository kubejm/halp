import React, { TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';

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
    <div className={clsx('mb-6', className)}>
      <label className="block text-gray-700 text-sm font-bold mb-1">
        {label}
        <textarea
          {...rest}
          name={name}
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
