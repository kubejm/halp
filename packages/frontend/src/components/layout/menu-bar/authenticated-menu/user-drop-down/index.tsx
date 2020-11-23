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
          className="absolute -left-20 z-10 bg-white text-black text-sm w-32 px-4 border-2 rounded"
        >
          <div className="px-2 py-2 text-center font-bold">
            {data.profile.username}
          </div>
          <div className="border border-b-1"></div>
          <div className="px-2 py-2">
            <SignOutButton />
          </div>
        </motion.div>
      </motion.nav>
    </div>
  );
}
