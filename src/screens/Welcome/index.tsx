import React, {useState, useEffect} from 'react';
import WelcomeIcon from '../../assets/images/welcome';
import {
  Center,
  NativeBaseProvider,
  Box,
  Text,
  Button,
  VStack,
  Stack,
  useDisclose,
  Actionsheet,
} from 'native-base';
import theme from '../../theme';
import ModalLogin from '../../components/ModalLogin';
import ModalSignUp from '../../components/ModalSignUp';
import {getAll} from '../../../database/user';

interface WelcomeProps {
  navigation: any;
}

const Welcome: React.FC<WelcomeProps> = ({navigation}) => {
  const {isOpen, onOpen, onClose} = useDisclose();

  const [selectView, setSelectView] = useState(false);

  const handleSignUpLogin = (login: boolean) => {
    login ? setSelectView(true) : setSelectView(false);
    onOpen();
  };

  useEffect(() => {
    getAll().then(user => {
      if (user[0]) {
        navigation.navigate('Home');
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NativeBaseProvider theme={theme}>
      <Center mt={10}>
        <WelcomeIcon />
      </Center>
      <Box p={4}>
        <VStack m={3}>
          <Center>
            <Text my={4} color="primary.500" fontSize="3xl" bold>
              Welcome
            </Text>
            <Text
              // style={{textAlign: 'center'}}
              color="gray.500"
              fontSize="md"
              mx={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </Text>
          </Center>
        </VStack>
      </Box>
      <Box p={4}>
        <Stack space={2}>
          <Button
            p={3}
            bg="primary.500"
            onPress={() => handleSignUpLogin(false)}>
            <Text color="white.500" fontSize="xl">
              Sign up
            </Text>
          </Button>
          <Button p={3} bg="dark.500" onPress={() => handleSignUpLogin(true)}>
            <Text color="white.500" fontSize="xl">
              Login
            </Text>
          </Button>
        </Stack>
      </Box>
      <Box m={3}>
        <Center>
          <Text color="gray.500" fontSize="xs">
            All Right Reserved @ 2021
          </Text>
        </Center>
      </Box>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content bg="white.500">
          {selectView ? (
            <ModalLogin onClose={onClose} navigation={navigation} />
          ) : (
            <ModalSignUp onClose={onClose} navigation={navigation} />
          )}
        </Actionsheet.Content>
      </Actionsheet>
    </NativeBaseProvider>
  );
};

export default Welcome;
