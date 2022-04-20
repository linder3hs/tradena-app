import React, { FC, useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { Box, Button, HStack, ScrollView, Stack, Text } from 'native-base';
import { token, historyRiskManagment } from '../../../service/riskMangment';
import { RiskManagment } from '../../../service/riskMangment/model';
import dateFormat from 'dateformat';

interface Props {
  navigation: any;
}

const History: FC<Props> = ({ navigation }) => {
  const [risks, setRisks] = useState<RiskManagment[] | []>([]);

  const getHistory = async () => {
    const reponse = await historyRiskManagment(token, '1');
    setRisks(reponse.data);
  };

  const onShow = (response: RiskManagment) =>
    navigation.navigate('RiskManagmentResult', { response });

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <Stack space={4} m={5}>
      <ScrollView height={Dimensions.get('window').height}>
        <Text fontSize={20} bold>
          Risk History
        </Text>
        <Box bg="white.500" p={3} mt={3} borderRadius={10}>
          <Stack space={7}>
            {risks &&
              risks.map((risk: RiskManagment) => (
                <HStack>
                  <Stack direction="row">
                    <Stack m={1}>
                      <Text fontSize={16} fontWeight={600}>
                        {dateFormat(risk.createdAt, 'dd mmmm, yyyy')}
                      </Text>
                    </Stack>
                  </Stack>
                  <Button onPress={() => onShow(risk)} variant="ghost">
                    Show
                  </Button>
                </HStack>
              ))}
          </Stack>
        </Box>
      </ScrollView>
    </Stack>
  );
};

export default History;
