import { View } from 'react-native';

export const TabBarIcon = ({ IconComponent, focused, size, color }) => {
  const backgroundColor = focused ? '#FF6C00' : 'transparent';
  const borderRadius = focused ? 20 : 0;

  let paddingVertical;
  let paddingHorizontal;
  if (size === 13) {
    paddingVertical = focused ? 13 : 0;
    paddingHorizontal = focused ? 28 : 0;
  } else {
    paddingVertical = focused ? 8 : 0;
    paddingHorizontal = focused ? 23 : 0;
  }

  const marginHorizontal = focused ? 31 : 0;
  const fill = focused ? '#FF6C00' : 'transparent';
  const stroke = focused ? '#ffffff' : color;

  return (
    <View
      style={{
        backgroundColor,
        borderRadius,
        paddingVertical,
        paddingHorizontal,
        marginHorizontal,
        fill,
        stroke,
      }}
    >
      <IconComponent width={size} height={size} stroke={stroke} />
    </View>
  );
};
