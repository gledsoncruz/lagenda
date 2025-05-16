'use client';

import React from 'react';
import { UseFormRegister, FieldErrors, Path } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';

type InputProps = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
};

type Props<T extends FieldValues> = InputProps & {
  id: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
};

export function Input<T extends FieldValues>({
  id,
  label,
  type = 'text',
  placeholder = '',
  autoComplete = 'off',
  register,
  errors,
}: Props<T>) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...register(id)}
        className={`bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border rounded py-2 px-4 block w-full appearance-none ${errors[id] ? 'border-red-500' : 'border-gray-300'
          }`}
      />
      {errors[id] && (
        <p className="text-red-500 text-xs mt-1">{(errors[id]?.message as string) || 'Campo inválido'}</p>
      )}
    </div>
  );
}