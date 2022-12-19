import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import { Divider, Layout, Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined, UserOutlined,HomeOutlined,MedicineBoxOutlined  } from '@ant-design/icons';
import type { MenuProps } from 'antd';

import styles from './appSider.module.less';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

interface AppSiderProps{
    collapsed: boolean
    showSaved: boolean
}

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const AppSider: React.FC<AppSiderProps> = (props) => {

  const navigate = useNavigate();

  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [isGeneralMenuSelected, setIsGeneralMenuSelected] = useState(true);

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    navigationPath: string = '/',
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
      onClick: ()=> {navigate(navigationPath)}
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem(('Home'), 'home', <HomeOutlined />, '/'),
    getItem(('Appoinment'), 'Appoinment', <MailOutlined />, '/appoinment'),
    getItem(('Patients'), 'Patients', <UserOutlined />, '/patient'),
    getItem(('Messages'), 'Messages', <MailOutlined />, '/message'),
    getItem(('Medications'), 'Medications', <MedicineBoxOutlined />, '/medication'),
    getItem(('Documents'), 'sub1', <MailOutlined />, '', [
      getItem('Option 1', '1'),
      getItem('Option 2', '2'),
      getItem('Option 3', '3'),
      getItem('Option 4', '4'),
    ]),
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, '', [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Submenu', 'sub3', null, '', [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
    getItem('Navigation Three', 'sub4', <SettingOutlined />, '', [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),
  ];

  const savedItems: MenuItem[] = [
    getItem('Iframe', 'iframe', <MailOutlined />, '/iframe'),
    getItem('Iframe2', 'iframe2', <MailOutlined />, '/iframe')
  ];

  const onOpenChange: MenuProps['onOpenChange'] = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

    return(
        <Sider trigger={null} collapsible collapsed={props.collapsed}>
          <div className={styles.logo} />
          <div className={(isGeneralMenuSelected) ? '' : styles.generalMenus} onClick={() => setIsGeneralMenuSelected(true)}>
            <Menu
                mode="inline"
                theme="dark"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                items={items}
             />
          </div>
          {props.showSaved && <div>
            <Divider className={styles.divider}>{(props.collapsed) ? '' : 'Saved'}</Divider>
            <p className={styles.savedMenuDescription}>{(props.collapsed) ? '' : 'This section is only visible to you'}</p>
            <div className={(isGeneralMenuSelected) ? styles.savedMenus : ''} onClick={() => setIsGeneralMenuSelected(false)}>
            <Menu
                  mode="inline"
                  theme="dark"
                  onOpenChange={onOpenChange}
                  items={savedItems}
            />
            </div>
          </div>
          }
        </Sider>
      )

}

export default AppSider;