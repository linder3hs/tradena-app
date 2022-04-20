/* eslint-disable prettier/prettier */
import * as React from 'react';
import Svg, {Path, Defs, RadialGradient, Stop} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={120}
      height={137}
      viewBox="0 0 120 137"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M103.017 0H16.751C7.5 0 0 7.577 0 16.932V67.59c0 32.436 33.62 56.334 54.615 66.39 3.43 1.643 7.343 1.843 10.894.483 20.948-8.024 54.258-29.711 54.258-66.873V16.934c0-9.356-7.499-16.934-16.75-16.934z"
        fill="url(#prefix__paint0_radial)"
      />
      <Path
        d="M65.663 32.693c0-3.087-2.475-5.59-5.528-5.59-3.053 0-5.528 2.503-5.528 5.59v36.59c0 3.087 2.475 5.59 5.528 5.59 3.053 0 5.528-2.503 5.528-5.59v-36.59z"
        fill="#fff"
      />
      <Path
        d="M80.403 45.737H40.872c-2.96 0-5.36 2.427-5.36 5.42 0 2.994 2.4 5.421 5.36 5.421h39.531c2.96 0 5.36-2.427 5.36-5.42 0-2.994-2.4-5.421-5.36-5.421zM59.968 100.96c3.33 0 6.03-2.73 6.03-6.098s-2.7-6.099-6.03-6.099-6.03 2.73-6.03 6.099c0 3.368 2.7 6.098 6.03 6.098z"
        fill="#fff"
      />
      <Defs>
        <RadialGradient
          id="prefix__paint0_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(90.7888 -115.18943 102.04922 80.43208 28.811 115.189)">
          <Stop stopColor="#3793FD" />
          <Stop offset={1} stopColor="#7CF2E4" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
