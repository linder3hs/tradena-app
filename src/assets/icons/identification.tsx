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
        d="M18.75 22.5H37.5v-3.75a7.5 7.5 0 0115 0v3.75h18.75a7.5 7.5 0 017.5 7.5v33.75a7.5 7.5 0 01-7.5 7.5h-52.5a7.5 7.5 0 01-7.5-7.5V30a7.5 7.5 0 017.5-7.5z"
        fill="#F7ECCB"
      />
      <Path
        d="M37.5 22.5H18.75a7.5 7.5 0 00-7.5 7.5v33.75a7.5 7.5 0 007.5 7.5h52.5a7.5 7.5 0 007.5-7.5V30a7.5 7.5 0 00-7.5-7.5H52.5m-15 0v-3.75a7.5 7.5 0 0115 0v3.75m-15 0a7.5 7.5 0 0015 0m-18.75 30a7.5 7.5 0 100-15 7.5 7.5 0 000 15zm0 0c4.898 0 9.064 3.131 10.612 7.5M33.75 52.5A11.253 11.253 0 0023.137 60M56.25 41.25H67.5m-11.25 15h7.5"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
