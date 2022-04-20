import React from 'react';
import {
  Box,
  HStack,
  Pressable,
  Text,
  Divider,
  VStack,
  Stack,
  Switch,
} from 'native-base';
import AppBar from '../../components/AppBar';
import { AntDesign, Feather } from '@expo/vector-icons';
import { options } from './options';

interface Props {
  navigation: any;
}

const Settings: React.FC<Props> = ({ navigation }) => {
  return (
    <Stack space={4}>
      <AppBar
        text="Settings"
        navigation={navigation}
        isBack={true}
        back="Home"
      />
      <Divider bg="#B0BEC5" mt={10} />
      <VStack>
        {options.map(option => (
          <Box p={6}>
            <HStack>
              <Text fontSize="lg" color="lightPrimary.500">
                {option.name}
              </Text>
              <AntDesign name="right" size={24} color="black" />
            </HStack>
          </Box>
        ))}
      </VStack>
      <Divider bg="#B0BEC5" mt={2} />
      <Stack space={4} m={6}>
        <HStack>
          <Box>
            <HStack>
              <Feather name="smartphone" size={24} color="black" />
              <VStack ml={3}>
                <Text bold fontSize="lg">
                  Dark Mode
                </Text>
                <Text fontSize="sm" color="textSecondary.500">
                  change dark mode
                </Text>
              </VStack>
            </HStack>
          </Box>
          <Box>
            <Switch colorScheme="primary" />
          </Box>
        </HStack>
      </Stack>
      <Pressable>
        <Box alignItems="center" bg="white.500" shadow={2} mt={5} p={5}>
          <Text color="red.500" fontSize="lg">
            Logout
          </Text>
        </Box>
      </Pressable>
    </Stack>
  );
};

export default Settings;
