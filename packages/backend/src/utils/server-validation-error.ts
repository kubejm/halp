import { ArgumentValidationError } from 'type-graphql';
import { ValidationError } from 'class-validator';

type constraint = {
  [type: string]: string;
};

export class ServerValidationError extends ArgumentValidationError {
  constructor(property: string, constraint: constraint) {
    const validationError = new ValidationError();
    validationError.property = property;
    validationError.constraints = constraint;

    super([validationError]);
  }
}
