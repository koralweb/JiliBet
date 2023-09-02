import React from 'react';
import {Text, View} from 'react-native';
import Wrapper from '../components/Wrapper';

const HomeScreen = ({navigation}) => {
  return (
    <Wrapper navigation={navigation}>
      <View>
        <Text>Home Screen</Text>
      </View>
    </Wrapper>
  );
};

export default HomeScreen;
