import React, { FC } from 'react';
import { Box, Stack, Text } from 'native-base';

const Info: FC = () => {
  return (
    <Box>
      <Stack
        direction="row"
        space={10}
        mt={3}
        mr={6}
        alignItems="flex-end"
        justifyContent="flex-end">
        <Text fontSize={18} bold>
          Day
        </Text>
        <Text bold>WTD</Text>
        <Text bold>MTD</Text>
        <Text bold>YTD</Text>
      </Stack>
    </Box>
  );
};

export default Info;
