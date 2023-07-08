import { Modal } from "antd";
import {ExclamationCircleOutlined } from '@ant-design/icons';

const DeleteConfirmationModal = ({ visible, onCancel, onOk, confirmLoading }) => {
  return (
    <Modal
      open={visible}
      onCancel={onCancel}
      onOk={onOk}
      okText="Eliminar"
      cancelText="Cancelar"
      width={350}
      confirmLoading={confirmLoading}
    >
      <p>
        <ExclamationCircleOutlined /> ¿Estás seguro que deseas eliminar?
      </p>
    </Modal>
  );
};

export default DeleteConfirmationModal;