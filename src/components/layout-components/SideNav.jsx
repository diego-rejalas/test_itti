import { useState } from 'react';
import { DashboardOutlined, TableOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
const { Sider } = Layout;

const menuItems = [
    {
        key: '1',
        label: (<Link to="/dashboard">Dashboard</Link>),
        link: '/dashboard',
        icon: <DashboardOutlined />,
    },
    {
        key: '2',
        label: (<Link to="/listado">Listado de Registros</Link>),
        link: '/listado',
        icon: <TableOutlined />,
    },
];

const SideNav = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, boxShadow },
    } = theme.useToken();

    return (
        <Sider
            width={200}
            style={{
                background: colorBgContainer,
                boxShadow: boxShadow
            }}
            collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
        >
            <Menu mode="vertical" defaultSelectedKeys={['1']} items={menuItems}>
            </Menu>
        </Sider>
    );
};


export default SideNav;