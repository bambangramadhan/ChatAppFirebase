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



// '1. James Clear di Medium dalam artikel nya yang berjudul The Scientific Argument for Mastering One Thing at a Time'
// 'Rabu, 5 Agustus 2020 11:06 WIB'

//   `   Jadi, untuk mengimprove atau meningkatkan skill yang kita punya, caranya yaitu fokus dalam satu kegiatan dalam waktu itu,
//     jangan menggabungkan dua kegiatan dalam satu waktu.. Terus bagaimana sih cara nya agar kita bisa fokus hanya ke satu hal, itu bisa
//     diatasi dengan cara kita menuliskan plan kita, format plan nya harus, dimana akan dikerjakan, minimal mau berapa jam mengerjakannya,
//     jam berapa, hari apa, contoh: Belajar bahasa inggris, minimal 20 menit, di kosan hari kamis, 06 Agustus 2020 08:00.. 
//         Jika kita melakukan plan yang bisa membuat fokus terdapat kegiatan itu, maka dijamin 2x - 3x kita akan melakukannya dibanding hari2 biasanya.
//     Karena hal ini sudah dibuktikan oleh research dati british.
//         Jika kita melakukan sesuatu seperti itu, maka kemungkinan, setidaknya dalam waktu dua bulan, hal tersebut akan menempel di diri kita dan
//     menjadi kebiasaan kita sehari-hari
//         Kesimpulannya, jika kita ingin mengubah seluruh perilaku kita, maka janganlah rubah sekaligus, mulailah dengan melakukan satu kebiasaan
//     sampai kamu benar-benar menguasainya. Kesuksesan bukan tergantung dari suatu hal besar yang sangat berpengaruh terhadap kita, tetapi 
//     dari suatu hal kecil yang kita lakukan setiap hari nya, bukan pencapainya tetapi prosesnya itu yang membuat kita bisa sukses.
//     `
// '2. James Clear di Medium dalam artikel nya yang berjudul '
