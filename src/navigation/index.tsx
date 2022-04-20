import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
// Screens
import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import RiskManagment from "../screens/RiskManagment";
import RiskManagmentResult from "../screens/RiskManagmentResult";
import PreMarket from "../screens/PreMarket";
import EmotionalGuardian from "../screens/EmotionalGuardian";
import ReportEmotions from "../screens/ReportEmotions";
import Notifications from "../screens/Notifications";
import MarketOverview from "../screens/MarketOverView";
import Timeline from "../screens/Timeline";
import SymbolOverview from "../screens/SymbolOverview";
import TopTraders from "../screens/TopTraders";
import Trading from "../screens/Trading";
import TradingResult from "../screens/TradingResult";
import Analytics from "../screens/Analytics";
import PreMarketDetail from "../screens/PreMarketDetail";
// Analytics
import AccountInfo from "../screens/AccountInfo";
import AccountPositions from "../screens/AccountPositions";
import TradingStatics from "../screens/TradingStatics";
import DailyReturn from "../screens/DailyReturn";
import RiskSimulator from "../screens/RiskSimulator";
// CustomDrawer
import CustomDrawer from "../components/Drawer";
import { navigationRef } from "./rootNavigation";

const Drawer = createDrawerNavigator();

const MainNavigator: React.FC = () => {
  const { Navigator, Screen } = Drawer;

  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator
        initialRouteName="Welcome"
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Screen name="Welcome" component={Welcome} />
        <Screen name="Home" component={Home} />
        <Screen name="Settings" component={Settings} />
        <Screen name="RiskManagment" component={RiskManagment} />
        <Screen name="PreMarket" component={PreMarket} />
        <Screen name="PreMarketDetail" component={PreMarketDetail} />
        <Screen name="EmotionalGuardian" component={EmotionalGuardian} />
        <Screen name="ReportEmotions" component={ReportEmotions} />
        <Screen name="RiskManagmentResult" component={RiskManagmentResult} />
        <Screen name="Notifications" component={Notifications} />
        <Screen name="MarketOverview" component={MarketOverview} />
        <Screen name="Timeline" component={Timeline} />
        <Screen name="SymbolOverview" component={SymbolOverview} />
        <Screen name="TopTraders" component={TopTraders} />
        <Screen name="Trading" component={Trading} />
        <Screen name="TradingResult" component={TradingResult} />
        <Screen name="Analytics" component={Analytics} />
        <Screen name="AccountInfo" component={AccountInfo} />
        <Screen name="AccountPositions" component={AccountPositions} />
        <Screen name="TradingStatics" component={TradingStatics} />
        <Screen name="DailyReturn" component={DailyReturn} />
        <Screen name="RiskSimulator" component={RiskSimulator} />
      </Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
