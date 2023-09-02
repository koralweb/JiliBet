import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const BottomLine = ({navigation}) => {
  return (
    <View style={styles.cont}>
      <TouchableOpacity onPress={() => navigation.push('Home')}>
        <FontAwesomeIcon icon={'home'} color={'grey'} size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Booking')}>
        <FontAwesomeIcon icon={'book'} color={'grey'} size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Broadcasts')}>
        <FontAwesomeIcon icon={'list-alt'} color={'grey'} size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Cart')}>
        <FontAwesomeIcon icon={'shopping-cart'} color={'grey'} size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    marginTop: 20,
    backgroundColor: '#ececec',
    height: 40,
    marginBottom: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

export default BottomLine;
