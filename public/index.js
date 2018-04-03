import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/App';

import './styles/index.scss';

const rootEl = document.getElementById('root');

render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl,
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(
      <AppContainer>
        <App />
      </AppContainer>,
      rootEl,
    );
  });
}
