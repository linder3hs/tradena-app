import React from 'react';
import { Dimensions } from 'react-native';
import AppBar from '../../components/AppBar';
import CardAlert from '../../components/CardAlert';
import CardRiks from '../../components/CardRiks';
import { Box, VStack } from 'native-base';
import { TabView, SceneMap } from 'react-native-tab-view';
import Card from '../../assets/icons/card';
import Download from '../../assets/icons/download';
import InBox from '../../assets/icons/inbox';
import FeatureIcon from '../../assets/icons/featureIcon';
import Chart from './components/Chart';

interface Props {
  route: any;
  navigation: any;
}

const RiskManagmentResult: React.FC<Props> = ({ route, navigation }) => {
  const { response } = route.params;

  const FirstRoute = () => (
    <Box>
      <CardRiks
        icon={<FeatureIcon />}
        title="Max Buying Power"
        message={`${response?.maxBuyPower?.toFixed(2)}`}
      />
      <CardRiks
        icon={<Card />}
        title="Recommended Leverage"
        message={`${response?.recommendLeverage?.toFixed(2)}`}
      />
      <CardRiks
        icon={<Download />}
        title="Max Loss per Trade"
        message={`${response?.maxLossPerTrade?.toFixed(2)}`}
      />
      <CardRiks
        icon={<InBox />}
        title="Max Loss per Day"
        message={`${response?.maxLossPerDay?.toFixed(2)}`}
      />
    </Box>
  );

  const SecondRoute = () => (
    <Box m={3} mb={2}>
      <VStack space={4} mt={4}>
        <CardAlert
          title={`Risk score: ${response?.riskScore}`}
          status={response?.riskScoreColor}
          message={response?.riskScoreMessage}
        />
        <CardAlert
          title={`Leverage: ${response?.leverageScore}`}
          status={response?.leverageScoreColor}
          message={response?.leverageScoreMessage}
        />
        <CardAlert
          title={`Max Trades Score: ${response?.maxTradesScore}`}
          status={response?.maxTradesScoreColor}
          message={response?.maxTradesScoreMessage}
        />
        <CardAlert
          title={`Max Buyer Power: ${response?.maxBuyPowerScore}`}
          status={response?.maxBuyPowerColor}
          message={response?.maxBuyPowerMessage}
        />
        <CardAlert
          title={`Total Score: ${response?.totalScore}`}
          status={response?.totalColor}
          message={response?.totalMessage}
        />
        {/* <Button onPress={() => navigation.navigate('Home')}>Done</Button> */}
      </VStack>
    </Box>
  );

  const ThirdRoute = () => <Chart response={response} />;

  const initialLayout = { width: Dimensions.get('window').width };

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Risk Detail' },
    { key: 'second', title: 'Report' },
    { key: 'third', title: 'Chart' },
  ]);

  return (
    <>
      <AppBar
        text="Risk Managment"
        navigation={navigation}
        isBack={true}
        back="RiskManagment"
      />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </>
  );
};

export default RiskManagmentResult;
