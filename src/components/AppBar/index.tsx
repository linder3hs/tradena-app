import React, { FC } from 'react';
import {
  HStack,
  IconButton,
  Text,
  Box,
  StatusBar,
  Pressable,
} from 'native-base';
import Icon from 'react-native-ionicons';
// Icons
import Burguer from '../../assets/icons/burguer';
import Bell from '../../assets/icons/bell';

interface AppBarProps {
  text: string;
  navigation: any;
  isBack: boolean;
  back: string;
}

const AppBar: FC<AppBarProps> = ({
  text,
  navigation,
  isBack = false,
  back = 'Home',
}) => {
  return (
    <>
      <StatusBar backgroundColor="white.500" barStyle="light-content" />
      <Box safeAreaTop backgroundColor="white.500" />
      {!isBack ? (
        <HStack
          bg="white.500"
          justifyContent="space-between"
          alignItems="center">
          <HStack ml={3}>
            <IconButton
              onPress={() => navigation.toggleDrawer()}
              icon={<Burguer />}
            />
          </HStack>
          <HStack alignItems="center">
            <Text color="white" fontSize={20} fontWeight="bold">
              {text}
            </Text>
          </HStack>
          <HStack mr={3}>
            <IconButton
              onPress={() => navigation.navigate('Notifications')}
              icon={<Bell />}
            />
          </HStack>
        </HStack>
      ) : (
        <HStack bg="white.500">
          <HStack ml={3} mb={3} mt={3}>
            <Pressable onPress={() => navigation.navigate(back)}>
              <Icon ios="arrow-back" android="arrow-back" />
            </Pressable>
          </HStack>
          <HStack ml={4} mb={3} mt={3} alignItems="center">
            <Text color="white" fontSize={18} fontWeight="bold">
              {text}
            </Text>
          </HStack>
        </HStack>
      )}
    </>
  );
};

export default AppBar;
