import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Counter = ({product}) => {
  const [value, setValue] = useState(product.count);

  const inc = () => {
    setValue(value + 1);
  };

  const dec = () => {
    if (value === 1) {
      return;
    }
    setValue(value - 1);
  };

  return (
    <View style={styles.cont}>
      <TouchableOpacity style={styles.operator} onPress={dec}>
        <Text style={styles.color}>-</Text>
      </TouchableOpacity>
      <Text style={{...styles.color, fontSize: 22}}>{value}</Text>
      <TouchableOpacity style={styles.operator} onPress={inc}>
        <Text style={styles.color}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    backgroundColor: '#FF9B02',
    width: 80,
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 20,
  },
  color: {
    color: '#fff',
    fontWeight: '700',
  },
  operator: {
    paddingHorizontal: 10,
  },
});

export default Counter;
