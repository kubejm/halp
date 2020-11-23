import React from 'react';
import { motion } from 'framer-motion';
import { useToggle } from '../../../../../hooks';
import SignOutButton from './SignOutButton';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { userDropDownQuery } from '../../../../../__generated__/userDropDownQuery.graphql';

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

// TODO: clean up css
// TODO: fix styling of drop down
export default function UserDropDown() {
  const data = useLazyLoadQuery<userDropDownQuery>(
    graphql`
      query userDropDownQuery {
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
          className="w-8 h-8 rounded-full items-center bg-purple-400 text-white focus:outline-none"
          onClick={(_) => {
            (toggleOpen as () => void)();
          }}
        >
          A
        </button>
        <motion.div
          variants={variants}
          className="absolute -left-20 z-10 bg-gray-50 text-black text-sm w-32 p-3 border-2 rounded"
        >
          <div>{data.profile.username}</div>
          <SignOutButton />
        </motion.div>
      </motion.nav>
    </div>
  );
}
