import React from "react";
import { Box, Text, VStack, Center, Pressable } from "native-base";
import MarketOverview from "../../assets/images/marketOverview";
import Market from "../../assets/images/market";
import TradesAndActivities from "../../assets/images/tradesAndActivities";
import TopTraders from "../../assets/images/topTraders";
import TopNews from "../../assets/images/topNews";
import Identification from "../../assets/icons/identification";
import ChartPie from "../../assets/icons/chartpie";
import ChartBar from "../../assets/icons/chartbar";
import Calendar from "../../assets/icons/calendar";
import Presentation from "../../assets/icons/presentationchart";
import Lightbulb from "../../assets/icons/lightbulb";

interface HomeButtonProps {
  title: string;
  image: string;
  color: string;
  url: string;
  navigation: any;
}

const HomeButton: React.FC<HomeButtonProps> = ({
  title,
  image,
  color,
  url,
  navigation,
}) => {
  const images: any = {
    marketOverview: <MarketOverview />,
    tradesAndActivities: <TradesAndActivities />,
    marker: <Market />,
    topTraders: <TopTraders />,
    topNews: <TopNews />,
    identification: <Identification />,
    chartpie: <ChartPie />,
    chartbar: <ChartBar />,
    calendar: <Calendar />,
    presentation: <Presentation />,
    lightbulb: <Lightbulb />,
  };

  return (
    <Pressable width="85%" onPress={() => navigation.navigate(url)}>
      <Box bg={color} borderRadius={10}>
        <VStack space={3} m={3}>
          <Center>{images[image]}</Center>
          <Text color="white.500" bold fontSize="xl">
            {title}
          </Text>
        </VStack>
      </Box>
    </Pressable>
  );
};

export default HomeButton;
