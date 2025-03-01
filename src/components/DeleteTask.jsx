import React, { useState } from 'react'
import { deleteTask } from '../JS/Actions';
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const DeleteTask = ({todo}) => {
      const [deleteModal, setDeleteModal] = useState(false);
      const dispatch = useDispatch();

      const showModal = () => {
        setDeleteModal(true);
      };

      const handleDelete = () => {
        dispatch(deleteTask(todo.id));  
      };
  return (
    <>
      <Button onClick={showModal} shape="circle" icon={<DeleteOutlined />} />
      {/* Delete modal */}
      <Modal
        title="Delete Task"
        open={deleteModal}
        onOk={handleDelete}
        okText="Yes"
        okType="danger"
        onCancel={() => setDeleteModal(false)}
      >
        <p>
          Are you sure you want to delete <b>{todo.title}</b>?
        </p>
      </Modal>
    </>
  );
}

export default DeleteTask