import { gql, request } from 'graphql-request';
import users from './fixtures/users.json';

const endpoint = 'http://localhost:4000/graphql';

const SignUp = gql`
  mutation SignUp($input: SignUpInput!) {
    signUp(input: $input) {
      ok
    }
  }
`;

async function seed() {
  for (let i = 0; i < users.length; i++) {
    const response = await request(endpoint, SignUp, {
      input: {
        ...users[i],
      },
    });
    console.log(response);
  }
}

seed().catch(console.error);
