import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Colors, Metrix } from '../config';
import { fonts } from '../config/Constants';


function Button({
  buttonText = "",
  textStyle = {},
  btnStyle = {},
  onPress = () => { },
  shadow = false,
  disabled = false,
  preIcon = null,
  postIcon = null
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      disabled={disabled}
      style={
        shadow ? { ...styles.buttonStyle, ...styles.btnShadow, ...btnStyle } : { ...styles.buttonStyle, ...btnStyle }
      }
      onPress={onPress}
    >
      {preIcon}
      <Text style={{ ...styles.btnTextStyle, ...textStyle }}>{buttonText}</Text>
      {postIcon}
    </TouchableOpacity>
  )
}

export default Button;

const styles = StyleSheet.create({
  buttonStyle: {
    width: '100%',
    paddingHorizontal: Metrix.HorizontalSize(13),
    paddingVertical: Metrix.VerticalSize(13),
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary
  },
  btnShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },

  btnTextStyle: {
    fontSize: Metrix.customFontSize(14),
    color: Colors.black,
    fontFamily: fonts.SemiBold
  },
});