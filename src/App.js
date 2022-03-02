import { Fragment } from 'react';
import CountUpAndDown from './components/CountUpAndDown';
import FadeInTextLoop from './components/FadeInTextLoop';

const App = () => {
  return (
    <Fragment>
      <FadeInTextLoop />
      <CountUpAndDown />
    </Fragment>
  );
};

export default App;
