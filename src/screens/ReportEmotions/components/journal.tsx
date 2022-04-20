import React from "react";
import Emotion from "../../../components/Emotion";

interface Props {
  emotions: any;
  navigation: any;
}

const Journal: React.FC<Props> = ({ emotions, navigation }) => {
  return (
    <>
      {emotions.map((emotion: any) => (
        <Emotion
          navigation={navigation}
          dateTime="Oct 20, 18:35"
          icon="icon"
          emotionText="Happy"
          score="5.0"
          color={emotion}
        />
      ))}
    </>
  );
};

export default Journal;
