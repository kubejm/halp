import React from 'react';
import { useStore } from '../../../../../store';
import { graphql, useMutation } from 'react-relay/hooks';
import { useHistory } from 'react-router-dom';
import { SignOutButtonMutation } from '../../../../../__generated__/SignOutButtonMutation.graphql';

export default function MenuBar() {
  const signOut = useStore((state) => state.signOut);

  const history = useHistory();
  const [commit] = useMutation<SignOutButtonMutation>(graphql`
    mutation SignOutButtonMutation {
      signOut {
        ok
      }
    }
  `);

  async function handleLogOut() {
    commit({
      variables: {},
      onCompleted() {
        signOut();
        history.push('/');
      },
    });
  }

  return (
    <button onClick={handleLogOut} className="focus:outline-none">
      Sign Out
    </button>
  );
}
