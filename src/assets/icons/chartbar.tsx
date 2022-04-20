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
        d="M31.553 43.447a7.5 7.5 0 012.197 5.303v-15a7.5 7.5 0 017.5-7.5h7.5a7.5 7.5 0 017.5 7.5v-15a7.5 7.5 0 017.5-7.5h7.5a7.5 7.5 0 017.5 7.5v52.5a7.5 7.5 0 01-7.5 7.5h-7.5a7.5 7.5 0 01-7.5-7.5 7.5 7.5 0 01-7.5 7.5h-7.5a7.5 7.5 0 01-7.5-7.5 7.5 7.5 0 01-7.5 7.5h-7.5a7.5 7.5 0 01-7.5-7.5v-22.5a7.5 7.5 0 017.5-7.5h7.5a7.5 7.5 0 015.303 2.197z"
        fill="#C2D3F0"
      />
      <Path
        d="M33.75 71.25v-22.5a7.5 7.5 0 00-7.5-7.5h-7.5a7.5 7.5 0 00-7.5 7.5v22.5a7.5 7.5 0 007.5 7.5h7.5a7.5 7.5 0 007.5-7.5zm0 0v-37.5a7.5 7.5 0 017.5-7.5h7.5a7.5 7.5 0 017.5 7.5v37.5m-22.5 0a7.5 7.5 0 007.5 7.5h7.5a7.5 7.5 0 007.5-7.5m0 0v-52.5a7.5 7.5 0 017.5-7.5h7.5a7.5 7.5 0 017.5 7.5v52.5a7.5 7.5 0 01-7.5 7.5h-7.5a7.5 7.5 0 01-7.5-7.5z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
