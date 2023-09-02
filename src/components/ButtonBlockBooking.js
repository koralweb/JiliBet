import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {observer} from 'mobx-react-lite';

const ButtonBlock = ({navigation, id}) => {
  const renderBtn = () => {
    return (
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.push('ThankYou')}>
        <Text style={styles.btnText}>Забронировать</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.cont}>
      <TouchableOpacity
        style={styles.goToCartBtn}
        onPress={() => navigation.push('Cart')}>
        <FontAwesomeIcon icon={'shopping-cart'} />
      </TouchableOpacity>
      {renderBtn()}
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    marginTop: 'auto',
    marginBottom: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  goToCartBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ececec',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  btn: {
    backgroundColor: '#F79E1B',
    flexGrow: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  btnText: {
    color: '#fff',
    fontWeight: '700',
  },
});

export default observer(ButtonBlock);
