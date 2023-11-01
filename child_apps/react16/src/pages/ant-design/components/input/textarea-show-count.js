import { Input } from 'antd';
import React from 'react';
const { TextArea } = Input;
const onChange = (e) => {
  console.log('Change:', e.target.value);
};
const App = () => (
  <>
    <TextArea
      showCount
      maxLength={100}
      style={{
        height: 120,
      }}
      onChange={onChange}
      placeholder="can resize"
    />
    <TextArea
      showCount
      maxLength={100}
      style={{
        height: 120,
        resize: 'none',
      }}
      onChange={onChange}
      placeholder="disable resize"
    />
  </>
);
export default App;
