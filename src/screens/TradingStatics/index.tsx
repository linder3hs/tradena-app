import React, { FC, useState } from 'react';
import AppBar from '../../components/AppBar';
import CustomTable from '../../components/CustomTable';
import CardSummary from '../../components/CardSummary';
import { Box, Stack, Text, Select, CheckIcon, ScrollView } from 'native-base';
import {
  BoxI,
  Flame,
  TrendingDown,
  TrendingUp,
} from '../../assets/icons/analytics';

interface Props {
  navigation: any;
}

const TradingStatics: FC<Props> = ({ navigation }) => {
  const data = {
    tableHead: ['', 'Won', 'Lost'],
    tableData: [
      ['Trades', '$128', '42'],
      ['Avg P/L ($)', '$68', '-$24'],
      ['Avg P/L (Pips)', '743', '-233,5'],
    ],
  };

  let [service, setService] = useState('');

  return (
    <>
      <AppBar
        text="Trading Statistics"
        isBack={true}
        navigation={navigation}
        back="Home"
      />
      <ScrollView height={400}>
        <Box bg="white.500" mb={4}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            p={4}>
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
              <Select.Item label="Dayly" value="ux" />
              <Select.Item label="Weekley" value="web" />
              <Select.Item label="Month" value="backend" />
            </Select>
            <Text bold>Return 4.80%</Text>
          </Stack>
        </Box>
        <CustomTable data={data} />
        <Box m={6}>
          <Text bold fontSize={20}>
            Summary
          </Text>
          <CardSummary
            text="Total Winning Days"
            color="#4CCC81"
            amount="15"
            icon={<TrendingUp />}
          />
          <CardSummary
            text="Total Losing Days	"
            color="#EB5757"
            amount="5"
            icon={<TrendingDown />}
          />
          <CardSummary
            text="Win/Loss Ratio"
            color="#F2C94C"
            amount="69%	/ 31%"
            icon={<BoxI />}
          />
          <CardSummary
            text="Risk / Reward"
            color="#F29100"
            amount="17:6	/ 2:83"
            icon={<Flame />}
          />
        </Box>
      </ScrollView>
    </>
  );
};

export default TradingStatics;
