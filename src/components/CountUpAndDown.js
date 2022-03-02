import { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

const CountUpAndDown = () => {
  const [flip, setFlip] = useState(false);

  const { number } = useSpring({
    reset: true,
    reverse: flip,
    from: { number: 0 },
    number: 100,
    delay: 200,
    config: config.molasses,
    onRest: () => setFlip(!flip),
  });

  return <animated.h2>{number.to(n => n.toFixed(0))}</animated.h2>;
};

export default CountUpAndDown;
