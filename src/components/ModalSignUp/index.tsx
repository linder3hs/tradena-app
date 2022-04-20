import React from 'react';
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
  ScrollView,
} from 'native-base';
// import Google from '../../assets/images/google';
import Close from '../../assets/icons/close';

interface ModalProps {
  onClose: any;
  navigation: any;
}

const ModalSignUp: React.FC<ModalProps> = ({onClose, navigation}) => {
  return (
    <ScrollView height={900} w="100%">
      <Stack space={2} w="100%">
        <Flex mt={-25} align="flex-end">
          <IconButton icon={<Close />} onPress={onClose} />
        </Flex>
        <Heading color="primary.500">Sign Up</Heading>
        <FormControl>
          <Input
            size="xl"
            color="dark.500"
            type="text"
            placeholder="Name"
            isFullWidth
            p={4}
          />
        </FormControl>
        <FormControl>
          <Input
            size="xl"
            color="dark.500"
            type="email"
            placeholder="Email"
            isFullWidth
            p={4}
          />
        </FormControl>
        <FormControl>
          <Input
            size="xl"
            color="dark.500"
            type="email"
            placeholder="Phone number"
            isFullWidth
            p={4}
          />
        </FormControl>
        <FormControl>
          <Input
            size="xl"
            p={4}
            color="dark.500"
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
        <Button
          p={4}
          bg="primary.500"
          onPress={() => navigation.navigate('Home')}>
          <Text color="white.500" bold fontSize="lg">
            Login
          </Text>
        </Button>
        <Button
          // startIcon={<Google />}
          p={4}
          bg="gray.100">
          <Text color="gray.500" bold fontSize="lg">
            Sign in with Google
          </Text>
        </Button>
        <Center mt={5}>
          <HStack>
            <Text>Don’t have an account? </Text>
            <Link _text={{color: 'primary.500', bold: true}}>Register</Link>
          </HStack>
        </Center>
      </Stack>
    </ScrollView>
  );
};

export default ModalSignUp;
