import React from 'react';
import AppBar from '../../components/AppBar';
import ModalQuestion from '../../components/ModalQuestion';
import {
  Stack,
  Box,
  Text,
  HStack,
  VStack,
  useDisclose,
  Actionsheet,
  Pressable,
  ScrollView,
} from 'native-base';
import { BarChart } from 'react-native-chart-kit';
// Icons
import Cover from '../../assets/icons/cover';
import { AntDesign } from '@expo/vector-icons';

interface Props {
  navigation: any;
}

const EmotionalGuardian: React.FC<Props> = ({ navigation }) => {
  const line = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [40, 45, 28, 80, 99, 43, 40],
        strokeWidth: 1, // optional
        colors: [
          () => '#673AB7',
          () => '#673AB7',
          () => '#673AB7',
          () => '#673AB7',
          () => '#673AB7',
          () => '#673AB7',
          () => '#673AB7',
        ],
      },
    ],
  };

  const emotions = {
    labels: ['Calm', 'Happy', 'Tired', 'Relaxed', 'Excited'],
    datasets: [
      {
        data: [14, 23, 34, 45, 56],
        colors: [
          () => '#9ED6F4',
          () => '#FADD4E',
          () => '#71CAC3',
          () => '#9FEAD6',
          () => '#ED5073',
        ],
      },
    ],
  };

  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <>
      <AppBar
        text="Emotional Guardian"
        navigation={navigation}
        isBack={false}
        back="Home"
      />
      <ScrollView height={300}>
        <Stack space={4}>
          <Pressable onPress={onOpen}>
            <Box bg="yellow.500" m={4} borderRadius={10}>
              <HStack>
                <VStack w="62.5%" p={4}>
                  <Text bold fontSize="lg" w="80%">
                    No entries found for today
                  </Text>
                  <Text w="70%" mt={3}>
                    Click here to add your mood for today
                  </Text>
                </VStack>
                <Box mt={5} ml={5}>
                  <Cover />
                </Box>
              </HStack>
            </Box>
          </Pressable>
        </Stack>
        <Stack space={4}>
          <Box bg="white.500" m={4} mt={0} borderRadius={10}>
            <HStack m={4}>
              <Text bold fontSize="lg">
                Weekly Score
              </Text>
              <Pressable
                onPress={() => navigation.navigate('ReportEmotions')}
                bg="#EEF1F4"
                p={2}
                borderRadius={5}>
                <Text color="textSecondary.500">
                  Record <AntDesign name="inbox" size={18} color="#616161" />
                </Text>
              </Pressable>
            </HStack>
            <VStack>
              <BarChart
                data={line}
                width={320} // from react-native
                height={220}
                withInnerLines={false}
                fromZero={false}
                withCustomBarColorFromData={true}
                flatColor={true}
                chartConfig={{
                  backgroundColor: '#fff',
                  backgroundGradientFrom: '#fff',
                  backgroundGradientTo: '#fff',
                  decimalPlaces: 0, // optional, defaults to 2dp
                  color: () => '#673AB7',
                  fillShadowGradient: '#673AB7',
                  fillShadowGradientOpacity: 1,
                  labelColor: () => '#616161',
                }}
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            </VStack>
          </Box>
        </Stack>
        <Stack space={4}>
          <Box bg="white.500" m={4} mt={0} borderRadius={10}>
            <HStack m={4}>
              <Text bold fontSize="lg">
                Report
              </Text>
              <Pressable bg="#EEF1F4" p={2} borderRadius={5}>
                <Text color="textSecondary.500">
                  Record <AntDesign name="inbox" size={18} color="#616161" />
                </Text>
              </Pressable>
            </HStack>
            <VStack>
              <BarChart
                data={emotions}
                width={320} // from react-native
                height={220}
                withInnerLines={false}
                fromZero={false}
                withCustomBarColorFromData={true}
                flatColor={true}
                chartConfig={{
                  backgroundColor: '#fff',
                  backgroundGradientFrom: '#fff',
                  backgroundGradientTo: '#fff',
                  decimalPlaces: 0, // optional, defaults to 2dp
                  color: () => '#fff',
                  fillShadowGradient: '#673AB7',
                  fillShadowGradientOpacity: 1,
                  labelColor: () => '#616161',
                }}
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            </VStack>
          </Box>
        </Stack>
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content bg="white.500">
            <ModalQuestion onClose={onClose} navigation={navigation} />
          </Actionsheet.Content>
        </Actionsheet>
      </ScrollView>
    </>
  );
};

export default EmotionalGuardian;
