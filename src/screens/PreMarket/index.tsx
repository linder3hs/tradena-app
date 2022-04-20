import React, { useState } from 'react';
import {
  Stack,
  Text,
  Divider,
  Checkbox,
  HStack,
  Box,
  Fab,
  Modal,
  Button,
} from 'native-base';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import AppBar from '../../components/AppBar';

interface Props {
  navigation: any;
}

const PreMarket: React.FC<Props> = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);

  const markets = [
    {
      link: 'https://stack',
      name: 'Forex Market News',
      check: true,
    },
    {
      link: 'https://stack',
      name: 'Forex Market Relative Strength',
      check: true,
    },
    {
      link: 'https://stack',
      name: 'Forex Market Rates',
      check: true,
    },
    {
      link: 'https://stack',
      name: 'Forex Market Hours',
      check: false,
    },
    {
      link: 'https://stack',
      name: 'Economic Calendar',
      check: false,
    },
  ];

  return (
    <>
      <AppBar
        text="Pre Market"
        navigation={navigation}
        back="Home"
        isBack={false}
      />
      <Stack space={4} m={4} bg="white.500" p={3} borderRadius={8}>
        {markets.map(market => (
          <>
            <HStack mb={2}>
              <Box>
                <Checkbox value={market.link} colorScheme="blue">
                  <Text fontSize="lg" mx={3} w="70%">
                    {market.name}
                  </Text>
                </Checkbox>
              </Box>
              <Box bg="#E3F2FD" p={2} mr={3} borderRadius={5}>
                <Ionicons
                  name="md-eye"
                  size={24}
                  onPress={() => navigation.navigate('PreMarketDetail')}
                  color="#3793FD"
                  backgroundColor="#000"
                />
              </Box>
            </HStack>
            {/* <Divider mt={3} mb={3} bg="divider.500" /> */}
          </>
        ))}
        <Fab
          bg="primary.500"
          position="absolute"
          bottom={34}
          right={8}
          onPress={() => setShowModal(true)}
          icon={<AntDesign name="plus" size={24} color="white" />}
        />
      </Stack>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content bg="white.500" maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Edit task items</Modal.Header>
          <Modal.Body mt={4}>
            {markets.map(market => (
              <>
                <HStack>
                  <Box>
                    <Checkbox
                      value={market.link}
                      colorScheme="blue"
                      defaultIsChecked={market.check}>
                      <Text fontSize="lg" mx={3}>
                        {market.name}
                      </Text>
                    </Checkbox>
                  </Box>
                  <Box
                    style={{
                      backgroundColor: '#E3F2FD',
                      padding: 4,
                      borderRadius: 5,
                    }}>
                    <Ionicons name="md-eye" size={24} color="#3793FD" />
                  </Box>
                </HStack>
                <Divider mt={3} mb={3} bg="divider.500" />
              </>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button bg="yellow.500">Save Tasks</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default PreMarket;
