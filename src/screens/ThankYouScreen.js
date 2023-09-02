import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Wrapper from '../components/Wrapper';
import config from '../data/config';

const HomeScreen = ({navigation}) => {
  return (
    <Wrapper navigation={navigation}>
      <View style={styles.cont}>
        <Text style={styles.mainTitle}>Благодарим за заказ!</Text>
        <Image
          source={require('../assets/addedIcon.png')}
          style={styles.addedIcon}
        />
        <Text style={styles.addedTitle}>
          Мы свяжемся с вами в ближайшее время
        </Text>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  ...config.styles,
  cont: {
    flex: 1,
  },
  addedIcon: {
    width: 150,
    height: 150,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  addedTitle: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
