import React, { useState } from 'react';
import { Text, Box, Button, HStack, Stack, Pressable } from 'native-base';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Feather } from '@expo/vector-icons';
// Components
import AppBar from '../../components/AppBar';
import Journal from './components/journal';
import Overall from './components/overall';

interface Props {
  navigation: any;
}

const ReportEmotions: React.FC<Props> = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [show, setShow] = useState(true);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  const emotions = ['#FFF6DA', '#EDEFFF', '#F3E7FD', '#E2F6F0', '#D0D3DC'];

  return (
    <>
      <AppBar
        text="Report"
        navigation={navigation}
        isBack={true}
        back="EmotionalGuardian"
      />
      <Stack>
        <Box p={3} bg="white.500">
          <HStack bg="primary.100" borderRadius={5}>
            <Button w="50%" variant="ghost" onPress={() => setShow(false)}>
              Overall Report
            </Button>
            <Button w="50%" onPress={() => setShow(true)}>
              Journal
            </Button>
          </HStack>
        </Box>
        <Box mt={-2} bg="white.500">
          <Pressable
            onPress={showDatePicker}
            bg="#EEF1F4"
            m={4}
            p={2.5}
            borderRadius={5}>
            <HStack>
              <Text bold fontSize="xl">
                All days
              </Text>
              <Feather name="calendar" size={22} color="#616161" />
            </HStack>
          </Pressable>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </Box>
        {/* <ScrollView height={600}> */}
        {show ? (
          <Journal navigation={navigation} emotions={emotions} />
        ) : (
          <Overall />
        )}
        {/* </ScrollView> */}
      </Stack>
    </>
  );
};

export default ReportEmotions;
