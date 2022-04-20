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

const TradingDetail: FC<Props> = ({response}) => {
  return (
    <VStack>
      <CardRiks
        icon={<FeatureIcon />}
        title="Trade Value ($)"
        message={`$ ${response?.tradeValue.toFixed(2)}`}
      />
      <CardRiks
        icon={<Card />}
        title="Recommended Quantity Trade"
        message={`$ ${response?.recomQtyTrade}`}
      />
      <CardRiks
        icon={<Download />}
        title="Effective Leverage"
        message={`$ ${response.effectiveLeverage}`}
      />
      <CardRiks
        icon={<InBox />}
        title="Max Loss	"
        message={`$ ${response?.maxLoss.toFixed(2)}`}
      />
    </VStack>
  );
};

export default TradingDetail;
