import React, { useRef, useState } from "react";
import type { ColumnsType } from 'antd/es/table';
import { Link } from "react-router-dom";
import { ReactComponent as Plus } from '../../Assets/Images/Plus.svg';
import { ReactComponent as Remove } from '../../Assets/Images/Remove.svg';
import { ReactComponent as Edit } from '../../Assets/Images/edit1.svg';
import { ReactComponent as View } from '../../Assets/Images/View.svg';
import {CustomButton} from "../../Components/Button/Button";
import {DataTable} from "../../Components/DataTable/DataTable";

import styles from './patientManagement.module.less';

interface DataType {
    id: string;
    name: string;
    address: string;
    contact: string;
    balanceDue: string;
}

const data: DataType[] = [
    {
        id: '001',
        name: 'John Brown',
        address: 'New York No. 1 Lake Park',
        contact: '077-7215112',
        balanceDue: 'Rs. 3,000.00'
    },
    {
        id: '002',
        name: 'Jim Green',
        address: 'London No. 1 Lake Park',
        contact: '077-7215112',
        balanceDue: 'Rs. 3,000.00'
    },
    {
        id: '003',
        name: 'Joe Black',
        address: 'Sidney No. 1 Lake Park',
        contact: '077-7215112',
        balanceDue: 'Rs. 3,000.00'
    },
    {
        id: '004',
        name: 'Joe Black',
        address: 'Sidney No. 1 Lake Park',
        contact: '077-7215112',
        balanceDue: 'Rs. 3,000.00'
    },
    {
        id: '005',
        name: 'Joe Black',
        address: 'Sidney No. 1 Lake Park',
        contact: '077-7215112',
        balanceDue: 'Rs. 3,000.00'
    },
  ];

  const PatientManagement: React.FC = () => {

    const columns: ColumnsType<DataType> = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text, record) => <Link to={`/customer/${record.id}`} className={styles.name}>{text}</Link>,
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
            title: 'Contact',
            dataIndex: 'contact',
            key: 'contact',
        },
        {
            title: 'Balance Due',
            dataIndex: 'balanceDue',
            key: 'balanceDue',
        },
    ];

    const [selectedRows,setSelectedRows] = useState<any[]>([]);

    const onClickPagination = (page: number, pageSize: number) => {
        alert(page)
        alert(pageSize)
    }

    const onSelectRow = (selectedRows:any) => {
        alert(JSON.stringify(selectedRows));
        setSelectedRows(selectedRows);
    }

    return(
        <div className={styles.container}>
            <div className={styles.actionBar}>
                <CustomButton className={styles.button} size="large" type="primary" title="Delete Patient" icon={<Remove className={styles.icon}/>} disabled={selectedRows.length === 0}/>
                <CustomButton className={styles.button} size="large" type="primary" title="View Patient" icon={<View className={styles.icon}/>} disabled = {selectedRows.length !== 1}/>
                <CustomButton className={styles.button} size="large" type="primary" title="Edit Patient" icon={<Edit className={styles.icon}/>} disabled={selectedRows.length !== 1}/>
                <CustomButton className={styles.button} size="large" type="primary" title="Add Patient" icon={<Plus className={styles.icon}/>}/>
            </div>
            <div className={styles.tableContainer}>
                <DataTable rowKey="id" columns={columns} dataSource={data} pagination={{defaultPageSize: 10, total: 85, showTotal: (total) => `Total ${total} items`, onChange: (page, pageSize) => onClickPagination(page, pageSize)}} 
                rowSelection={{
                    onChange(selectedRowKeys, selectedRows, info) {
                        onSelectRow(selectedRows);
                    },
                }}/>
            </div>
        </div>
    )
}

export default PatientManagement;