import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

import styles from './ClickyDiv.module.css';

const ClickyDiv = () => {
  const [divIsBold, setDivIsBold] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: divIsBold ? 1 : 0,
    config: { duration: 1000 },
  });

  return (
    <div className={styles.container} onClick={() => setDivIsBold(!divIsBold)}>
      <animated.div
        className={styles.text}
        style={{
          opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
          scale: x.to({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
          }),
        }}
      >
        click
      </animated.div>
    </div>
  );
};

export default ClickyDiv;
