import React from 'react';
import { Button, Modal } from 'antd';

const MyButton = () => {
  const handleClick = () => {
    Modal.info({
      content: (
        <div>
          <h2>Hello</h2>
          <p>BABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABA</p>
        </div>
      )
    });
  }
  return (
    <div>
      <Button type='primary' onClick={handleClick}>点我</Button>
    </div>
  );
}

export default MyButton;