import { Progress } from 'antd';
import React from 'react';
const App = () => (
  <>
    <Progress type="dashboard" percent={75} />
    <Progress type="dashboard" percent={75} gapDegree={30} />
  </>
);
export default App;
