export default class ValidationError extends Error {
  property: string;

  constraint: string;

  constructor(property: string, constraint: string) {
    super('Validation Error');

    this.property = property;
    this.constraint = constraint;
  }
}
