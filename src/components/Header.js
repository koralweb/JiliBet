import React, {useEffect, useState} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useRoute} from '@react-navigation/native';
import RadiusBlock from './RadiusBlock';

const Header = ({setMenu}) => {
  const [mainColor, setMainColor] = useState(useRoute().name === 'Shop');
  const [color, setColor] = useState('#000');
  const [btnColor, setBtnColor] = useState('#fff');
  const [statusBarColor, setStatusBarColor] = useState('light-content');

  useEffect(() => {
    if (mainColor) {
      setColor('#fff');
      setBtnColor('#000');
      setStatusBarColor('dark-content');
    } else {
      setColor('#000');
      setBtnColor('#fff');
      setStatusBarColor('light-content');
    }
  }, [mainColor]);

  return (
    <View style={{...styles.cont, backgroundColor: color}}>
      <StatusBar barStyle={statusBarColor} />
      <TouchableOpacity onPress={() => setMenu(true)} style={styles.menuBtn}>
        <FontAwesomeIcon icon={'bars'} color={btnColor} size={25} />
      </TouchableOpacity>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <RadiusBlock />
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    paddingTop: 40,
  },
  menuBtn: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  logo: {
    width: 727 / 5,
    height: 277 / 5,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 10,
  },
});

export default Header;
