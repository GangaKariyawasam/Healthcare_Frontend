import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { capitalizeFirstLetter } from '../../Util/CommonUtil';

import styles from './breadCrumb.module.less';

interface PathObject {
    name: string;
    isNavigateDisabled: boolean;
    routeTo: string;
  }

  interface BreadCrumbProps {
    path: Array<PathObject>;
  }

  
  const BreadCrumb: React.FC<BreadCrumbProps> = ({path}) =>{
    const breadCrumbView = () =>{
        return(
            <Breadcrumb>
            {path.map((pathObj) => {
              return pathObj.isNavigateDisabled ? (
                <Breadcrumb.Item key={pathObj.name} className={`${styles.pathItem} ${styles.disable}`}>
                  {(capitalizeFirstLetter(pathObj.name) || '')}
                </Breadcrumb.Item>
              ) : (
                <Breadcrumb.Item key={pathObj.name} className={`${styles.pathItem} ${styles.enable}`}>
                  <Link to={pathObj.routeTo}>
                    {(capitalizeFirstLetter(pathObj.name) || '')}
                  </Link>
                </Breadcrumb.Item>
              );
            })}
          </Breadcrumb>
        )
    }
    breadCrumbView();
    return <div className={styles.breadcrumbSection}>{breadCrumbView()}</div>;
  }

  export default BreadCrumb;