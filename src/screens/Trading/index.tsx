import React, { FC, useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import AppBar from '../../components/AppBar';
import {
  Stack,
  ScrollView,
  CheckIcon,
  Input,
  FormControl,
  Button,
  Select,
} from 'native-base';
import { tradeTypes, trades } from './trades';
import { getRecommend, storeTrading } from '../../service/trading';
import { getActiveRiskManagment, token } from '../../service/riskMangment';
import { getSymbols } from '../../service/forex';
import { RiskManagment } from '../../service/riskMangment/model';
import { WebView } from 'react-native-webview';

interface Props {
  navigation: any;
}

const Tading: FC<Props> = ({ navigation }): JSX.Element => {
  const height = Dimensions.get('window').height;

  const id = 1;

  const [symbols, setSymbols] = useState([]);

  const [riskMangment, setRiskMangment] = useState<RiskManagment>();

  const [tradingFields, setTradingFields] = useState({
    symbol: '',
    entry: '',
    target: '',
    tradingType: '',
    tradingNumber: '',
    riskManagementId: '',
    stop: '',
    size: '',
  });

  const body: any = {
    symbol: tradingFields.symbol,
    entry: tradingFields.entry,
    target: tradingFields.target,
    tradingType: trades[tradingFields.tradingType],
    tradingNumber: tradingFields.tradingType,
    riskManagementId: riskMangment?.id,
  };

  const handleChangeInput = (name: string, value: string) => {
    setTradingFields({
      ...tradingFields,
      [name]: value,
    });
  };

  const handleRecommend = async () => {
    const response = await getRecommend(token as string, body);

    setTradingFields({
      ...tradingFields,
      stop: response?.recomStopLossPrice?.toString() as string,
      size: response?.recomQtyTrade?.toString() as string,
    });
  };

  const handleCheckRisk = async () => {
    const response = await storeTrading(token as string, body);
    navigation.navigate('TradingResult', { response, riskMangment });
  };

  const getActiveRiks = async () => {
    const risk = await getActiveRiskManagment(
      token as string,
      id?.toString() as string,
    );

    setRiskMangment(risk);
  };

  const getListSymbols = async () => {
    const data = await getSymbols();
    setSymbols(data);
  };

  useEffect(() => {
    getActiveRiks();
  }, []);

  useEffect(() => {
    getListSymbols();
  }, []);

  return (
    <>
      <AppBar
        navigation={navigation}
        isBack={false}
        text="Trading"
        back="Home"
      />
      <ScrollView height={height}>
        <Stack space={6} m={5}>
          <FormControl mt={6}>
            <Select
              selectedValue={tradingFields.symbol}
              accessibilityLabel="Symbol/Trade Pair"
              placeholder="Symbol/Trade Pair"
              bg="white.500"
              _selectedItem={{
                bg: 'white.500',
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              fontSize={14}
              p={4}
              borderWidth={2}
              onValueChange={itemValue =>
                handleChangeInput('symbol', itemValue)
              }>
              {symbols &&
                symbols
                  .slice(0, 100)
                  .map(symbol => (
                    <Select.Item
                      label={symbol?.symbol}
                      value={symbol?.symbol}
                    />
                  ))}
            </Select>
          </FormControl>
          <WebView
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ width: 390, height: 100 }}
            source={{
              uri: 'https://tradeana-web.vercel.app/widget/single-ticker/?symbol=OANDA:EURUSD',
            }}
          />
          <FormControl>
            <Select
              selectedValue={tradingFields.tradingType}
              accessibilityLabel="Type of Trade"
              placeholder="Type of Trade"
              bg="white.500"
              _selectedItem={{
                bg: 'white.500',
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              fontSize={14}
              p={4}
              borderWidth={2}
              onValueChange={itemValue =>
                handleChangeInput('tradingType', itemValue)
              }>
              {tradeTypes.map(type => (
                <Select.Item label={type.type} value={type.number.toString()} />
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <Input
              color="primary"
              placeholder="Entry"
              type="number"
              value={tradingFields.entry.toString()}
              bg="white.500"
              onChangeText={itemValue => handleChangeInput('entry', itemValue)}
              isFullWidth
              fontSize={14}
              p={4}
              borderWidth={2}
            />
          </FormControl>
          <FormControl>
            <Input
              color="primary"
              placeholder="Target"
              type="number"
              value={tradingFields.target.toString()}
              isFullWidth
              onChangeText={itemValue => handleChangeInput('target', itemValue)}
              bg="white.500"
              borderWidth={2}
              fontSize={14}
              p={4}
            />
          </FormControl>
          <FormControl>
            <Input
              color="primary"
              placeholder="Stop"
              type="number"
              isFullWidth
              isDisabled
              value={tradingFields.stop.toString()}
              onChangeText={text => handleChangeInput('stop', text)}
              bg="white.500"
              borderWidth={2}
              fontSize={14}
              p={4}
            />
          </FormControl>
          <FormControl>
            <Input
              color="primary"
              placeholder="Position Size"
              type="number"
              isDisabled
              value={tradingFields.size.toString()}
              onChangeText={text => handleChangeInput('size', text)}
              isFullWidth
              bg="white.500"
              borderWidth={2}
              fontSize={14}
              p={4}
            />
          </FormControl>
          <Button
            onPress={handleRecommend}
            fontSize={14}
            p={4}
            bg="primary.500">
            Reommend
          </Button>
          <Button
            onPress={handleCheckRisk}
            fontSize={14}
            p={4}
            mt={-3}
            bg="secondary.500">
            Check Riks
          </Button>
        </Stack>
      </ScrollView>
    </>
  );
};

export default Tading;
