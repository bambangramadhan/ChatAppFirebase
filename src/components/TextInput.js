import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import { height, width } from '../utils/dimension';

const TextInputDefault = React.forwardRef((props, ref) => {

  const {
    value,
    label,
    onChangeText,
    secureTextEntry,
    nameIcon,
    sizeIcon,
    onPress,
    style,
    styleLable,
    iconStyle,
    containerStyle,
    ...textInputProps
  } = props;

  const [isFocused, setFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(secureTextEntry);

  const handleFocus = () => setFocus(true);
  const handleBlur = () => value.length === 0 ? setFocus(false) : setFocus(true);

  const labelStyle = {
    top: !isFocused && value.length === 0 ? height * 0.04 : height * 0,
    fontSize: !isFocused ? 13.5 : 16,
    color: !isFocused ? 'gray' : 'black'
  };

  const isIconExist = nameIcon && nameIcon !== '';
  const showIcon = showPassword === false && nameIcon === 'eye-with-line' ? 'eye' : nameIcon;

  const showText = () => {
    if (showPassword !== undefined) {
      setShowPassword(!showPassword);
    } else {
      onPress();
    }
  };

  return (
    <View style={[{
      alignSelf: 'center'
    }, containerStyle]}>
      <Text style={[labelStyle, styleLable]}>
        {label}
      </Text>
      <View>
        <TextInput
          style={[{
            width: width * 0.85,
            height: height * 0.08,
            borderBottomWidth: isFocused ? 2 : 1,
            borderBottomColor: 'purple'
          }, style]}
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={showPassword}
          {...textInputProps}
        />
        {isIconExist && (
          <Icon
            name={showIcon}
            size={sizeIcon}
            color={'gray'}
            style={[{
              position: 'absolute',
              bottom: 20,
              right: 0
            }, iconStyle]}
            onPress={showText}
          />
        )}
      </View>
    </View>
  )
});

export default TextInputDefault;