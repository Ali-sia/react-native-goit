import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function CustomInput({
  value,
  setValue,
  placeholder,
  onSubmitEditing,
  secureTextEntry = false,
}) {
  const [onFocus, setOnFocus] = useState(false);
  console.log('---> ~ onFocus:', onFocus);
  //   useEffect(() => {
  //     setOnFocus(false);
  //   }, [onFocus]);
  //   style={[styles.button, isPressed && styles.buttonPressed]}

  return (
    <TextInput
      style={[styles.inputStyles, onFocus && styles.inputStylesOnFocus]}
      onChange={setValue}
      onSubmitEditing={onSubmitEditing}
      value={value}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      onFocus={() => {
        setOnFocus(true);
      }}
      onBlur={() => setOnFocus(false)}
    ></TextInput>
  );
}

const styles = StyleSheet.create({
  inputStyles: {
    backgroundColor: '#F6F6F6',
    marginBottom: 16,
    width: '100%',
    height: 50,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 8,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 15,
    fontSize: 16,
    lineHeight: 19,

    color: '#212121',
  },
  inputStylesOnFocus: {
    borderColor: '#FF6C00',
    backgroundColor: '#ffffff',
  },
});
