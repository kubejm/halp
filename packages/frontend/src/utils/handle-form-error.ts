import { ValidationError } from './errors';
import { UseFormMethods } from 'react-hook-form';

export default function handleFormError(
  formMethods: UseFormMethods<Record<string, any>>,
  error: Error
) {
  if (error instanceof ValidationError) {
    formMethods.setError(error.property, {
      type: 'server',
      message: error.constraint,
    });
  }
}
