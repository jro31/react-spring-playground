import { Fragment } from 'react';
import CountUpAndDown from './components/CountUpAndDown';
import FadeInTextLoop from './components/FadeInTextLoop';
import ScrollingWords from './components/ScrollingWords';

const App = () => {
  return (
    <Fragment>
      <FadeInTextLoop />
      <CountUpAndDown />
      <ScrollingWords />
    </Fragment>
  );
};

export default App;
