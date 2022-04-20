import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={90}
      height={90}
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M23.972 18.597a33.754 33.754 0 0117.278-7.14V48.75h37.294a33.754 33.754 0 11-54.572-30.153z"
        fill="#A2DBC8"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M56.25 33.75h20.58a33.844 33.844 0 00-20.58-20.58v20.58z"
        fill="#A2DBC8"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
