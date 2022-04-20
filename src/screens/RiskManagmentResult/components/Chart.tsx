import React from 'react';
import { BarChart } from 'react-native-gifted-charts';

const Chart = ({ response }) => {
  const data = [
    {
      value: response?.maxRisk,
      label: 'Account at Risk',
      text: '4',
    },
    { value: response?.maxLeverage, label: 'Max Leverage' },
  ];

  return (
    <>
      <BarChart
        barWidth={100}
        noOfSections={2}
        barBorderRadius={4}
        frontColor="#3793FD"
        data={data}
        yAxisThickness={0}
        xAxisThickness={0}
      />
    </>
  );
};

export default Chart;
