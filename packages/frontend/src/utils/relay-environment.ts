import {
  Environment,
  Network,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
} from 'relay-runtime';
import ValidationError from './validation-error';
import auth from './auth';

async function fetchRelay(params: RequestParameters, variables: Variables) {
  const response = await fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });

  const json = await response.json();

  // class-validator and relay do not play nice
  // work around to accommodate, so validation errors flow through easily
  if (Array.isArray(json.errors) && json.errors.length > 0) {
    // TODO: clean this up
    const errorCode = json.errors[0]?.extensions?.code;
    if (errorCode === 'UNAUTHENTICATED') {
      auth.signOut();
    }

    const validationErrors =
      json.errors[0]?.extensions?.exception?.validationErrors;
    if (Array.isArray(validationErrors) && validationErrors.length > 0) {
      const validationError = validationErrors[0];
      const property = validationError.property;
      const constraint = String(Object.values(validationError.constraints)[0]);

      throw new ValidationError(property, constraint);
    }
  }

  return json;
}

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource(), {
    gcReleaseBufferSize: 0,
  }),
});
