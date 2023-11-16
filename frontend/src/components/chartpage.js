import React, { useState } from 'react';
import {
  LineChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ComposedChart
} from 'recharts';

import data from '../mock_data.json';

const CombinedChart = () => {
  const [selectedId, setSelectedId] = useState(null);

  const chartData = Object.entries(data.response).map(([timestamp, item]) => ({
    time: timestamp,
    value_area: item.value_area,
    value_bar: item.value_bar,
    id: item.id,
    isHighlighted: item.id === selectedId,
  }));

  // 선택된 ID에 해당하는 데이터를 가져오는 함수
  const getFilteredData = () => {
    if (!selectedId) {
      return chartData;
    }
    return chartData.filter(item => item.id === selectedId);
  };

  // 차트에 사용될 모든 고유 ID를 가져오는 함수
  const getUniqueIds = () => Array.from(new Set(chartData.map(item => item.id)));

  return (
    
    <div className='combined-chart'>

      {/* ID 버튼 목록 */}
      <div className='select-btns'>
        <button onClick={() => setSelectedId(null)}>전체</button>
        {getUniqueIds().map((id) => (
          <button
            key={id}
            onClick={() => setSelectedId(selectedId === id ? null : id)}
            style={{ fontWeight: selectedId === id ? 'bold' : 'normal' }}
          >
            {id}
          </button>
        ))}
      </div>
      <ComposedChart width={1900} height={600} data={getFilteredData()}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
    
        <Bar
          dataKey="value_bar"
          barSize={50}
          fill="#3E4095"
          name="value_bar"
          yAxisId="right"
          isAnimationActive={false}
        />
        <Area
          type="monotone"
          dataKey="value_area"
          stroke="#FF5733"
          fill="#FF5733"
          name="value_area"
          isAnimationActive={false}
          yAxisId="left"
        />
        {selectedId && (
          <ReferenceLine
            x={getFilteredData()[0]?.time}  // 수정된 부분
            stroke="red"
            strokeWidth={3}
            label={{ value: 'Selected ID', position: 'top' }}
          />
        )}
      </ComposedChart>

      
    </div>
  );
};

export default CombinedChart;
