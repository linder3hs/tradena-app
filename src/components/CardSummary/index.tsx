import React, { FC } from "react";
import { Box, Stack, Text } from "native-base";

interface Props {
  icon: any;
  color: string;
  amount: string;
  text: string;
}

const CardSummary: FC<Props> = ({ icon, color, amount, text }) => {
  return (
    <Box bg="dark.100" mt={4} p={4} borderRadius={5}>
      <Stack direction="row" alignItems="center">
        <Box
          bg={color}
          width="12"
          height="12"
          borderRadius={5}
          alignItems="center"
          justifyContent="center"
        >
          {icon}
        </Box>
        <Stack direction="column" ml={3}>
          <Text bold fontSize={18}>
            {amount}
          </Text>
          <Text fontSize={12}>{text}</Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CardSummary;
