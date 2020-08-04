import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { width, height } from '../utils/dimension';

const GradientButton = (props) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={props.colors}
      style={[styles.linearGradient, props.style]}
    >
      <TouchableOpacity
        style={styles.buttonWrapper}
        onPress={props.onPress}
      >
        <Text style={styles.buttonText}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  )
};

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 20,
    width: width * 0.4,
    height: height * 0.06,
    justifyContent: 'center'
  },
  buttonWrapper: {

  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  }
});

export default GradientButton;