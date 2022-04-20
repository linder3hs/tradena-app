import React, { FC } from 'react';
import AppBar from '../../components/AppBar';
import { Box, Center, Text, VStack, HStack } from 'native-base';
import { Dimensions } from 'react-native';
import { VictoryPie } from 'victory-native';

const screenWidth = Dimensions.get('window').width;

interface Props {
  navigation: any;
}

const AccountPosition: FC<Props> = ({ navigation }) => {
  const sampleData = [
    { x: '20%', y: 20 },
    { x: '30%', y: 30 },
    { x: '25%', y: 25 },
    { x: '25%', y: 25 },
  ];

  return (
    <>
      <AppBar
        text="Account Positions"
        isBack={true}
        navigation={navigation}
        back="Home"
      />
      <Box bg="white.500" borderRadius={10} shadow={2} m={5}>
        <Text m={4} bold fontSize={20}>
          Positions
        </Text>
        <Center>
          <VictoryPie
            colorScale={['#5874F0', '#A569E3', '#EF7D29', '#33D299']}
            innerRadius={90}
            data={sampleData}
            width={screenWidth - 55}
          />
        </Center>
        <VStack>
          <HStack mr={6} ml={6} mb={6} mt={-10}>
            <Box>
              <HStack>
                <Box bg="#EF7D29" width={5} height={5} borderRadius={10} />
                <Text bold fontSize="xl" ml={3}>
                  Equities
                </Text>
              </HStack>
            </Box>
            <Box bg="textSecondary.100" p={1} borderRadius={4}>
              <Text bold> 20%</Text>
            </Box>
          </HStack>
          <HStack mr={6} ml={6} mb={6}>
            <Box>
              <HStack>
                <Box bg="#5874F0" width={5} height={5} borderRadius={10} />
                <Text bold fontSize="xl" ml={3}>
                  EUR/USD
                </Text>
              </HStack>
            </Box>
            <Box bg="textSecondary.100" p={1} borderRadius={4}>
              <Text bold> 30%</Text>
            </Box>
          </HStack>
          <HStack mr={6} ml={6} mb={6}>
            <Box>
              <HStack>
                <Box bg="#A569E3" width={5} height={5} borderRadius={10} />
                <Text bold fontSize="xl" ml={3}>
                  CHF/USD
                </Text>
              </HStack>
            </Box>
            <Box bg="textSecondary.100" p={1} borderRadius={4}>
              <Text bold> 25%</Text>
            </Box>
          </HStack>
          <HStack mr={6} ml={6} mb={6}>
            <Box>
              <HStack>
                <Box bg="#33D299" width={5} height={5} borderRadius={10} />
                <Text bold fontSize="xl" ml={3}>
                  CASH
                </Text>
              </HStack>
            </Box>
            <Box bg="textSecondary.100" p={1} borderRadius={4}>
              <Text bold> 25%</Text>
            </Box>
          </HStack>
          <HStack mr={6} ml={6} mb={6}>
            <Box>
              <HStack>
                <Box bg="#212121" width={5} height={5} borderRadius={10} />
                <Text bold fontSize="xl" ml={3}>
                  USD/JPY
                </Text>
              </HStack>
            </Box>
            <Box bg="textSecondary.100" p={1} borderRadius={4}>
              <Text bold> 25%</Text>
            </Box>
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default AccountPosition;
