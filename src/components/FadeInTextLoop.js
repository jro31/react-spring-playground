import { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

const FadeInTextLoop = () => {
  const [flip, setFlip] = useState(false);

  const springProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => setFlip(!flip),
  });

  return (
    <div>
      <animated.h1 style={springProps}>Fade-in text loop</animated.h1>
    </div>
  );
};

export default FadeInTextLoop;
