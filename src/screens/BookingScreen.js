import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Wrapper from '../components/Wrapper';
import config from '../data/config';
import ButtonBlockBooking from '../components/ButtonBlockBooking';

const BookingScreen = ({navigation}) => {
  return (
    <Wrapper navigation={navigation}>
      <View style={styles.cont}>
        <Text style={styles.mainTitle}>Бронирование</Text>
        <View style={styles.mainBlock}>
          <TextInput placeholder={'Имя...'} style={styles.input} />
          <Text style={styles.dataText}>Данные</Text>
          <TextInput placeholder={'Номер телефона'} style={styles.input} />
          <TextInput placeholder={'Столик'} style={styles.input} />
          <TextInput placeholder={'Время'} style={styles.input} />
          <TextInput placeholder={'Дата'} style={styles.input} />
        </View>
        <ButtonBlockBooking navigation={navigation} />
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  ...config.styles,
  cont: {
    flex: 1,
  },
  mainBlock: {
    backgroundColor: '#ececec',
    marginHorizontal: 20,
    marginTop: 20,
    padding: 15,
    borderRadius: 25,
  },
  dataText: {
    color: 'grey',
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    height: 40,
    marginBottom: 15,
    paddingLeft: 20,
    borderRadius: 10,
  },
});

export default BookingScreen;
