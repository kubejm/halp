import React from 'react';
import { useStore } from '../../../store';
import { graphql, useMutation } from 'react-relay/hooks';
import { useHistory } from 'react-router-dom';
import { SignOutButtonMutation } from '../../../__generated__/SignOutButtonMutation.graphql';

export default function MenuBar() {
  const logOut = useStore((state) => state.logOut);

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
        logOut();
        history.push('/');
      },
    });
  }

  return (
    <button className="text-white ml-4" onClick={handleLogOut}>
      Sign Out
    </button>
  );
}
