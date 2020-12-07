import React, { InputHTMLAttributes, useState, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import clsx from 'clsx';

interface TagInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

// TODO: clean up redundancy in this component
export default function TagInput({
  name,
  label,
  className,
  ...rest
}: TagInputProps) {
  const { errors, register, setValue } = useFormContext();
  register(name);
  const errorMessage = errors[name]?.message;

  const [tags, setTags] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    if (value && event.key === 'Enter') {
      event.preventDefault();

      if (!tags.some((tag) => tag.toLowerCase() === value.toLowerCase())) {
        setValue(name, [...tags, value]);
        setTags([...tags, value]);
      }

      if (inputRef && inputRef.current) {
        inputRef.current.value = '';
        inputRef.current.focus();
      }
    }
  };

  const remove = (tag: string) => {
    setValue(
      name,
      tags.filter((t) => t !== tag)
    );
    setTags(tags.filter((t) => t !== tag));
  };

  // TODO: abstract tags into separate component
  return (
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Tags
        <input
          {...rest}
          name={name}
          className={clsx(
            'border p-2 mt-3 w-full',
            errorMessage && 'border-red-500'
          )}
          onKeyDown={handleKeyDown}
          ref={inputRef}
          autoComplete="off"
        />
      </label>
      <ul>
        {tags.map((tag, index) => (
          <li
            key={index}
            className="inline-block bg-purple-400 text-white text-xs px-2 py-1 rounded mr-1"
          >
            <span>{tag}</span>
            <button
              onClick={() => remove(tag)}
              className="ml-1 text-sm font-bold text-purple-100 hover:text-purple-500 focus:outline-none"
            >
              x
            </button>
          </li>
        ))}
      </ul>
      {errorMessage && (
        <span className="text-sm text-red-600">{errorMessage}</span>
      )}
    </div>
  );
}
