// See https://codesandbox.io/s/github/pmndrs/react-spring/tree/master/demo/src/sandboxes/animating-auto

import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import useMeasure from 'react-use-measure';

import styles from './LoadingBar.module.css';

const LoadingBar = () => {
  const [open, setOpen] = useState(false);
  const [ref, { width }] = useMeasure();
  const styleProps = useSpring({ width: open ? width : 0 });

  return (
    <div className={styles.container}>
      <div ref={ref} className={styles.main} onClick={() => setOpen(!open)}>
        <animated.div className={styles.fill} style={styleProps} />
        <animated.div className={styles.content}>
          {styleProps.width.to(x => x.toFixed(0))}
        </animated.div>
      </div>
    </div>
  );
};

export default LoadingBar;
