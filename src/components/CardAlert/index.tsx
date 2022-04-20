import React, { FC } from 'react';
import { Alert, Box, HStack, Text, VStack } from 'native-base';
import Icon from 'react-native-ionicons';

interface Props {
  title: string;
  status: string;
  message: string;
}

const CardAlert: FC<Props> = ({ title, status, message }): JSX.Element => {
  const colors: any = {
    success: '#00c853',
    warning: '#d48806',
    danger: '#f44336',
  };

  return (
    <Alert
      w="100%"
      status={status}
      colorScheme={status}
      borderWidth={1}
      borderColor={colors[status]}>
      <VStack flexShrink={1} w="100%">
        <Box
          pl="3"
          _text={{
            color: 'coolGray.600',
          }}>
          <HStack alignItems="center">
            {status === 'success' && (
              <Icon name="checkmark-circle-outline" color={colors[status]} />
            )}
            {status === 'warning' && (
              <Icon ios="warning" android="warning" color={colors[status]} />
            )}
            {status === 'danger' && (
              <Icon ios="nuclear" android="nuclear" color={colors[status]} />
            )}
            <Text ml={3} fontSize={18} bold>
              {title}
            </Text>
          </HStack>

          <Text mt={3}>{message}</Text>
        </Box>
      </VStack>
    </Alert>
  );
};

export default CardAlert;
