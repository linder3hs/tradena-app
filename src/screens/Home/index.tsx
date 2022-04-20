/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import { Flex, Stack, Box } from 'native-base';
import HomeButton from '../../components/HomeButton';
import AppBar from '../../components/AppBar';
import { buttons } from './button';

interface Props {
  navigation: any;
}

const Home: FC<Props> = ({ navigation }) => {
  // const bg = useColorModeValue("gray.200", "gray.800");
  // const text = useColorModeValue("primary.500", "green.400");

  return (
    <Box>
      <AppBar text="" navigation={navigation} isBack={false} back="Home" />
      <Flex mt="10" wrap="wrap" style={{ flexDirection: 'row' }}>
        {buttons.map(button => (
          <Stack width="50%" space={3} mb={5} alignItems="center">
            <HomeButton
              title={button.title}
              color={button.color}
              image={button.image}
              url={button.url}
              navigation={navigation}
            />
          </Stack>
        ))}
      </Flex>
    </Box>
  );
};

export default Home;
