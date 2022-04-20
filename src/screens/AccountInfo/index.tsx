import React, { FC, useState } from "react";
import AppBar from "../../components/AppBar";
import { Box } from "native-base";
import Info from "./components/info";
import Performance from "./components/performance";
import MaterialTabs from "react-native-material-tabs";

interface Props {
  navigation: any;
}

const AccountInfo: FC<Props> = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const onChangeTab = (index: number) => setSelectedTab(index);

  const [routes] = useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  return (
    <Box>
      <AppBar text="Account Info" navigation={navigation} isBack={true} />
      <MaterialTabs
        items={["Performance", "Info"]}
        selectedIndex={selectedTab}
        onChange={onChangeTab}
        barColor="#fff"
        indicatorHeight={4}
        indicatorColor="#3793FD"
        inactiveTextColor="#000"
        activeTextColor="#3793FD"
        uppercase={false}
      />
      {selectedTab === 0 ? <Performance /> : <Info />}
    </Box>
  );
};

export default AccountInfo;
