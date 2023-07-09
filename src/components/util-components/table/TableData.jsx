import React, { useEffect, useState } from 'react';
import { Space, Table, Card, Input, Select, Col, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import utils from '../../../utils/index';
import todoService from '../../../axios/Todo';
import ModificarForm from '../form/FormModificar';
import AltaForm from '../form/FormAlta';
import BajaForm from '../form/FormBaja';
import AltaButton from '../button/AltaButton';
import BajaButton from '../button/BajaButton';
import DeleteConfirmationModal from '../modal/DeleteConfirmationModal';
import '../../../Table.css';

const { Option } = Select;

const TableData = () => {
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      align: 'center'
    },
    {
      title: 'userId',
      dataIndex: 'userId',
      key: 'userId',
      align: 'center'

    },
    {
      title: 'Título',
      dataIndex: 'title',
      key: 'title',
      align: 'center'

    },
    {
      title: 'Estado',
      dataIndex: 'completed',
      key: 'completed',
      align: 'center',

      render: (text) => (text ? <span>Completos</span> : <span>No completos</span>),
    },
    {
      title: 'Acciones',
      key: 'action',
      align: 'center',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handleOpenForm(record)}>Modificar {record.name}</a>
          <a onClick={() => handleOpenDeleteModal(record)}>Eliminar</a>
        </Space>
      ),
    },
  ];

  const [list, setList] = useState([]);
  const [selectedType, setSelectedType] = useState('todos');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isAltaFormVisible, setIsAltaFormVisible] = useState(false);
  const [isBajaFormVisible, setIsBajaFormVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const todos = await todoService.listingAllResources();
        setTableData(todos);
        setList(todos);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);

  const handleTypeChange = (value) => {
    setSelectedType(value);
    filterData(value);
  };

  const filterData = (selectedType) => {
    if (selectedType !== 'todos') {
      const filtered = tableData.filter((item) => item.completed === selectedType);
      setList(filtered);
    } else {
      setList(tableData);
    }
  };

  const rowClassName = (record, index) => {
    if (record.completed === false) {
      return 'highlighted-row';
    }
    return null;
  };

  const handleOpenForm = (record) => {
    setFormData({
      userId: record.userId,
      titulo: record.title,
      estado: record.completed,
    });
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
    setFormData({});
  };

  const handleSubmitForm = async (values) => {
    try {
      await todoService.creatingResource(values);
      handleCloseForm();
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenDeleteModal = (record) => {
    setDeleteItemId(record.id);
    setIsDeleteModalVisible(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalVisible(false);
    setConfirmLoading(false)
    setDeleteItemId(null);

  };

  const handleDelete = async () => {
    setConfirmLoading(true)
    try {
      await todoService.deletingResource(deleteItemId);
      handleCloseDeleteModal();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card style={{ width: '100%', maxWidth: '100%', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}>
      <Row gutter={[24, 8]} style={{ marginBottom: 20 }}>
        <Col span={2.5}>
          <AltaButton onClick={() => setIsAltaFormVisible(true)} Col={Col} />
        </Col>
        <Col span={2.5} >
          <BajaButton onClick={() => setIsBajaFormVisible(true)} Col={Col} />

        </Col>
        <Col span={2.5} offset={8}>
          <Input placeholder="Buscar" prefix={<SearchOutlined />}
            onChange={(e) => utils.onSearch(e, list, setList, tableData)} />
        </Col>
        <Col>
          <Select
            placeholder="Select type"
            style={{ width: 120 }}
            onChange={handleTypeChange}
            value={selectedType}
          >
            <Option value="todos">Todos</Option>
            <Option value={true}>Completos</Option>
            <Option value={false}>No completos</Option>
          </Select>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table

            rowClassName={rowClassName}
            columns={columns}
            dataSource={list}
            size="small"
            tableLayout="auto"
            rowKey={(record) => record.id}
            scroll={{
              x: 1300,
            }}
          />
        </Col>
      </Row>

      <AltaForm visible={isAltaFormVisible} onClose={() => setIsAltaFormVisible(false)} />
      <BajaForm visible={isBajaFormVisible} onClose={() => setIsBajaFormVisible(false)} />

      {isFormVisible && (
        <ModificarForm
          formData={formData}
          visible={isFormVisible}
          onClose={handleCloseForm}
          onSubmit={handleSubmitForm}
        />
      )}

      <DeleteConfirmationModal visible={isDeleteModalVisible}
        onCancel={handleCloseDeleteModal}
        onOk={handleDelete}
        confirmLoading={confirmLoading} />

    </Card>
  );
};

export default TableData;