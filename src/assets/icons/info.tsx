import * as React from 'react';
import Svg, {G, Rect, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      width={54}
      height={54}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G>
        <Rect x={3} y={2} width={48} height={48} rx={5} fill="#24B5A4" />
        <Path
          d="M28.417 31.667H27V26h-1.417M27 20.333h.014M39.75 26a12.75 12.75 0 11-25.501 0 12.75 12.75 0 0125.501 0z"
          stroke="#FAFAFA"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs />
    </Svg>
  );
}

export default SvgComponent;
