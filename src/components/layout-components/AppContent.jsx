import { Layout, Row, Col } from 'antd';
import { Route, Routes } from 'react-router-dom';
import AltaForm from '../util-components/form/FormAlta';
import BajaButton from '../util-components/button/BajaButton';
import TableData from '../util-components/table/TableData';
import Dashboard from '../util-components/form/Dashboard';

const { Content } = Layout;

const AppContent = () => (
  <Layout>
    <Content style={{ padding: '16px' }}>
      <Row>
        <Col span={24}>
          <Routes>
            <Route path="/alta" element={<AltaForm />} />
            <Route path="/baja" element={<BajaButton />} />
            <Route path="/listado" element={<TableData />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Col>
      </Row>
    </Content>
  </Layout>
);

export default AppContent;