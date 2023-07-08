import logo from '../../assets/itti_blanco.svg';
import { Layout } from 'antd';
const { Header } = Layout;

const HeaderNav = () => {
  return (
    <Header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#002140'
    }}>
      <img src={logo} alt="Logo" style={{ height: '40px', marginLeft: "5px", marginTop: "1px" }} />
    </Header>
  );
};

export default HeaderNav;