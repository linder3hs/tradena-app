import React, { FC } from "react";
import { WebView } from "react-native-webview";

interface Props {
  url: string;
}

const WebRenderView: FC<Props> = ({ url }) => {
  return (
    <WebView
      source={{
        uri: `${url}`,
      }}
    />
  );
};

export default WebRenderView;
