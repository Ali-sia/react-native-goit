import * as React from 'react';
import { memo } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

function svgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="none"
      {...props}
    >
      <Circle
        cx={13.5}
        cy={13.5}
        r={12}
        fill="#fff"
        // stroke="#E8E8E8"
        transform="rotate(-.726 13.5 13.5)"
      />
      <Path
        // fill="#BDBDBD"
        fillRule="evenodd"
        d="m13.917 6.994-1 .013.076 6-5.999.075.013 1 6-.076.075 6 1-.013-.076-6 6-.075-.013-1-6 .076-.076-6Z"
        clipRule="evenodd"
      />
    </Svg>
  );
}
const AddAvatarIcon = memo(svgComponent);
export default AddAvatarIcon;
