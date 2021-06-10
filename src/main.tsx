import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import 'antd/dist/antd.less';
import '~/assets/common.less';

function reactRender() {
  ReactDOM.render(
    <Router />,
    document.getElementById('root')
  )
}
// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  reactRender();
} else {
  // @ts-ignore
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

export async function bootstrap() {

}
export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('root')!);
}
export async function mount() {
  reactRender();
}


