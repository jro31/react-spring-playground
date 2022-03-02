import { Fragment } from 'react';

import CountUpAndDown from './components/CountUpAndDown';
import FadeInTextLoop from './components/FadeInTextLoop';
import LoadingBar from './components/LoadingBar';
import ScrollingWords from './components/ScrollingWords';
import SlideySquare from './components/SlideySquare';
import SpinnySquare from './components/SpinnySquare';

const App = () => {
  return (
    <Fragment>
      <FadeInTextLoop />
      <CountUpAndDown />
      <ScrollingWords />
      <SpinnySquare />
      <SlideySquare />
      <LoadingBar />
    </Fragment>
  );
};

export default App;
