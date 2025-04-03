import { AnimatePresence } from "motion/react";
import { PropsWithChildren } from "react";
import * as motion from "motion/react-client";

const EntryAnimationWrapper = ({ children }: PropsWithChildren) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={"loading"}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default EntryAnimationWrapper;
