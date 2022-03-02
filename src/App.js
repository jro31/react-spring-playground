import { Fragment } from 'react';
import CountUpAndDown from './components/CountUpAndDown';
import FadeInTextLoop from './components/FadeInTextLoop';
import ScrollingWords from './components/ScrollingWords';
import SpinnySquare from './components/SpinnySquare';

const App = () => {
  return (
    <Fragment>
      <FadeInTextLoop />
      <CountUpAndDown />
      <ScrollingWords />
      <SpinnySquare />
    </Fragment>
  );
};

export default App;
