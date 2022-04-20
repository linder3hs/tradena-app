import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={54}
      height={47}
      viewBox="0 0 54 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M27.02.416C8.796.416.547 6.39.547 23.482c0 15.88 6.856 23.066 26.475 23.066 18.226 0 26.474-5.973 26.474-23.066C53.495 7.602 46.639.416 27.02.416z"
        fill="#EDFFEF"
      />
      <Path
        d="M34.795 32.167c0-.622-.452-1.095-1.075-1.095H27.1c.272-.03.533-.15.734-.361l6.609-6.62c.241-.24.352-.512.352-.813 0-.623-.462-1.085-1.075-1.085-.312 0-.593.13-.794.331l-2.29 2.26-2.601 2.914.08-2.17V13.123c0-.673-.452-1.135-1.115-1.135s-1.115.462-1.115 1.135v12.405l.08 2.16-2.601-2.903-2.29-2.26a1.13 1.13 0 00-.804-.332c-.613 0-1.065.462-1.065 1.085 0 .301.11.572.352.814l6.61 6.619c.2.21.461.331.732.362H20.3c-.633 0-1.095.472-1.095 1.094 0 .623.462 1.095 1.095 1.095h13.42c.623 0 1.075-.472 1.075-1.095z"
        fill="#6FD37A"
      />
    </Svg>
  );
}

export default SvgComponent;
