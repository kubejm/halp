import React from 'react';
import { useStore } from '../../../store';
import { graphql, useMutation } from 'react-relay/hooks';
import { useHistory } from 'react-router-dom';
import { SignOutButtonMutation } from '../../../__generated__/SignOutButtonMutation.graphql';

export default function MenuBar() {
  const { logout } = useStore((state) => ({ logout: state.logout }));

  const history = useHistory();
  const [commit] = useMutation<SignOutButtonMutation>(graphql`
    mutation SignOutButtonMutation {
      signOut {
        ok
      }
    }
  `);

  async function signOut() {
    commit({
      variables: {},
      onCompleted() {
        logout();
        history.push('/');
      },
    });
  }

  return (
    <button className="text-white ml-4" onClick={signOut}>
      Logout
    </button>
  );
}
