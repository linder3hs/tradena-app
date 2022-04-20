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
        d="M71.25 78.75h-52.5a7.5 7.5 0 01-7.5-7.5v-45a7.5 7.5 0 017.5-7.5h52.5a7.5 7.5 0 017.5 7.5v45a7.5 7.5 0 01-7.5 7.5z"
        fill="#F4B7D1"
      />
      <Path
        d="M30 26.25v-15m30 15v-15m-33.75 30h37.5m-45 37.5h52.5a7.5 7.5 0 007.5-7.5v-45a7.5 7.5 0 00-7.5-7.5h-52.5a7.5 7.5 0 00-7.5 7.5v45a7.5 7.5 0 007.5 7.5z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
