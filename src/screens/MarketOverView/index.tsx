import React, {FC} from 'react';
import AppBar from '../../components/AppBar';
import WebRenderView from '../../components/WebRenderView';

interface Props {
  navigation: any;
}

const MarketOverview: FC<Props> = ({navigation}) => {
  return (
    <>
      <AppBar
        text="Market Overview"
        isBack={true}
        navigation={navigation}
        back="Home"
      />
      <WebRenderView url="https://tradeana-web.vercel.app/widget/market-overview/?theme=light&width=100%&height=450" />
    </>
  );
};

export default MarketOverview;
