import React, { FC } from "react";
import { Box, Text, Stack } from "native-base";
import CustomTable from "../../../components/CustomTable";
import Info from "../../../assets/icons/info";

const Performance: FC = () => {
  const data = {
    tableHead: ["", "Day", "WTD", "MTD", "YTD"],
    tableData: [
      ["Profit/Loss", "$450", "-$900", "$2400", "$2400"],
      ["Return", "$450", "-$300", "$2400", "$2400"],
      ["Win/Loss Ratio", "$450", "-$900", "$2400", "$2400"],
    ],
  };

  return (
    <Box>
      <Stack space={3} mt={5}>
        <CustomTable data={data} />
      </Stack>
      <Box
        m={6}
        p={5}
        borderRadius={5}
        _light={{ backgroundColor: "gray.200" }}
        _dark={{ backgroundColor: "gray.700" }}
      >
        <Info />
        <Text bold mt={3}>
          Additonal Info
        </Text>
        <Text fontSize={12} mt={2}>
          Morbi turpis dolor, vulputate vitae felis non, tincidunt congue
          mauris. Phasellus volutpat augue id mi placerat mollis. Vivamus
          faucibus eu massa eget condime.
        </Text>
        <Text fontSize={12} mt={4}>
          Your Win/Loss Ratio for this week was lower than average.
        </Text>
        <Text bold mt={4}>
          67% / 33%
        </Text>
      </Box>
    </Box>
  );
};

export default Performance;
