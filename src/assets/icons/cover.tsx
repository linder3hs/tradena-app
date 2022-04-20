import * as React from 'react';
import Svg, {G, Circle, Path, Defs, ClipPath} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={111}
      height={140}
      viewBox="0 0 162 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#prefix__clip0)">
        <Circle cx={142.5} cy={97.5} r={72.5} fill="#FDEDB9" />
        <Path
          d="M135.684 127.338c14.925-5.351 22.685-21.788 17.334-36.712-5.351-14.925-21.787-22.685-36.711-17.334-14.925 5.35-22.686 21.787-17.335 36.712 5.351 14.924 21.788 22.685 36.712 17.334z"
          fill="#FFE57F"
        />
        <Path
          d="M119.781 83.653c-9.129 3.273-13.874 13.321-10.6 22.45 3.273 9.129 13.321 13.874 22.45 10.601 9.129-3.274 13.874-13.322 10.601-22.451-3.274-9.129-13.322-13.874-22.451-10.6zm10.703 29.852c-7.35 2.635-15.47-1.199-18.105-8.549s1.199-15.47 8.549-18.105 15.47 1.199 18.105 8.549-1.199 15.47-8.549 18.105zm-10.491-12.482a2.263 2.263 0 001.368-2.897 2.263 2.263 0 00-2.897-1.367 2.262 2.262 0 00-1.368 2.896 2.263 2.263 0 002.897 1.368zm10.662-3.822a2.263 2.263 0 001.367-2.897 2.262 2.262 0 00-2.896-1.368 2.262 2.262 0 00-1.368 2.897 2.263 2.263 0 002.897 1.368zm2.001 4.742a7.725 7.725 0 01-4.656 4.632 7.7 7.7 0 01-6.539-.619 1.704 1.704 0 00-2.326.601 1.703 1.703 0 00.601 2.327 11.112 11.112 0 009.408.883 11.115 11.115 0 006.704-6.66 1.696 1.696 0 00-1.014-2.178 1.703 1.703 0 00-2.178 1.014z"
          fill="#616161"
        />
        <Path
          d="M95.77 56.336c10.442 3.603 21.828-1.94 25.431-12.382 3.603-10.441-1.941-21.827-12.382-25.43-10.441-3.603-21.827 1.94-25.43 12.382-3.603 10.441 1.94 21.827 12.382 25.43z"
          fill="#FFE57F"
        />
        <Path
          d="M105.239 26.574c-6.038-2.083-12.564.967-14.582 6.816-2.019 5.849 1.238 12.275 7.275 14.358 6.037 2.084 12.564-.967 14.582-6.815 2.018-5.849-1.238-12.275-7.275-14.359zm-6.6 19.125c-4.86-1.677-7.492-6.87-5.867-11.58 1.625-4.708 6.899-7.173 11.76-5.496 4.86 1.678 7.491 6.871 5.867 11.58-1.625 4.708-6.9 7.174-11.76 5.496zm-.343-10.437c.78.269 1.62-.124 1.881-.88.261-.755-.159-1.583-.939-1.852-.78-.27-1.62.123-1.881.88-.26.755.159 1.583.939 1.852zm7.993-.3c-.78-.268-1.621.125-1.881.88-.261.756.158 1.584.938 1.853.78.269 1.621-.124 1.882-.88.261-.755-.159-1.583-.939-1.852zm-5.411 4.248a6.369 6.369 0 00-5.29.497 1.06 1.06 0 00-.361 1.49c.325.513 1.01.688 1.535.381a4.108 4.108 0 013.41-.323 4.093 4.093 0 012.486 2.358c.214.537.843.86 1.444.646.574-.207.854-.832.634-1.395a6.366 6.366 0 00-3.858-3.654z"
          fill="#616161"
        />
        <Path
          d="M49.5 68C56.956 68 63 62.18 63 55s-6.044-13-13.5-13S36 47.82 36 55s6.044 13 13.5 13z"
          fill="#FDEDB9"
        />
        <Path
          d="M49.5 46.643c-4.794 0-8.678 3.74-8.678 8.357 0 4.617 3.884 8.357 8.678 8.357 4.794 0 8.679-3.74 8.679-8.357 0-4.617-3.885-8.357-8.679-8.357zm0 15.097c-3.86 0-6.999-3.023-6.999-6.74s3.14-6.74 7-6.74c3.859 0 6.998 3.023 6.998 6.74s-3.14 6.74-6.999 6.74zm0-4.853a4.014 4.014 0 00-3.037 1.368.787.787 0 00.108 1.14.86.86 0 001.183-.102c.868-1 2.624-1 3.492 0a.862.862 0 001.183.101.79.79 0 00.109-1.139 4.014 4.014 0 00-3.038-1.368zm-1.68-2.426c.36 0 .697-.226.805-.576a.805.805 0 00-.563-1.008l-2.8-.809a.842.842 0 00-1.046.543.805.805 0 00.563 1.007l.987.287c-.108.165-.185.35-.185.56 0 .596.5 1.077 1.12 1.077.619 0 1.12-.485 1.12-1.081zm6.964-1.85c-.133-.428-.598-.67-1.046-.543l-2.8.809a.805.805 0 00-.563 1.008c.108.35.444.576.805.576 0 .596.5 1.078 1.12 1.078.619 0 1.12-.482 1.12-1.078 0-.21-.078-.395-.186-.56l.987-.286a.8.8 0 00.563-1.004z"
          fill="#616161"
        />
        <Path
          d="M24.935 113.947c8.812 2.321 17.837-2.941 20.158-11.753 2.321-8.812-2.941-17.838-11.753-20.158-8.813-2.321-17.838 2.94-20.159 11.753-2.32 8.812 2.942 17.837 11.754 20.158z"
          fill="#FDEDB9"
        />
        <Path
          d="M31.802 87.71c-5.652-1.49-11.437 1.884-12.926 7.536-1.488 5.652 1.885 11.437 7.537 12.926 5.652 1.489 11.437-1.885 12.926-7.537 1.489-5.652-1.885-11.437-7.537-12.926zm-4.867 18.482c-4.551-1.199-7.277-5.874-6.078-10.425 1.198-4.55 5.873-7.276 10.424-6.078 4.55 1.199 7.276 5.874 6.078 10.425-1.199 4.55-5.874 7.276-10.425 6.078zm-.954-9.78a1.364 1.364 0 001.668-.973 1.364 1.364 0 00-.973-1.668 1.364 1.364 0 00-1.667.972c-.193.73.242 1.476.972 1.668zm7.296-.903a1.364 1.364 0 00-1.668.973c-.192.73.243 1.475.973 1.668a1.364 1.364 0 001.668-.973 1.364 1.364 0 00-.973-1.668zm-1.234 6.028l-7.261-1.912a1.027 1.027 0 00-1.251.729 1.027 1.027 0 00.73 1.251l7.26 1.912a1.026 1.026 0 001.251-.729 1.027 1.027 0 00-.73-1.251z"
          fill="#616161"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h171v140H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
