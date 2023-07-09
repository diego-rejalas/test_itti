import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import { useStore } from '../../../zustand/store';
import { useEffect } from 'react';
import todoService from '../../../axios/Todo';

export default function Dashboard() {

    useEffect(() => {
        const fetchData = async () => {
            const response = await todoService.listingAllResources();
            store.setResources(response);
        };

        fetchData();
    }, []);

    const store = useStore();
    const completedCount = store.resources.filter((resource) => resource.completed).length;
    const notCompletedCount = store.resources.filter((resource) => !resource.completed).length;

    return (
        <Row gutter={16}>
            <Col span={12}>
                <Card bordered={false}>
                    <Statistic
                        title="Completos"
                        value={completedCount}
                        precision={2}
                        valueStyle={{
                            color: '#cf1322',
                        }}
                        prefix={<ArrowDownOutlined />}
                        suffix="%"
                    />
                </Card>
            </Col>
            <Col span={12}>
                <Card bordered={false}>
                    <Statistic
                        title="No Completos"
                        value={notCompletedCount}
                        precision={2}
                        valueStyle={{
                            color: '#3f8600',
                        }}
                        prefix={<ArrowUpOutlined />}
                        suffix="%"


                    />
                </Card>
            </Col>
        </Row>
    )
}
