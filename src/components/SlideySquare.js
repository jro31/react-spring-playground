// See https://react-spring.io/common/props#the-loop-object

import { useSpring, animated } from 'react-spring';

const SlideySquare = () => {
  const styles = useSpring({
    loop: { reverse: true },
    from: { x: 0 },
    to: { x: 100 },
  });

  return (
    <animated.div
      style={{
        width: 80,
        height: 80,
        backgroundColor: '#46e891',
        borderRadius: 16,
        ...styles,
      }}
    />
  );
};

export default SlideySquare;
