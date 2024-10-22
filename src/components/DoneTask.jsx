import { CheckOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react'
import { doneTask } from '../JS/Actions';
import { useDispatch } from 'react-redux';

const DoneTask = ({todo}) => {
    const dispatch = useDispatch()
  return (
    <Button
      onClick={() => dispatch(doneTask(todo.id))}
      shape="circle"
      icon={<CheckOutlined />}
    />
  );
}

export default DoneTask