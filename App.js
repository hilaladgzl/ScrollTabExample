import React, {Component} from 'react';
import {StyleSheet, TextInput, View, Text, FlatList} from 'react-native';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Anasayfa from './src/Anasayfa';
import Duyuru from './src/Duyuru';
import Kampanya from './src/Kampanya';
import FlatListExample from './src/FlatListExample';
import Webservis from './src/Webservis';
import SaticiProfil from './src/SaticiProfil';

const ContactStack = createStackNavigator({
  Contacts: {
    screen: FlatListExample,
    navigationOptions: {
      title: 'Contacts',
    },
  },
  ContactDetail: {
    screen: SaticiProfil,
  },
});

const AppNavigator = createAppContainer({
  Anasayfa: Anasayfa,
  Satici: SaticiProfil,
  Kampanya: Kampanya,
  Duyuru: Duyuru,
  Webservis: Webservis,
  FlatListExample: ContactStack,
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="Search..." style={styles.searchInput} />
        <ScrollableTabView
          style={{marginTop: 8}}
          initialPage={0}
          //tabBarActiveTextColor="#009387"
          //tabBarInactiveTextColor="#808080"
          renderTabBar={() => <ScrollableTabBar />}>
          <Anasayfa tabLabel="Anasayfa" />
          <Kampanya tabLabel="Yemek" />
          <Webservis tabLabel="webservis" />
          <FlatListExample tabLabel="flat" navigation={this.props.navigation} />
          <Duyuru tabLabel="Dekorasyon & Tasarım" />
          <Text tabLabel="Bebek1"> Bebek</Text>
          <Text tabLabel="Bebek2"> Bebek</Text>
          <Text tabLabel="Bebek"> Bebek</Text>
        </ScrollableTabView>
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
  searchInput: {
    fontSize: 16,
    backgroundColor: '#fff',
    padding: 10,
    borderColor: '#d5d5d5',
    borderWidth: 1,
    borderRadius: 15,
    margin: 5,
  },
});
