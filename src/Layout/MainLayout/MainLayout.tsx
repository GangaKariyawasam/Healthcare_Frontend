import React, { useState } from "react";
import { Layout } from 'antd';
import { Outlet, useLocation } from 'react-router-dom';
import { ReactComponent as ChevronLeft } from '../../Assets/Images/ChevronLeft.svg';
import { ReactComponent as ChevronRight } from '../../Assets/Images/ChevronRight.svg';

import AppSider from "./AppSider/AppSider";
import AppHeader from "./AppHeader/AppHeader";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";

import styles from './mainLayout.module.less';

const { Content } = Layout;

const MainLayout: React.FC = () => {

    const location = useLocation();
    

    const [collapsed, setCollapsed] = useState(false);
    const [isSavedShow, setIsSavedShow] = useState(false);

    const getBreadCrumbArray = (path: string) => {
        const pathNames = path.trim().split('/');
        const pathNamesArray: any[] = [];
        pathNamesArray.push({
            name: 'home',
            isNavigateDi0sabled: (path === '/' || path === ''),
            routeTo: `/`
        });
        pathNames.map((pathName, index) => {
          pathNamesArray.push({
            name: pathName,
            isNavigateDisabled: index === pathNames.length-1,
            routeTo: `/${pathNames.slice(0, index + 1).join('/')}`
          });
          return null;
        });
        return pathNamesArray;
      };


    return(
        <Layout className={styles.layout}>
            <div className={styles.leftSider}>
                <AppSider collapsed={collapsed} showSaved={isSavedShow} />
                <div className={(collapsed) ? `${styles.expanderCollapsed} ${styles.expander}` : `${styles.expanderExpanded} ${styles.expander}`} onClick={() => setCollapsed(!collapsed)}>{(collapsed) ? <ChevronRight /> : <ChevronLeft />}</div>
            </div>
            <Layout className={styles.siteLayout}>
                <AppHeader onSavedChange={(checked: boolean) => setIsSavedShow(checked)} showSaved={isSavedShow} />
                <div className={styles.breadcrumbSection}>
                    <BreadCrumb path={getBreadCrumbArray(location.pathname.substring(1))} />
                </div>
                <Content className={styles.siteLayoutContent}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )

}

export default MainLayout;