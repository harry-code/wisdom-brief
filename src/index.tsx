import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import * as serviceWorker from './serviceWorker';
import './public-path';

import './index.scss';

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <Router />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount() {
  render();
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('root')!);
}

serviceWorker.unregister();
