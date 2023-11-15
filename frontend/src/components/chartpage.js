import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import data from '../mock_data.json'; // JSON 파일을 가져오는 코드

const Chart = () => {
  // 가져온 데이터를 Recharts에 맞게 가공
  const chartData = Object.values(data.response).map(item => ({
    time: item.id, // X축에 표시할 값
    value_area: item.value_area, // Y축에 표시할 값
  }));

  return (
  <div className='chart'>
    <LineChart width={1100} height={600} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value_area" stroke="#8884d8" />
    </LineChart>
  </div>
  );
};

export default Chart;
