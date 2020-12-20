import { gql, GraphQLClient } from 'graphql-request';
import questions from './fixtures/questions.json';

const endpoint = 'http://localhost:4000/graphql';

const signIn = (username: string, password: string) => gql`
  mutation signIn {
    signIn(input: { username: "${username}", password: "${password}" }) {
      ok
    }
  }
`;

const addQuestion = (question: string, body: string, tags: string[]) => gql`
  mutation addQuestion {
    addQuestion(
      input: {
        question: "${question}"
        body: "${body}"
        tags: ${JSON.stringify(tags)}
      }
    ) {
      id
    }
  }
`;

async function seed() {
  const graphQLClient = new GraphQLClient(endpoint);

  const { headers } = await graphQLClient.rawRequest(
    signIn('matt', 'password')
  );
  const cookie = String(headers.get('set-cookie'));

  const userClient = new GraphQLClient(endpoint, {
    headers: {
      Cookie: cookie,
    },
  });

  for (let i = 0; i < questions.length; i++) {
    const { question, body, tags } = questions[i];
    await userClient.rawRequest(addQuestion(question, body, tags));
  }
}

seed().catch(console.error);
