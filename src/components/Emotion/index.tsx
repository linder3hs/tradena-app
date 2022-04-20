import React from 'react';
import { Box, Text, Flex, VStack, Pressable, HStack } from 'native-base';
import { Feather, Entypo } from '@expo/vector-icons';
import EmotionIcon from '../../assets/icons/emotion';

interface Props {
  navigation: any;
  dateTime: string;
  icon: string;
  emotionText: string;
  score: string;
  color: string;
}

const Emotion: React.FC<Props> = ({ dateTime, emotionText, score, color }) => {
  return (
    <Box
      bg={color}
      m={4}
      p={4}
      mb={0}
      borderWidth={1}
      borderRadius={10}
      borderColor="white.500">
      <HStack>
        <VStack w="1%">
          <EmotionIcon width={73} height={73} />
        </VStack>
        <VStack space={4}>
          <Text>{dateTime}</Text>
          <Text bold fontSize="2xl" color="red.500">
            {emotionText}
          </Text>
          <HStack>
            <Feather name="clipboard" size={20} color="black" />
            <Text ml={2} bold>
              {score}
            </Text>
          </HStack>
        </VStack>
        <Flex align="flex-start">
          <Pressable>
            <Entypo name="chevron-down" size={20} color="black" />
          </Pressable>
        </Flex>
      </HStack>
    </Box>
  );
};

export default Emotion;
