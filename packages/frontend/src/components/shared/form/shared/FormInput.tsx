import React from 'react';
import ErrorMessage from './ErrorMessage';
import clsx from 'clsx';

interface Props {
  label: string;
  children: React.ReactNode;
  errorMessage?: string;
  className?: string;
}

export default function FormInput(props: Props) {
  return (
    <div className={clsx('mb-6', props.className)}>
      <label className="block text-gray-700 text-sm font-bold mb-1">
        {props.label}
        {props.children}
      </label>
      <ErrorMessage errorMessage={props.errorMessage} />
    </div>
  );
}
