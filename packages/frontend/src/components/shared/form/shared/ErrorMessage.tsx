import React from 'react';

interface Props {
  errorMessage?: string;
}

export default function ErrorMessage({ errorMessage }: Props) {
  return (
    <>
      {errorMessage && (
        <span className="text-sm text-red-600">{errorMessage}</span>
      )}
    </>
  );
}
