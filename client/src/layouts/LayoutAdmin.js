import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'

import "./LayoutAdmin.scss"
import MenuTop from '../components/Admin/MenuTop/MenuTop'
import MenuSider from '../components/Admin/MenuSider'

export default function LayoutAdmin({ routes }) {
  const { Header , Content, Footer} = Layout;
  const [menuCollapsed, setMenuCollapsed] = useState(false);

  return(
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed}/>
      <Layout className="layout-admin" style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}>
        <Header className="layout-admin__header">
          <MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed} />
        </Header>
        <Content className="layout-admin__content">
          <LoadRoutes routes={routes}/>
        </Content>
        <Footer className="layou-admin__footer">Footer</Footer>
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
