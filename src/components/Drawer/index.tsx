import React from 'react';
import { List, Box, Avatar, Text, HStack } from 'native-base';
import Icon from 'react-native-ionicons';

interface NavigationProps {
  label: string;
  location: string;
}

type DrawerSideNavigationProps = {
  sideNavigation: Array<NavigationProps>;
};

const CustomDrawer = ({ navigation }) => {
  return (
    <Box>
      <HStack mt={20} p={3} direction="row">
        <Avatar
          size="lg"
          source={{
            uri: 'https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg',
          }}>
          LH
        </Avatar>
        <Box>
          <Text ml={3} mb={2}>
            Hello!
          </Text>
          <Text ml={3} bold fontSize="lg">
            Jimmy Velasquez
          </Text>
        </Box>
      </HStack>
      <List mt={2} my={3} space={4}>
        <List.Item onPress={() => navigation.navigate('Home')}>
          <List.Icon
            // color="primary.500"
            size={6}
            ml={3}
            mr={5}
            as={<Icon ios="home" android="home" />}
          />
          Dashboard
        </List.Item>
        <List.Item onPress={() => navigation.navigate('RiskManagment')}>
          <List.Icon
            ml={3}
            mr={5}
            color="dark.500"
            size={6}
            as={<Icon ios="pie" android="pie" />}
          />
          Risk Management
        </List.Item>
        <List.Item onPress={() => navigation.navigate('PreMarket')}>
          <List.Icon
            ml={3}
            mr={5}
            color="dark.500"
            size={6}
            as={<Icon ios="paper" android="paper" />}
          />
          Pre-Market
        </List.Item>
        {/* <List.Item onPress={() => navigation.navigate('EmotionalGuardian')}>
          <List.Icon
            ml={3}
            mr={5}
            color="dark.500"
            size={6}
            as={
              <MaterialCommunityIcons
                name="book-play"
                size={24}
                color="black"
              />
            }
          />
          Emotional Guardian
        </List.Item> */}
        <List.Item onPress={() => navigation.navigate('Trading')}>
          <List.Icon
            ml={3}
            mr={5}
            color="dark.500"
            size={6}
            as={<Icon ios="cash" android="cash" />}
          />
          Trading
        </List.Item>
        {/* <List.Item>
          <List.Icon
            ml={3}
            mr={5}
            color="dark.500"
            size={6}
            as={<Ionicons name="settings" size={20} color="black" />}
          />
          Trader Journal
        </List.Item> */}
        {/* <List.Item>
          <List.Icon
            ml={3}
            mr={5}
            color="dark.500"
            size={6}
            as={
              <MaterialCommunityIcons
                name="chat-processing"
                size={24}
                color="black"
              />
            }
          />
          Trader Log
        </List.Item> */}
        {/* <List.Item onPress={() => navigation.navigate('Analytics')}>
          <List.Icon
            ml={3}
            mr={5}
            color="dark.500"
            size={6}
            as={
              <MaterialCommunityIcons
                name="chat-processing"
                size={24}
                color="black"
              />
            }
          />
          Analytics
        </List.Item> */}
        {/* <List.Item onPress={() => navigation.navigate('Settings')}>
          <List.Icon
            ml={3}
            mr={5}
            color="dark.500"
            size={6}
            as={<Ionicons name="settings" size={20} color="black" />}
          />
          Settings
        </List.Item> */}
        <List.Item>
          <List.Icon
            ml={3}
            mr={5}
            color="dark.500"
            size={6}
            as={<Icon ios="help-circle" android="help-circle" />}
          />
          Need Help?
        </List.Item>
      </List>
    </Box>
  );
};

export default CustomDrawer;
