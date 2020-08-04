import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { GradientButton, TextInput } from '../../components';

const LoginScreen = (props) => {
  const { navigation } = props;

  const inputEl2 = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {"Welcome to Chat App"}
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
        text={'Login'}
        colors={['gray', 'purple']}
      />

      <Text
        style={styles.bottomText}
        onPress={() => navigation.navigate('Signup')}
      >
        {"New user? Join here"}
      </Text>
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

export default LoginScreen;