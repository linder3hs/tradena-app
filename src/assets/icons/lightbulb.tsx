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
        d="M26.61 48.66a18.75 18.75 0 005.13 9.6l2.055 2.051A12.645 12.645 0 0137.5 69.26v1.991a7.5 7.5 0 0015 0v-1.991a12.653 12.653 0 013.705-8.948l2.055-2.051a18.75 18.75 0 10-31.65-9.6z"
        fill="#DCC9FE"
      />
      <Path
        d="M36.236 63.75H53.76M45 11.25V15m23.865 6.135l-2.651 2.651M78.75 45H75m-60 0h-3.75m12.536-21.214l-2.651-2.651M31.74 58.26a18.75 18.75 0 1126.52 0l-2.055 2.051A12.652 12.652 0 0052.5 69.26v1.991a7.5 7.5 0 01-15 0v-1.991a12.66 12.66 0 00-3.705-8.948L31.74 58.26z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
