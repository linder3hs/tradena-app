import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={34}
      height={34}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M17 17c2.833-4.193 0-9.917-1.417-11.333 0 4.304-2.511 6.716-4.25 8.5C9.597 15.952 8.5 18.757 8.5 21.25a8.5 8.5 0 0017 0c0-2.17-1.496-5.582-2.833-7.083-2.53 4.25-3.954 4.25-5.667 2.833z"
        fill="#FAFAFA"
        stroke="#FAFAFA"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
