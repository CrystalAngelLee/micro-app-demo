import { MinusOutlined, PlusOutlined, QuestionOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Divider, Switch } from 'antd';
import React, { useState } from 'react';
const ButtonGroup = Button.Group;
const App = () => {
  const [count, setCount] = useState(5);
  const [show, setShow] = useState(true);
  const increase = () => {
    setCount(count + 1);
  };
  const decline = () => {
    let newCount = count - 1;
    if (newCount < 0) {
      newCount = 0;
    }
    setCount(newCount);
  };
  const random = () => {
    const newCount = Math.floor(Math.random() * 100);
    setCount(newCount);
  };
  const onChange = (checked) => {
    setShow(checked);
  };
  return (
    <>
      <Badge count={count}>
        <Avatar shape="square" size="large" />
      </Badge>
      <ButtonGroup>
        <Button onClick={decline}>
          <MinusOutlined />
        </Button>
        <Button onClick={increase}>
          <PlusOutlined />
        </Button>
        <Button onClick={random}>
          <QuestionOutlined />
        </Button>
      </ButtonGroup>
      <Divider />
      <Badge dot={show}>
        <Avatar shape="square" size="large" />
      </Badge>
      <Switch onChange={onChange} checked={show} />
    </>
  );
};
export default App;