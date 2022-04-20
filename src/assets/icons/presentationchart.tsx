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
        d="M75 15H15v45a3.75 3.75 0 003.75 3.75h52.5A3.75 3.75 0 0075 60V15z"
        fill="#FAD7A2"
      />
      <Path
        d="M26.25 45L37.5 33.75 48.75 45l15-15M30 78.75l15-15 15 15M11.25 15h67.5M15 15h60v45a3.75 3.75 0 01-3.75 3.75h-52.5A3.75 3.75 0 0115 60V15z"
        stroke="#000"
        strokeOpacity={0.69}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
