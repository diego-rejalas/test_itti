import { Button } from 'antd';

const BajaButton = ({ onClick, Col }) => {
  return (
    <Col span={13} offset={8.2}>
      <Button type="primary" onClick={onClick} style={{ backgroundColor: '#002140' }}>
        Crear Baja
      </Button>
    </Col>
  );
};

export default BajaButton;