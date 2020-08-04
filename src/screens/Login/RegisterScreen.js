import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { GradientButton, TextInput } from '../../components';

const RegisterScreen = (props) => {
  const { navigation } = props;

  const inputEl2 = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {"Register to Chat"}
      </Text>

      <View style={{ marginVertical: 30 }}>
        <TextInput
          value={email}
          label={'Email'}
          onChangeText={(val) => setEmail(val)}
          sizeIcon={20}
          nameIcon={'mail'}
          onSubmitEditing={() => inputEl2.current.focus()}
        />
        <TextInput
          value={password}
          label={'Password'}
          onChangeText={(val) => setPassword(val)}
          secureTextEntry={true}
          sizeIcon={20}
          nameIcon={'eye-with-line'}
          containerStyle={{ paddingTop: 10 }}
          ref={inputEl2}
        />
      </View>

      <GradientButton
        text={'Sign Up'}
        colors={['gray', 'purple']}
      />

      <Icon
        name={'arrow-left'}
        size={25}
        color={'purple'}
        style={{ marginTop: 10 }}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  bottomText: {
    marginTop: 10,
    color: 'purple'
  }
});

export default RegisterScreen;