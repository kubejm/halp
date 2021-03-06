import React, { InputHTMLAttributes, useState, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import clsx from 'clsx';
import { Tag } from '../../shared';
import { ErrorMessage } from './shared';

interface TagInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

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

  const remove = (tag: string) => (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    setValue(
      name,
      tags.filter((t) => t !== tag)
    );
    setTags(tags.filter((t) => t !== tag));
  };

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
          placeholder="e.g. rest, json, git"
        />
      </label>
      <ul className="flex flex-row items-start">
        {tags.map((tag, index) => (
          <li key={index}>
            <Tag label={tag} onDelete={remove(tag)} />
          </li>
        ))}
      </ul>
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
}
