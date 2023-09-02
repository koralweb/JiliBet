import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Menu from './Menu';
import {useRoute} from '@react-navigation/native';
import Header from './Header';
import BottomLine from './BottomLine';
import config from '../data/config';

const Wrapper = ({navigation, children}) => {
  const screenName = useState(useRoute().name)[0];
  const [menu, setMenu] = useState(useRoute().name === 'Home');

  return (
    <View style={styles.cont}>
      <Header setMenu={setMenu} />
      {menu && <Menu navigation={navigation} />}
      {children}
      {screenName !== 'Booking' && <BottomLine navigation={navigation} />}
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    position: 'relative',
    backgroundColor: '#fff',
    flex: 1,
    height: config.height,
  },
});

export default Wrapper;
