import { useSpring, animated } from 'react-spring';

const SpinnySquare = () => {
  const styles = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
  });

  return (
    <animated.div
      style={{
        width: 80,
        height: 80,
        marginTop: '15px',
        backgroundColor: '#46e891',
        borderRadius: 16,
        ...styles,
      }}
    />
  );
};

export default SpinnySquare;
