import React from 'react';
import {Text, StyleSheet, Button,View} from 'react-native';
import {normalize} from './utils';
import CustomButton from './CustomButton';

const LargeGameModeButton = props => {
  const {
    text = 'Take Challenge',
    backgroundColor = '#C4C4C4',
    color = '#000000',
    marginTop = normalize(23),
    extraStyle = {},
    disabled = false,
  } = props;
  return (
    <View>
      <CustomButton
        style={[styles.buttonStyle, {backgroundColor, marginTop}, extraStyle]}
        {...props}>
        <Text style={[styles.buttonTextStyle, {color}]}>{text}</Text>
      </CustomButton>
    </View>
  );
};

export default LargeGameModeButton;

const styles = StyleSheet.create({
  buttonTextStyle: {
    fontSize: normalize(14),

    lineHeight: normalize(20),
    color: '#000000',
    textAlign: 'center',
  },
  buttonStyle: {
    borderRadius: normalize(8),
    backgroundColor: '#C4C4C4',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: normalize(18),
    marginHorizontal: normalize(16),
    marginBottom: normalize(21),
  },
});
