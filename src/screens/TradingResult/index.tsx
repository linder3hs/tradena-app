import React, { FC, useState } from 'react';
import { Dimensions } from 'react-native';
import AppBar from '../../components/AppBar';
import { TabView, SceneMap } from 'react-native-tab-view';
import TradingDetail from './components/tradingDetail';
import RiskSettings from './components/riskSettings';
// import AdditionalInfo from "./components/additionaInfo";

interface Props {
  route: any;
  navigation: any;
}
const initialLayout = { width: Dimensions.get('window').width };

const TradingResult: FC<Props> = ({ route, navigation }) => {
  const { response, riskMangment } = route.params;

  console.log(response);

  const [index, setIndex] = useState(0);

  const renderScene = SceneMap({
    first: () => <TradingDetail response={response} />,
    second: () => <RiskSettings response={riskMangment} />,
    // third: () => <AdditionalInfo />,
  });

  const [routes] = useState([
    { key: 'first', title: 'Trade Details' },
    { key: 'second', title: 'Risk Settings' },
  ]);

  return (
    <>
      <AppBar
        text="Trading"
        navigation={navigation}
        isBack={true}
        back="Trading"
      />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: initialLayout.width }}
      />
    </>
  );
};

export default TradingResult;
