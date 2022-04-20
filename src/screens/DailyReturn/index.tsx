/* eslint-disable react-native/no-inline-styles */
import React, { FC, useState } from 'react';
import { Dimensions } from 'react-native';
import AppBar from '../../components/AppBar';
import { Box, Select, CheckIcon } from 'native-base';
import { LineChart } from 'react-native-chart-kit';
import { Tooltip } from '../../assets/icons/analytics';

interface Props {
  navigation: any;
}

const DailyReturn: FC<Props> = ({ navigation }) => {
  const [service, setService] = useState('');

  let [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
    visible: false,
    value: 0,
  });

  return (
    <>
      <AppBar
        text="Daily Return"
        isBack={true}
        navigation={navigation}
        back="Home"
      />
      <Box bg="white.500" p={4}>
        <Select
          selectedValue={service}
          minWidth="200"
          accessibilityLabel="Choose"
          placeholder="Choose"
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="Enero 2021" value="ux" />
          <Select.Item label="Febrero 2021" value="web" />
          <Select.Item label="Marzo 2021" value="backend" />
        </Select>
      </Box>
      <Box alignItems="center" justifyContent="center" mt={4}>
        <LineChart
          data={{
            labels: ['0', '1', '2', '3', '4', '4'],
            datasets: [
              {
                data: [1.0, 2.0, 3.0, 2.5, 3.0],
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={Dimensions.get('window').height / 1.5}
          withVerticalLines={false}
          withOuterLines={false}
          fromZero={false}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 1, // optional, defaults to 2dp
            color: () => '#3793FD',
            labelColor: () => '#4C5862',
            style: {
              padding: 12,
              borderWidth: 1,
              borderStyle: 'solid',
            },
            propsForDots: {
              r: '8',
              strokeWidth: '1',
              stroke: '#3793FD',
            },
          }}
          bezier
          style={{
            margin: 12,
            borderRadius: 10,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#B0BEC5',
            marginVertical: 8,
          }}
          decorator={() => {
            return tooltipPos.visible ? (
              <Tooltip x={tooltipPos.x - 15} y={tooltipPos.y + 10} />
            ) : // <Svg>
            //   <Rect
            //     x={tooltipPos.x - 15}
            //     y={tooltipPos.y + 10}
            //     width="143"
            //     height="85"
            //     fill="white"
            //   />
            //   <Text
            //     x={tooltipPos.x + 5}
            //     y={tooltipPos.y + 30}
            //     fill="black"
            //     fontSize="16"
            //     textAnchor="middle"
            //   >
            //     Return {tooltipPos.value}
            //   </Text>
            // </Svg>
            null;
          }}
          onDataPointClick={data => {
            let isSamePoint =
              tooltipPos.x === data.x && tooltipPos.y === data.y;

            isSamePoint
              ? setTooltipPos(previousState => {
                  return {
                    ...previousState,
                    value: data.value,
                    visible: !previousState.visible,
                  };
                })
              : setTooltipPos({
                  x: data.x,
                  value: data.value,
                  y: data.y,
                  visible: true,
                });
          }}
        />
      </Box>
    </>
  );
};

export default DailyReturn;
