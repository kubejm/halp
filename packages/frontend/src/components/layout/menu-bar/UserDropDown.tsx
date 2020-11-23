import React from 'react';
import { motion } from 'framer-motion';
import { useToggle } from '../../../hooks';
import SignOutButton from './SignOutButton';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { UserDropDownQuery } from '../../../__generated__/UserDropDownQuery.graphql';

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

// TODO: clean up css
// TODO: fix styling of drop down
export default function UserDropDown() {
  const data = useLazyLoadQuery<UserDropDownQuery>(
    graphql`
      query UserDropDownQuery {
        profile {
          username
        }
      }
    `,
    {}
  );

  const [isOpen, toggleOpen] = useToggle();

  return (
    <div className="inline-block relative">
      <motion.nav animate={isOpen ? 'open' : 'closed'} initial={false}>
        <button
          className="text-white py-1 px-4 focus:outline-none"
          onClick={(_) => {
            (toggleOpen as () => void)();
          }}
        >
          {data.profile.username}
        </button>
        <motion.div
          variants={variants}
          className="absolute mt-6 z-10 mt-0 bg-purple-700 text-white text-sm w-32 p-3 border-b-4 border-l-4 border-r-4 border-purple-400"
        >
          <SignOutButton />
        </motion.div>
      </motion.nav>
    </div>
  );
}
