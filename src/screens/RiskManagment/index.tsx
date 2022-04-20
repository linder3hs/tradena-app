import React, { FC, useState } from 'react';
import { Box, Button, HStack, Stack } from 'native-base';
import AppBar from '../../components/AppBar';
import Today from './components/Today';
import History from './components/History';

interface Props {
  navigation: any;
}

const RiskManagment: FC<Props> = ({ navigation }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <AppBar
        text="Risk Managment"
        navigation={navigation}
        isBack={false}
        back="Home"
      />
      <Box p={3} bg="white.500">
        <HStack bg="primary.100" borderRadius={5}>
          <Button
            w="50%"
            variant={show ? 'ghost' : 'solid'}
            onPress={() => setShow(false)}>
            Today
          </Button>
          <Button
            w="50%"
            variant={!show ? 'ghost' : 'solid'}
            onPress={() => setShow(true)}>
            History
          </Button>
        </HStack>
      </Box>
      <Stack>
        {!show ? (
          <Today navigation={navigation} />
        ) : (
          <History navigation={navigation} />
        )}
      </Stack>
    </>
  );
};

export default RiskManagment;
