import 'react-native-gesture-handler';
import React, {Component} from 'react';
//import Icon from 'react-native-vector-icons/FontAwesome';
// import Stars from 'react-native-stars';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
//import Stars from 'react-native-stars';

export default class SaticiProfil extends Component {
  static navigationOptions = ({navigation}) => {
    const user = navigation.getParam('user');

    return {
      title: `${user.name.first} ${user.name.last}`,
    };
  }; // değişiklik denemesi

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cerceve}>
          <View style={styles.ustbanner}>
            <Image
              style={styles.imageBack}
              source={require('./profilfoto.jpg')}
            />
            <View style={styles.ustbanner2}>
              <Text style={styles.kullaniciAdi}>Kullanıcı Adı</Text>
              {/*<Stars*/}
              {/*  half={true}*/}
              {/*  default={2.5}*/}
              {/*  update={val => {*/}
              {/*    this.setState({stars: val});*/}
              {/*  }}*/}
              {/*  spacing={4}*/}
              {/*  starSize={18}*/}
              {/*  count={5}*/}
              {/*  fullStar={require('../assets/starFilled.png')}*/}
              {/*  emptyStar={require('../assets/starEmpty.png')}*/}
              {/*  halfStar={require('../assets/starHalf.png')}*/}
              {/*/>*/}
              {/*<Stars*/}
              {/*  default={2}*/}
              {/*  count={5}*/}
              {/*  half={true}*/}
              {/*  starSize={99}*/}
              {/*  fullStar={<Icon name={'star'} style={[styles.myStarStyle]} />}*/}
              {/*  emptyStar={*/}
              {/*    <Icon*/}
              {/*      name={'star-outline'}*/}
              {/*      style={[styles.myStarStyle, styles.myEmptyStarStyle]}*/}
              {/*    />*/}
              {/*  }*/}
              {/*  halfStar={*/}
              {/*    <Icon name={'star-half'} style={[styles.myStarStyle]} />*/}
              {/*  }*/}
              {/*/>*/}
              {/*<Image*/}
              {/*  style={styles.imageYildiz}*/}
              {/*  source={require('../assets/yildiz.jpg')}*/}
              {/*/>*/}
            </View>
            <Text style={styles.degerlendirme}> Değerlendirme></Text>
          </View>
        </View>
        <View style={styles.buttonGenel}>
          <TouchableOpacity style={[styles.box, styles.button1]}>
            <View style={styles.iconOzellik}>
              {/*<Icon name="list" size={30} color="#a5a5a5" />*/}
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.box, styles.button1]}>
            <View style={styles.iconOzellik}>
              {/*<Icon name="list" size={30} color="#a5a5a5" />*/}
            </View>
          </TouchableOpacity>
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
  imageBack: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 5,
  },
  ustbanner: {
    flexDirection: 'row',
  },
  ustbanner2: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  kullaniciAdi: {
    fontSize: 18,
    marginTop: 10,
  },
  imageYildiz: {
    width: 110,
    height: 15,
    marginTop: 10,
  },
  degerlendirme: {
    marginTop: 45,
    fontSize: 15,
  },
  buttonGenel: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 30,
    backgroundColor: '#e5e5e5',
    borderRadius: 7,
  },
  cerceve: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 10,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3,
  },
  iconOzellik: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  // myStarStyle: {
  //   color: 'yellow',
  //   backgroundColor: 'transparent',
  //   textShadowColor: 'black',
  //   textShadowOffset: {width: 1, height: 1},
  //   textShadowRadius: 2,
  //   width: 15,
  //   //height: 90,
  // },
  // myEmptyStarStyle: {
  //   color: 'white',
  //   width: 15,
  // },
});
