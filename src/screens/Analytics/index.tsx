import React, { FC } from 'react';
import { HStack, Stack, Box } from 'native-base';
import HomeButton from '../../components/HomeButton';
import AppBar from '../../components/AppBar';
import { buttons } from './buttons';

interface Props {
  navigation: any;
}

const Analytics: FC<Props> = ({ navigation }) => {
  return (
    <Box>
      <AppBar
        text="Analitycs"
        navigation={navigation}
        isBack={false}
        back="Home"
      />
      <HStack mt="10">
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
      </HStack>
    </Box>
  );
};

export default Analytics;
