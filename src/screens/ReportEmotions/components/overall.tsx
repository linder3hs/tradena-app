import React, { FC } from "react";
import { Box, Center, Text, Flex, HStack, VStack } from "native-base";
import { Dimensions } from "react-native";
import { VictoryPie } from "victory-native";

const screenWidth = Dimensions.get("window").width;

const Overall: FC = () => {
  const sampleData = [
    { x: "20%", y: 20 },
    { x: "30%", y: 30 },
    { x: "25%", y: 25 },
    { x: "25%", y: 25 },
  ];

  return (
    <Box bg="white.500" borderRadius={10} shadow={2} m={5}>
      <Center mt={-10}>
        <VictoryPie
          colorScale={["#5874F0", "#A569E3", "#EF7D29", "#33D299"]}
          innerRadius={90}
          data={sampleData}
          width={screenWidth - 55}
        />
      </Center>
      <VStack>
        <Flex
          direction="row"
          justify="space-between"
          mr={6}
          ml={6}
          mb={6}
          mt={-10}
        >
          <Box>
            <Flex direction="row" align="center">
              <Box bg="#EF7D29" width={5} height={5} borderRadius={10}></Box>
              <Text bold fontSize="xl" ml={3}>
                Happy
              </Text>
            </Flex>
          </Box>
          <Box bg="textSecondary.100" p={1} borderRadius={4}>
            <Text bold> 20%</Text>
          </Box>
        </Flex>
        <Flex direction="row" justify="space-between" mr={6} ml={6} mb={6}>
          <Box>
            <Flex direction="row" align="center">
              <Box bg="#5874F0" width={5} height={5} borderRadius={10}></Box>
              <Text bold fontSize="xl" ml={3}>
                Sad
              </Text>
            </Flex>
          </Box>
          <Box bg="textSecondary.100" p={1} borderRadius={4}>
            <Text bold> 30%</Text>
          </Box>
        </Flex>
        <Flex direction="row" justify="space-between" mr={6} ml={6} mb={6}>
          <Box>
            <Flex direction="row" align="center">
              <Box bg="#A569E3" width={5} height={5} borderRadius={10}></Box>
              <Text bold fontSize="xl" ml={3}>
                Good
              </Text>
            </Flex>
          </Box>
          <Box bg="textSecondary.100" p={1} borderRadius={4}>
            <Text bold> 25%</Text>
          </Box>
        </Flex>
        <Flex direction="row" justify="space-between" mr={6} ml={6} mb={6}>
          <Box>
            <Flex direction="row" align="center">
              <Box bg="#33D299" width={5} height={5} borderRadius={10}></Box>
              <Text bold fontSize="xl" ml={3}>
                Good
              </Text>
            </Flex>
          </Box>
          <Box bg="textSecondary.100" p={1} borderRadius={4}>
            <Text bold> 25%</Text>
          </Box>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Overall;
