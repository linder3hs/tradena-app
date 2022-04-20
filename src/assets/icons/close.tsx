import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G>
        <Path
          d="M21.291 8.016a1.25 1.25 0 00-1.775 0l-2.862 2.875-2.863-2.875a1.255 1.255 0 00-1.775 1.775l2.875 2.863-2.875 2.862a1.249 1.249 0 000 1.775 1.249 1.249 0 001.775 0l2.863-2.875 2.862 2.875a1.249 1.249 0 001.775 0 1.249 1.249 0 000-1.775l-2.875-2.862 2.875-2.863a1.248 1.248 0 000-1.775zm4.2-4.2A12.5 12.5 0 107.816 21.491 12.5 12.5 0 1025.491 3.816zM23.73 19.73a10 10 0 112.925-7.075 9.938 9.938 0 01-2.925 7.075z"
          fill="#3793FD"
        />
      </G>
      <Defs />
    </Svg>
  );
}

export default SvgComponent;
