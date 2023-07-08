import React from 'react';
import { Modal, Form, Input, Button, Checkbox } from 'antd';
import todoService from '../../../axios/Todo';
import { validateTitle, validateCheckbox } from './validators';

const ModificarForm = ({ formData, visible, onClose }) => {
  const [form] = Form.useForm();

  const handleFinish = async (values) => {

    await todoService.updatingResource(values)

    form.resetFields();
    onClose();
  };
  return (
    <Modal
      open={visible}
      onCancel={onClose}
      onOk={form.submit}
      title="Modificar"
      footer={null}
    >
      <Form form={form} onFinish={handleFinish}>
        <Form.Item
          name="userId"
          label="User"
          rules={[
            {
              required: true,
              message: 'Por favor ingresa un usuario',
            },
          ]}
          initialValue={formData.userId}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="title"
          label="Título"
          required="true"
          rules={[{ validator: validateTitle }]}
          initialValue={formData.titulo}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={formData.estado ? "Alta" : "Baja"}
          name="completed"
          required="true"
          rules={[
            {
              validator: validateCheckbox,
            },
          ]}
          valuePropName="checked"
          initialValue={formData.estado ? false : true}
        >
          <Checkbox />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ backgroundColor: '#002140' }}>
            Agregar
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModificarForm;
