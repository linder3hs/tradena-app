import React, { FC } from 'react';
import { Box, HStack, VStack, Text } from 'native-base';

interface Props {
  icon: JSX.Element;
  title: string;
  message: string;
}

const CardRiks: FC<Props> = ({ icon, title, message }): JSX.Element => {
  return (
    <Box bg="white.500" m={6} p={4} mb={0} borderRadius={10} shadow={2}>
      <HStack direction="row">
        <Box>
          <>{icon}</>
        </Box>
        <Box>
          <VStack ml={5}>
            <Text fontSize={16}>{title}</Text>
            <Text bold fontSize={14}>
              {message}
            </Text>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default CardRiks;
