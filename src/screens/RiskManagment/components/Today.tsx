import React, { FC, useState } from 'react';
import {
  Button,
  CheckIcon,
  FormControl,
  Input,
  Stack,
  Select,
} from 'native-base';
import { storeRiksManagement, token } from '../../../service/riskMangment';

interface Props {
  navigation: any;
}

const Today: FC<Props> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const [loadingRecommended, setLoadingRecommended] = useState(false);

  const [fields, setFields] = useState({
    initialBalance: '',
    maxRisk: '',
    maxLeverage: '',
    maxTrades: '',
    userId: 2,
    period: 'Dayli',
  });

  const handleChangeInput = (name: string, value: string) => {
    setFields({
      ...fields,
      [name]: value,
    });
  };

  const onSubmit = async () => {
    setLoading(true);
    await sendData();
  };

  const onRecommended = async () => {
    setLoadingRecommended(true);

    fields.maxRisk = '2';
    fields.maxLeverage = '3';
    fields.maxTrades = '3';

    await sendData();
  };

  async function sendData() {
    console.log('fields', fields);
    let response = await storeRiksManagement(token, fields);
    console.log('responsedata2', response);
    console.log('------');
    console.log('responsedata2', response.data);
    response = response.data;
    cleanInputs();
    setLoadingRecommended(false);
    navigation.navigate('RiskManagmentResult', { response });
  }

  const cleanInputs = () => {
    setFields({
      initialBalance: '',
      maxRisk: '',
      maxLeverage: '',
      maxTrades: '',
      userId: 1,
      period: 'Dayli',
    });
  };

  return (
    <Stack space={6} m={5}>
      <FormControl mt={0}>
        <Input
          color="primary"
          placeholder="Initial Balance"
          type="number"
          bg="white.500"
          value={fields.initialBalance.toString()}
          onChangeText={text => handleChangeInput('initialBalance', text)}
          isFullWidth
          borderWidth={2}
          fontSize={14}
          p={4}
        />
      </FormControl>
      <FormControl mt={0}>
        <Button
          onPress={onRecommended}
          fontSize={14}
          p={4}
          size="md"
          bg="greenDark.400"
          colorScheme="green.400"
          isLoading={loadingRecommended}
          isLoadingText="Loading...">
          Risk Recommend by Tradeana
        </Button>
      </FormControl>
      <FormControl>
        <Input
          color="primary"
          placeholder="Max % of account at risk"
          type="number"
          value={fields.maxRisk.toString()}
          isFullWidth
          bg="white.500"
          onChangeText={text => handleChangeInput('maxRisk', text)}
          borderWidth={2}
          fontSize={14}
          p={4}
        />
      </FormControl>
      <FormControl>
        <Input
          color="primary"
          placeholder="Max leverage"
          type="number"
          bg="white.500"
          value={fields.maxLeverage.toString()}
          isFullWidth
          onChangeText={text => handleChangeInput('maxLeverage', text)}
          borderWidth={2}
          fontSize={14}
          p={4}
        />
      </FormControl>
      <FormControl>
        <Input
          color="primary"
          placeholder="Max # of trades"
          type="number"
          isFullWidth
          value={fields.maxTrades.toString()}
          onChangeText={text => handleChangeInput('maxTrades', text)}
          bg="white.500"
          borderWidth={2}
          fontSize={14}
          p={4}
        />
      </FormControl>
      <FormControl>
        <Select
          selectedValue={fields.period}
          accessibilityLabel="Daily or weekly?"
          placeholder="Daily or weekly?"
          bg="white.500"
          _selectedItem={{
            bg: 'white.500',
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          fontSize={14}
          p={4}
          borderWidth={2}
          onValueChange={itemValue => handleChangeInput('period', itemValue)}>
          <Select.Item label="Dayli" value="Dayli" />
          <Select.Item label="Weekly" value="Weekly" />
        </Select>
      </FormControl>
      <Button
        onPress={onSubmit}
        fontSize={14}
        p={4}
        size="md"
        bg="primary.500"
        isLoading={loading}
        isLoadingText="Loading...">
        Apply
      </Button>
    </Stack>
  );
};

export default Today;
