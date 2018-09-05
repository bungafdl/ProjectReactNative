import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Judul from './Component/Judul';

export default class App extends React.Component {
  render() {
    return (
      <View style={StyleSheet.container}>
      <Judul/>
        <Text>Nama : Bunga Fadhillah</Text>
        <Text>Kelas : XI RPL 3</Text>
        <Text>Absen : 12</Text>

        <Image
        style={{width: 300, height: 300}}
        source={require('./aku.jpg')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
