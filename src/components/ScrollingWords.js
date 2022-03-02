// See https://react-spring.io/basics#do-not-think-of-the-values-you-pass-as-styles-per-se

import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const ScrollingWords = () => {
  const [flip, setFlip] = useState(false);

  const words = [
    'Jethro',
    'looked',
    'over',
    'all',
    'he',
    'had',
    'created',
    'and',
    'realised',
    'it',
    'was',
    'good',
  ];

  const { scroll } = useSpring({
    scroll: (words.length - 1) * 80,
    from: { scroll: 0 },
    reset: true,
    reverse: flip,
    delay: 1000,
    config: { tension: 75, friction: 50 },
    onRest: () => setFlip(!flip),
  });

  return (
    <animated.div
      style={{
        position: 'relative',
        width: '200px',
        height: 80,
        overflow: 'auto',
        fontSize: '4rem',
      }}
      scrollTop={scroll}
    >
      {words.map((word, i) => (
        <div key={`${word}_${i}`} style={{ width: '100%', height: '5rem', textAlign: 'center' }}>
          {word}
        </div>
      ))}
    </animated.div>
  );
};

export default ScrollingWords;
