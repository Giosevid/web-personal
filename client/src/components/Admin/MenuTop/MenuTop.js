import React from 'react';
import "./MenuTop.scss";
import GioseLogo from "../../../assets/img/png/logo-white.png"
import { Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, PoweroffOutlined } from '@ant-design/icons';

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img className="menu-top__left-logo" src={GioseLogo} alt="Giosevid Acosta"/>
        <Button className="menu-top__left-button" type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          { menuCollapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined /> }
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={() => console.log('Power')}>
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  )
}