import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
import ErrorBoundary from '~/components/common/ErrorBoundary';

const FirstDraft = React.lazy(() => import('~/views/brief-firstDraft/index'))
const Detail = React.lazy(() => import('~/views/detail/index'))
const Info = React.lazy(() => import('~/views/info/index'))
const Login = React.lazy(() => import('~/components/common/login'))
const Sider = React.lazy(() => import('~/components/common/sider'))

function PrimaryLayout() {
  return (
    <div className="main-wrapper">
      <div className="main-wrapper-content">
        <Sider />
        <div className="main-wrapper-content-right">
          <Switch>
            <Route exact path="/brief-firstDraft"><FirstDraft /></Route>
            <Route path="/detail"><Detail /></Route>
            <Route path="/info"><Info /></Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default () => (
  <div className="page-content">
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <ConfigProvider locale={zhCN}>
          <BrowserRouter>
            <Switch>
              <Route path="/login"><Login /></Route>
              <PrimaryLayout />
            </Switch>
          </BrowserRouter>
        </ConfigProvider>
      </Suspense>
    </ErrorBoundary>
  </div >
)