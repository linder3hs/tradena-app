import React, {FC} from 'react';
import FeatureIcon from '../../../assets/icons/featureIcon';
import Card from '../../../assets/icons/card';
import Download from '../../../assets/icons/download';
import InBox from '../../../assets/icons/inbox';
import CardRiks from '../../../components/CardRiks';
import {VStack} from 'native-base';

interface Props {
  response: any;
}

const RiskSettings: FC<Props> = ({response}) => {
  return (
    <VStack>
      <CardRiks
        icon={<FeatureIcon />}
        title="Max Buying Power"
        message={`$ ${response?.maxBuyPower.toFixed(2)}`}
      />
      <CardRiks
        icon={<Card />}
        title="Recommended Leverage"
        message={`$ ${response?.recommendLeverage.toFixed(2)}`}
      />
      <CardRiks
        icon={<Download />}
        title="Max Loss per Trade"
        message={`$ ${response.maxLossPerTrade.toFixed(2)}`}
      />
      <CardRiks
        icon={<InBox />}
        title="Max Loss per Day"
        message={`$ ${response?.maxLossPerDay.toFixed(2)}`}
      />
    </VStack>
  );
};

export default RiskSettings;
