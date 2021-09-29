import { Button, Modal, Result } from 'antd';
import React from 'react'

const ResultContent = () => {
    return <Result
        status="success"
        title="Successfully Purchased Cloud Server ECS!"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={[
            <Button type="primary" key="console">
                Go Console
            </Button>,
            <Button key="buy">Buy Again</Button>,
        ]}
    />
}
export default function ModalResult({isModalVisible}) {

    return (
        <div>
            <Modal title="Basic Modal" visible={isModalVisible} closable={false}>
                <ResultContent/>
            </Modal>
        </div>
    )
}
