import { Button } from 'antd';
const AltaButton = ({ onClick, Col }) => {
  return (
    <Col span={2.3}>
      <Button type="primary" onClick={onClick} style={{ backgroundColor: '#002140' }}>
        Crear Alta
      </Button>
    </Col>
  );
};

export default AltaButton;