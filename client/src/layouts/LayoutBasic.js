import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Layout } from 'antd';
import './LayoutBasic.scss';

export default function LayoutBasic({ routes }) {
  const { Content, Footer} = Layout
  return(
    <Layout>
      <h2>Menu Sider Basic</h2>
      <Layout>
        <Content><LoadRoutes routes={routes}/></Content>
        <Footer>Giosevid Acosta</Footer>
      </Layout>
    </Layout>
  )
}

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {
        routes.map((route, idx) => (
          <Route key={idx} path={route.path} exact={route.exact} component={route.component} />
        ))
      }
    </Switch>
  )
}
