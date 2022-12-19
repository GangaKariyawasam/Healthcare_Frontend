import React from "react";
import { Table, TableProps } from 'antd';

import styles from './dataTable.module.less';

interface DataTableProps extends TableProps<any> {
}

export const DataTable: React.FC<DataTableProps> = ({...props}) => {

    return(
        <div className={styles.container}>
            <Table {...props} />
        </div>
    )
}

// export default DataTable;