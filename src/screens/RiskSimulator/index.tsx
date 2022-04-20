import React, { FC } from "react";
import AppBar from "../../components/AppBar";
import { Box, Button, Stack, Text, Divider } from "native-base";
import { Flame, BoxI, TrendingDown } from "../../assets/icons/analytics";

interface Props {
  navigation: any;
}

const RiskSimulator: FC<Props> = ({ navigation }) => {
  return (
    <>
      <AppBar text="Risk Simulators" isBack={true} navigation={navigation} />
      <Box m={5}>
        <Button colorScheme="primary">Clear Simulator</Button>
      </Box>
      <Box
        bg="white.500"
        mt={0}
        mr={6}
        ml={6}
        p={4}
        mb={0}
        borderRadius={10}
        shadow={2}
      >
        <Text fontSize={18} bold>
          Results
        </Text>
        <Stack mt={4} direction="row" alignItems="center">
          <Box
            bg="#F29100"
            width={12}
            height={12}
            borderRadius={5}
            alignItems="center"
            justifyContent="center"
          >
            <TrendingDown />
          </Box>
          <Box ml={5}>
            <Text bold fontSize={18}>
              2:83
            </Text>
            <Text fontSize={12}>Risk / Reward</Text>
          </Box>
        </Stack>
        <Divider mt="4" />
        <Stack mt={4} direction="row" alignItems="center">
          <Box
            bg="#F2C94C"
            width={12}
            height={12}
            borderRadius={5}
            alignItems="center"
            justifyContent="center"
          >
            <Flame />
          </Box>
          <Box ml={5}>
            <Text bold fontSize={18}>
              $31.32
            </Text>
            <Text fontSize={12}>Expentancy</Text>
          </Box>
        </Stack>
        <Divider mt="4" />
        <Stack mt={4} direction="row" alignItems="center">
          <Box
            bg="#4CCC81"
            width={12}
            height={12}
            borderRadius={5}
            alignItems="center"
            justifyContent="center"
          >
            <BoxI />
          </Box>
          <Box ml={5}>
            <Text bold fontSize={18}>
              $55,637.28
            </Text>
            <Text fontSize={12}>Hypothetical Value</Text>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default RiskSimulator;
