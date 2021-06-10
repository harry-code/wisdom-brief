import React, { useState } from 'react';
import { Menu } from 'antd';
import { RoutesData, routes } from '~/routes';
import { useHistory } from 'react-router-dom';
import './index.less'

const { SubMenu } = Menu;

function Sider() {
  const history = useHistory();
  const rootSubmenuKeys = RoutesData?.map((item: any) => {
    // item为数组当前的元素
    return item.path;
  });
  const [openKeys, setOpenKeys] = React.useState([rootSubmenuKeys[0]]);

  const handleClick = (e: any) => {
    history.push(e.key)
  }
  const onOpenChange = (keys: any) => {
    const latestOpenKey = keys.find((key: any) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <>
      <Menu mode="inline"
        className="sider"
        onClick={handleClick}
        onOpenChange={onOpenChange}
        // defaultSelectedKeys={['/brief-manage']}
        openKeys={openKeys}
        defaultOpenKeys={['/brief-manage']}
        style={{ width: 256 }}>
        {RoutesData?.map((item: routes, index: number) => {
          return (
            <SubMenu
              key={item?.path}
              title={
                <span>{item?.title}</span>
              }>
              {item.routes?.map((ite: { path: string; title: React.ReactNode; }, ind: any) => {
                return <Menu.Item key={ite.path}>{ite.title}</Menu.Item>;
              })}
            </SubMenu>
          );
        })}
      </Menu>
    </>
  )
}

export default Sider;