import React from 'react';
import { Slider } from 'antd';

const formatter = (value: number | undefined) => `${value}%`;

const App: React.FC = () => (
  <>
    <Slider tooltip={{ formatter }} />
    <Slider tooltip={{ formatter: null }} />
  </>
);

export default App;
