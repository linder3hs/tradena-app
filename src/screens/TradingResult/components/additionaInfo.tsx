import React, { FC } from "react";
import { Stack, TextArea, Button } from "native-base";
const AdditionalInfo: FC = () => {
  return (
    <Stack space={4} p={6}>
      <TextArea bg="white.500" h={120} placeholder="Additional info" />
      <Button>Save</Button>
    </Stack>
  );
};

export default AdditionalInfo;
