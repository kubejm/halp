import React from 'react';
import { useStore } from '../../../store';
import { graphql, useMutation } from 'react-relay/hooks';
import { useHistory } from 'react-router-dom';
import { LogOutButtonMutation } from '../../../__generated__/LogOutButtonMutation.graphql';

export default function MenuBar() {
  const { logOut } = useStore((state) => ({ logOut: state.logOut }));

  const history = useHistory();
  const [commit] = useMutation<LogOutButtonMutation>(graphql`
    mutation LogOutButtonMutation {
      logOut {
        ok
      }
    }
  `);

  async function logOutHandler() {
    commit({
      variables: {},
      onCompleted() {
        logOut();
        history.push('/');
      },
    });
  }

  return (
    <button className="text-white ml-4" onClick={logOutHandler}>
      Logout
    </button>
  );
}
