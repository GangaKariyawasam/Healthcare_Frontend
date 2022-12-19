import React, { useState } from "react";
import { Layout, Avatar, Badge } from 'antd';
import { ReactComponent as Notification} from '../../../Assets/Images/Notification.svg';

import styles from './appHeader.module.less';

const { Header } = Layout;

interface AppHeaderProps {
    onSavedChange: Function
    showSaved: boolean
}

const AppHeader: React.FC<AppHeaderProps> = (props) => {

    // const [statusMessage, setStatusMessage] = useState<string>()

    return (
        <Header className={styles.siteLayoutHeader} style={{ padding: 0 }}>
            <div className={styles.searchSection}>
                {/* <QuickSearch /> */}
            </div>
            <div className={styles.notificationSection}>
                <Badge count={100}>
                    <Avatar className={styles.notification} shape="circle" size={40} icon={<Notification fill="#000" />} />
                </Badge>
                {/* <Popover destroyTooltipOnHide={true} placement="bottomRight" content={
                    <UserProfile onSetStatusMessage={(message: any) => setStatusMessage(message)}
                        message={statusMessage} onSavedChange={(checked: boolean) => props.onSavedChange(checked)} 
                        showSaved={props.showSaved} />
                } trigger="click">
                    <Avatar className={styles.avatar} size={40}  src={'https://joeschmoe.io/api/v1/random'} />
                </Popover> */}
                
            </div>
        </Header>
    )
}

export default AppHeader;