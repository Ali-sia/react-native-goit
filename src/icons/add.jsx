import * as React from 'react';
import { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

function svgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <Path
        //   fill="#fff"
        fillRule="evenodd"
        d="M7.5.5h-1v6h-6v1h6v6h1v-6h6v-1h-6v-6Z"
        clipRule="evenodd"
      />
    </Svg>
  );
}
const AddIcon = memo(svgComponent);
export default AddIcon;
