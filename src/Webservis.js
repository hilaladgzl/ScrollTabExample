import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

export default class App extends Component {
  state = {
    name: '',
    surname: '',
    kategori: '',
  };
  componentDidMount() {
    axios
      .get('http://213.159.30.21/service/api/Urun/')
      .then(UrunOzellikleri => UrunOzellikleri.data[0])
      .then(UrunOzellikleri => {
        console.log(UrunOzellikleri);
        this.setState({
          name: UrunOzellikleri.update_at,
          surname: UrunOzellikleri.aciklama,
          kategori: UrunOzellikleri.stok,
        });
      });
  }
  render() {
    const {name, surname, kategori} = this.state;
    return (
      <View>
        <Text>
          son güncelleme tarihi: {name} {surname} {kategori}
        </Text>
        <Text>stok: {kategori}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
