import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
//import SaticiProfil from './SaticiProfil';

export default class Anasayfa extends Component {
  state = {
    name: '',
    surname: '',
  };
  componentDidMount = async () => {
    const {
      data: {results},
    } = await axios.get('https://randomuser.me/api/');
    const {
      name: {first, last},
    } = results[0];

    this.setState({
      name: first,
      surname: last,
    });
  };

  render() {
    const {name, surname} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.cerceve}>
          <View style={styles.ustbanner}>
            <View style={styles.imageAndKullaniciad}>
              <Image
                style={styles.imageBack}
                source={require('./profilfoto.jpg')}
              />
              <Text style={styles.kullaniciAdi}>
                {name} {surname}
              </Text>
            </View>
            <View style={styles.ustbanner2}>
              <Image
                style={styles.imageYildiz}
                source={require('./addphoto.png')}
              />
              <Image
                style={styles.imageYildiz}
                source={require('./addphoto.png')}
              />
            </View>
            <TouchableOpacity>
              <Text style={styles.degerlendirme}> daha fazlası için -> </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  ustMenuGenel: {
    flexDirection: 'row',
    margin: 5,
  },
  ustMenu: {
    width: 150,
    height: 32,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#d5d5d5',
    borderWidth: 1,
  },
  ustbanner: {
    flexDirection: 'column',
    borderColor: '#c5c5c5',
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  imageAndKullaniciad: {
    padding: 5,
    flexDirection: 'row',
  },
  imageBack: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  ustbanner2: {
    flexDirection: 'row',
  },
  kullaniciAdi: {
    fontSize: 18,
    marginTop: 10,
  },
  imageYildiz: {
    width: 170,
    height: 170,
    padding: 10,
    margin: 10,
  },
  degerlendirme: {
    padding: 5,
    fontSize: 15,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  iconOzellik: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
