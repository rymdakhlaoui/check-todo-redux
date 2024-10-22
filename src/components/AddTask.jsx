import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { addTask } from "../JS/Actions";

const { TextArea } = Input;
const AddTask = () => {
  const dispatch = useDispatch()

  const [newTitle, setNewTitle] = useState("")

  const handleAdd = () => {
    const newTask = { id: Math.random(), title: newTitle, completed: false };
    dispatch(addTask(newTask));
    setNewTitle("");
    handleCancel();
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add new Task
      </Button>
      <Modal
        title="Add new Task"
        open={isModalOpen}
        onOk={handleAdd}
        onCancel={handleCancel}
        okText="Add Task"
        
      >
        <TextArea value={newTitle} onChange={(e)=> setNewTitle(e.target.value)} rows={4} placeholder="Enter a title for your Task..." />
      </Modal>
    </>
  );
};
export default AddTask;
