import React from 'react';
import { TextInput, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { Colors, Images, Metrix } from '../config';
import EvillIcons from 'react-native-vector-icons/EvilIcons';
import { fonts } from '../config/Constants';

function TextField({
  secureTextEntry = false,
  onChangeText = () => { },
  value = '',
  placeholderTextColor = Colors.secondary,
  style = {},
  multiline = false,
  keyboardType = 'default',
  noOfLines = 1,
  placeholder = "",
  disable = true,
}) {
  return (
    <>


      <TextInput
        style={{ ...styles.input, ...style }}
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        numberOfLine={noOfLines}
        multiline={multiline}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
        editable={disable}
      />
    </>
  );
}

export default TextField;

const styles = StyleSheet.create({
  iconStyle: {
    // right:true,
    position: 'absolute',
    zIndex: 100,
    top: Metrix.VerticalSize(22)
  },
  input: {
    marginTop: Metrix.VerticalSize(10),
    width: '100%',
    height: Metrix.VerticalSize(50),
    fontSize: Metrix.customFontSize(12),
    padding: 5,
    paddingLeft: Metrix.HorizontalSize(10),
    color: Colors.black,
    borderRadius: 8,
    borderColor: Colors.lighGray,
    borderWidth: 1
  },
});
