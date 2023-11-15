import { ComponentType } from 'react';

import { motion, useIsPresent } from 'framer-motion';

export default function withTransition(Component: ComponentType) {
  return () => {
    const isPresent = useIsPresent();

    return (
      <>
        <Component />
        <motion.div
          className="slide"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0, transition: { duration: 0.5, ease: 'circOut' } }}
          exit={{ scaleY: 1, transition: { duration: 0.5, ease: 'circIn' } }}
          style={{ originY: isPresent ? 0 : 1 }}
        />
      </>
    );
  };
}
