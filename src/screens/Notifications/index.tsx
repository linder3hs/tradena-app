import React from 'react';
import AppBar from '../../components/AppBar';
import { Avatar, VStack, HStack, Text, Box, ScrollView } from 'native-base';
import { Dimensions } from 'react-native';
import AvatarImage from '../../assets/images/avatar.png';

const screenHeight = Dimensions.get('window').height;

interface Props {
  navigation: any;
}

const Notifications: React.FC<Props> = ({ navigation }) => {
  return (
    <VStack>
      <AppBar
        text="Notifications"
        isBack={true}
        navigation={navigation}
        back="Home"
      />
      <ScrollView height={screenHeight}>
        <Box m={4} mb={-5}>
          <Text fontSize={24} bold>
            Last News
          </Text>
          <VStack mt={6}>
            <Box bg="white.500" p={4} borderRadius={14}>
              <HStack direction="row">
                <Avatar source={AvatarImage}>AK</Avatar>
                <VStack ml={4}>
                  <Text fontSize={15} bold>
                    Bloomberg
                  </Text>
                  <Text fontSize={12} color="textSecondary.500">
                    2 hours ago
                  </Text>
                </VStack>
              </HStack>
              <VStack mt={4}>
                <Text bold>
                  Dogecoin May Be a Hustle, But It's the People's Hustle
                </Text>
                <Text mt={4}>
                  And with that, Elon Musk as host of Saturday Night Live
                  brought down the value of Dogecoin by 35%.
                </Text>
              </VStack>
            </Box>
          </VStack>
        </Box>
        <Box m={4} mb={-5}>
          <VStack mt={6}>
            <Box bg="white.500" p={4} borderRadius={14}>
              <HStack>
                <Avatar source={AvatarImage}>AK</Avatar>
                <VStack ml={4}>
                  <Text fontSize={15} bold>
                    Bloomberg
                  </Text>
                  <Text fontSize={12} color="textSecondary.500">
                    2 hours ago{' '}
                  </Text>
                </VStack>
              </HStack>
              <VStack mt={4}>
                <Text bold>
                  Dogecoin May Be a Hustle, But It's the People's Hustle
                </Text>
                <Text mt={4}>
                  And with that, Elon Musk as host of Saturday Night Live
                  brought down the value of Dogecoin by 35%.
                </Text>
              </VStack>
            </Box>
          </VStack>
        </Box>
        <Box m={4} mb={-5}>
          <VStack mt={6}>
            <Box bg="white.500" p={4} borderRadius={14}>
              <HStack>
                <Avatar source={AvatarImage}>AK</Avatar>
                <VStack ml={4}>
                  <Text fontSize={15} bold>
                    Bloomberg
                  </Text>
                  <Text fontSize={12} color="textSecondary.500">
                    2 hours ago{' '}
                  </Text>
                </VStack>
              </HStack>
              <VStack mt={4}>
                <Text bold>
                  Dogecoin May Be a Hustle, But It's the People's Hustle
                </Text>
                <Text mt={4}>
                  And with that, Elon Musk as host of Saturday Night Live
                  brought down the value of Dogecoin by 35%.
                </Text>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </ScrollView>
    </VStack>
  );
};

export default Notifications;
