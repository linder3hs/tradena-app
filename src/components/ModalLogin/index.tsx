import React, { FC, useState } from 'react';
import {
  Stack,
  Button,
  Text,
  FormControl,
  HStack,
  Input,
  Heading,
  Center,
  Checkbox,
  Link,
  IconButton,
  Flex,
} from 'native-base';
// import Google from '../../assets/images/google';
import Close from '../../assets/icons/close';
import { login } from '../../service/user';
import { insertNewUser } from '../../../database/user';
import { User } from '../../redux/actions/user';

interface ModalProps {
  onClose: any;
  navigation: any;
}

const ModalLogin: FC<ModalProps> = ({ onClose, navigation }): JSX.Element => {
  const [email, setEmail] = useState('devgblanco@gmail.com');

  const [password, setPassword] = useState('tecsup123');

  const handleLogin = async () => {
    const body = { email, password };

    const user: User = await login(body)!;

    const insertData = {
      _id: user.id,
      user_id: user.id,
      email: user.email,
      password: user.password,
      phoneNumber: user.phoneNumber,
      phoneCode: user.phoneCode,
      name: user.name,
      googleId: user.googleId,
    };

    insertNewUser(insertData)
      .then(() => {
        navigation.navigate('Home');
      })
      .catch(err => {
        console.log(err);
      });

    // dispatch(fetchLogin(body));
  };

  return (
    <>
      <Stack space={4} w="90%">
        <Flex align="flex-end">
          <IconButton icon={<Close />} onPress={onClose} />
        </Flex>
        <Heading color="primary.500">Login</Heading>
        <FormControl>
          <Input
            size="xl"
            value={email}
            type="email"
            onChangeText={setEmail}
            placeholder="Email"
            isFullWidth
            p={6}
          />
        </FormControl>
        <FormControl>
          <Input
            size="xl"
            p={6}
            value={password}
            onChangeText={setPassword}
            type="password"
            placeholder="Password"
            isFullWidth
          />
          <HStack>
            <Checkbox value="orange" isChecked my={2}>
              Remember me
            </Checkbox>
          </HStack>
        </FormControl>
        <Button p={5} bg="primary.500" onPress={handleLogin}>
          <Text color="white.500" bold fontSize="lg">
            Login
          </Text>
        </Button>
        <Button
          //  startIcon={<Google />}
          p={5}
          bg="gray.100">
          <Text color="gray.500" bold fontSize="lg">
            Sign in with Google
          </Text>
        </Button>
        <Center mt={10}>
          <HStack>
            <Text>Don’t have an account? </Text>
            <Link _text={{ color: 'primary.500', bold: true }}>Register</Link>
          </HStack>
        </Center>
      </Stack>
    </>
  );
};

export default ModalLogin;
