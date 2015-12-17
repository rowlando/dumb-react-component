import React from 'react';
import {render} from 'react-dom';
import createDumb from './components/dumb';

const Dumb = createDumb(React);

const dumbProps = {
  title: 'World!'
}

render(
  <Dumb {...dumbProps} />,
  document.getElementById('root')
);
