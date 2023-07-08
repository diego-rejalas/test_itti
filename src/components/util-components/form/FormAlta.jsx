import React from 'react';
import { Form, Input, Button, Row, Col, Checkbox, Modal } from 'antd';
import todoService from '../../../axios/Todo';
import { validateTitle, validateCheckbox } from './validators';


const AltaForm = ({ visible, onClose }) => {

  const [form] = Form.useForm();

  const handleFinish = async (values) => {
    await todoService.creatingResource(values);
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      title="Agregar Alta"
      open={visible}
      onCancel={onClose}
      footer={null}
    >

      <Row>
        <Col span={24}>
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
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="titulo"
              label="Título"
              required="true"
              rules={[{ validator: validateTitle }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="estado"
              label="Alta"
              required="true"
              rules={[
                {
                  validator: validateCheckbox,
                },
              ]}
              valuePropName="checked"
            >
              <Checkbox />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ backgroundColor: '#002140'}}>
                Agregar
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>

    </Modal>
  );
};

export default AltaForm;
