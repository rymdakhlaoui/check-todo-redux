import { EditOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import React, { useState } from 'react'
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { editTask } from '../JS/Actions';

const { TextArea } = Input;
const EditTask = ({todo}) => {
    const dispatch = useDispatch();
    const [newTitle, setNewTitle] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const handleEdit = () => {
      dispatch(editTask(todo.id, newTitle))
      handleCancel()
      setNewTitle("")
    }
  return (
    <>
      <Button onClick={showModal} shape="circle" icon={<EditOutlined />} />

      <Modal
        title="Edit Task"
        open={isModalOpen}
        onCancel={handleCancel}
        okText="Edit Task"
        onOk={handleEdit}
      >
        <TextArea
          onChange={(e) => setNewTitle(e.target.value)}
          rows={4}
          placeholder={todo.title}
          value={newTitle}
        />
      </Modal>
    </>
  );
}

export default EditTask