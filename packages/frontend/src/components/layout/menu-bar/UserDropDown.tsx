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
          className="absolute mt-6 z-10 ml-4 mt-0 bg-purple-700 text-white"
        >
          Sign Out
        </motion.div>
      </motion.nav>
    </div>
  );
}
