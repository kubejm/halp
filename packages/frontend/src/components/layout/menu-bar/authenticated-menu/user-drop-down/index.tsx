import React from 'react';
import { motion } from 'framer-motion';
import { useToggle } from '../../../../../hooks';
import SignOutButton from './SignOutButton';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import { userDropDownQuery } from '../../../../../__generated__/userDropDownQuery.graphql';
import clsx from 'clsx';

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

interface DropDownItemProps {
  children?: React.ReactNode;
  className?: string;
}

function DropDownItem({ children, className }: DropDownItemProps) {
  return <div className={clsx('px-2 py-2', className)}>{children}</div>;
}

function DropDownDivider() {
  return <div className="border border-b-1"></div>;
}

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
          <DropDownItem className="text-center font-bold">
            {data.profile.username}
          </DropDownItem>
          <DropDownDivider />
          <DropDownItem>
            <SignOutButton />
          </DropDownItem>
        </motion.div>
      </motion.nav>
    </div>
  );
}
