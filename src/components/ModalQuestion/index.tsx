import React, { useState } from 'react';
import {
  Stack,
  Text,
  VStack,
  HStack,
  Box,
  Divider,
  Button,
  Center,
  ScrollView,
  IconButton,
} from 'native-base';
import { AntDesign, Foundation } from '@expo/vector-icons';
import Emotion from '../../assets/icons/emotion';

interface ModalProps {
  onClose: any;
  navigation: any;
}

const ModalQuestion: React.FC<ModalProps> = ({ onClose }) => {
  const [show, setShow] = useState(false);

  return (
    <Stack space={4}>
      <HStack m={2}>
        <Text bold fontSize="lg">
          Emotional Test
        </Text>
        <IconButton
          variant="solid"
          backgroundColor="white.500"
          onPress={onClose}
          icon={<AntDesign name="closecircle" size={24} color="#ccc" />}
        />
      </HStack>
      <Divider />
      {!show ? (
        <>
          <VStack>
            <Text fontSize="xl" bold color="lightPrimary.500">
              Question here?
            </Text>
            <Text color="textSecondary.500" mt={3}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </VStack>
          <Stack bg="primary.100" mr={-5} ml={-5}>
            <VStack p={6}>
              <Box
                bg="white.500"
                p={3}
                borderRadius={5}
                shadow={1}
                borderColor="primary.500"
                borderWidth="2">
                <HStack>
                  <Text bold color="primary.500">
                    A
                  </Text>
                  <Text bold mx={5}>
                    First answer right here
                  </Text>
                </HStack>
              </Box>
              <Box bg="white.500" p={3} borderRadius={5} shadow={1} mt={3}>
                <HStack>
                  <Text bold color="primary.500">
                    B
                  </Text>
                  <Text bold mx={5}>
                    Second answer
                  </Text>
                </HStack>
              </Box>
              <Box bg="white.500" p={3} borderRadius={5} shadow={1} mt={3}>
                <HStack>
                  <Text bold color="primary.500">
                    C
                  </Text>
                  <Text bold mx={5}>
                    Third answer here
                  </Text>
                </HStack>
              </Box>
              <Button mt={7} onPress={() => setShow(!show)}>
                <Text bold color="white.500">
                  Continue
                </Text>
              </Button>
            </VStack>
          </Stack>
        </>
      ) : (
        <ScrollView height={400}>
          <VStack space={4} m={3}>
            <Box bg="orange.100" m={0} borderRadius={10} shadow={2}>
              <HStack>
                <VStack w="57.5%" p={4}>
                  <HStack alignItems="center">
                    <Text fontSize="lg">Jun 20</Text>
                    <Text fontSize="sm" color="textSecondary.500">
                      {' '}
                      18:35
                    </Text>
                  </HStack>
                  <Text mt={3} bold fontSize="xl" color="orange.600" w="80%">
                    Happy
                  </Text>
                  <HStack>
                    <Text bold mt={4}>
                      <Foundation
                        name="clipboard-pencil"
                        size={18}
                        color="black"
                      />
                      5.0
                    </Text>
                  </HStack>
                </VStack>
                <Box mt={3}>
                  <Emotion />
                </Box>
              </HStack>
            </Box>
            <Text color="textSecondary.500" mt={3}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text color="green.500" bold fontSize="xl">
              Motivation:
            </Text>
            <Box bg="green.100" m={0} borderRadius={10} shadow={2}>
              <HStack>
                <VStack p={4}>
                  <Center>
                    <Text color="textSecondary.500" bold fontSize="lg">
                      {' '}
                      - Advice -{' '}
                    </Text>
                    <Text bold fontSize="xl" color="textSecondary.500" m={4}>
                      Dont let the noise of other people’s opinions drown your
                      inner voice
                    </Text>
                  </Center>
                </VStack>
              </HStack>
            </Box>
            <Box bg="lightInput.100" m={0} borderRadius={10} shadow={2}>
              <HStack>
                <VStack p={4}>
                  <Text color="textSecondary.500" fontSize="lg">
                    {' '}
                    Nota
                  </Text>
                  <Text
                    bold
                    fontSize="xl"
                    color="textSecondary.500"
                    m={1}
                    mt={3}>
                    Sed do eiusmod tempor incididunt ut labore et
                  </Text>
                </VStack>
              </HStack>
            </Box>
            <Button onPress={() => setShow(!show)}>
              <Text bold color="white.500">
                Done
              </Text>
            </Button>
          </VStack>
        </ScrollView>
      )}
    </Stack>
  );
};

export default ModalQuestion;
