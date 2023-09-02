import React from 'react';
import {StyleSheet, View} from 'react-native';

const RadiusBlock = () => {
  return <View style={styles.radiusBlock} />;
};

const styles = StyleSheet.create({
  radiusBlock: {
    backgroundColor: '#fff',
    width: '100%',
    height: 30,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 'auto',
  },
});

export default RadiusBlock;
