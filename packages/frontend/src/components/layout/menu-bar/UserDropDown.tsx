import React from 'react';
import { motion } from 'framer-motion';
import { useToggle } from '../../../hooks';

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

export default function UserDropDown() {
  const [isOpen, toggleOpen] = useToggle();

  return (
    <div className="border-l inline-block ml-6 relative">
      <motion.nav animate={isOpen ? 'open' : 'closed'} initial={false}>
        <button
          className="text-white ml-6 focus:outline-none"
          onClick={(_) => {
            (toggleOpen as () => void)();
          }}
        >
          Matt
        </button>
        <motion.div
          variants={variants}
          className="absolute mt-6 z-10 mt-0 bg-purple-700 text-white text-sm w-24 p-3 border-b-4 border-l-4 border-r-4 border-purple-400"
        >
          Sign Out
        </motion.div>
      </motion.nav>
    </div>
  );
}
