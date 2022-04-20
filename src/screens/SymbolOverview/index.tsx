import React, {FC, useEffect} from 'react';
import theme from '../../theme';
import AppBar from '../../components/AppBar';
import WebRenderView from '../../components/WebRenderView';
import {showMessage} from 'react-native-flash-message';

interface Props {
  navigation: any;
}

const SymbolOverview: FC<Props> = ({navigation}) => {
  useEffect(() => {
    showMessage({
      message: 'We recommend putting your cell phone horizontally.',
      type: 'info',
      backgroundColor: theme.colors.primary[500],
      duration: 4000,
    });
  }, []);

  return (
    <>
      <AppBar
        text="Symbol Overview"
        isBack={true}
        navigation={navigation}
        back="Home"
      />
      <WebRenderView url="https://tradeana-web.vercel.app/widget/real-time-chart?height=610" />
    </>
  );
};

export default SymbolOverview;
