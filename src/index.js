import React from 'react';
import {render} from 'react-dom';
import AppRouter from './AppRouter';
import seed from './seed';

render(
  <AppRouter />,
  document.getElementById('root')
);
