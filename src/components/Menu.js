import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import config from '../data/config';
import screenList from '../screens/screenList';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Menu = ({navigation}) => {
  const renderMenuItems = () => {
    return screenList
      .filter(el => el.name !== 'ThankYou')
      .filter(el => el.name !== 'Cart')
      .map(screen => (
        <TouchableOpacity
          style={styles.item}
          key={screen.name}
          onPress={() => navigation.push(screen.name)}>
          <Text style={styles.itemText}>{screen.title}</Text>
        </TouchableOpacity>
      ));
  };

  return (
    <View style={styles.cont}>
      <View style={styles.ring}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.mainBlock}>
        {renderMenuItems()}
        <TouchableOpacity
          style={{...styles.item, width: 80}}
          onPress={() => navigation.push('Cart')}>
          <FontAwesomeIcon icon={'shopping-cart'} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: config.width,
    height: config.height,
    backgroundColor: '#fff',
    zIndex: 2,
  },
  ring: {
    position: 'relative',
    top: -400,
    left: (300 - config.width / 2) * -1,
    backgroundColor: '#000',
    width: 600,
    height: 600,
    borderRadius: 300,
  },
  logo: {
    width: 727 / 3,
    height: 277 / 3,
    marginTop: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 50,
  },
  mainBlock: {
    position: 'relative',
    top: -400,
    alignItems: 'center',
    paddingTop: 20,
  },
  item: {
    backgroundColor: '#ececec',
    width: 350,
    marginVertical: 15,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemText: {
    fontSize: 18,
    fontWeight: '700',
  },
});

export default Menu;
