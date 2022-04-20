import React, { FC } from "react";
import AppBar from "../../components/AppBar";
import { WebView } from "react-native-webview";

interface Props {
  navigation: any;
}

const Timeline: FC<Props> = ({ navigation }) => {
  return (
    <>
      <AppBar
        text="Timeline"
        isBack={true}
        navigation={navigation}
        back="Home"
      />
      <WebView
        source={{
          uri: "https://tradeana-web.vercel.app/widget/timeline/?theme=light&width=100%&height=450",
        }}
      />
    </>
  );
};

export default Timeline;
