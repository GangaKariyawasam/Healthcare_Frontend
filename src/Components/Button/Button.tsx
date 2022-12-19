import React from 'react';
import { Button, Space,ButtonProps } from 'antd';

import styles from './button.module.less';

interface DataButtonProps extends ButtonProps{
}

export const CustomButton: React.FC<DataButtonProps> = ({...props}) => {

    return(
        <div className={styles.container}>
            <Button {...props}>{props.title}</Button>
        </div>
    )
}

// export default CustomButton;