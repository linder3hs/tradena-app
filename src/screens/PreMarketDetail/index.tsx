import React, { FC } from "react";
import AppBar from "../../components/AppBar";
import WebRenderView from "../../components/WebRenderView";

interface Props {
  navigation: any;
}

const PreMarketDetail: FC<Props> = ({ navigation }) => {
  return (
    <>
      <AppBar
        text="Pre Market"
        isBack={true}
        back="PreMarket"
        navigation={navigation}
      />
      <WebRenderView url="https://tradeana-web.vercel.app/widget/market-overview/?theme=light&width=100%&height=450" />
    </>
  );
};

export default PreMarketDetail;
