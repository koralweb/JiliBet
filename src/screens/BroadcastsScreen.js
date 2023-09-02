import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Wrapper from '../components/Wrapper';
import config from '../data/config';
import broadcastsList from '../data/translationList';

const BroadcastsScreen = ({navigation}) => {
  const renderGames = () => {
    return broadcastsList.map(game => (
      <View key={Math.random()}>
        <View style={styles.gameBlock}>
          <View style={styles.liga}>
            <Text style={{fontWeight: '700'}}>{game.liga}</Text>
          </View>
          <View style={{flexGrow: 1}}>
            <View style={styles.team}>
              <Text>{game.team1}</Text>
            </View>
            <View style={{...styles.team, backgroundColor: '#FFC000'}}>
              <Text>{game.team2}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.date}>
          {game.date}.08.2023 - {game.time}
        </Text>
      </View>
    ));
  };

  return (
    <Wrapper navigation={navigation}>
      <View style={styles.cont}>
        <Text style={styles.mainTitle}>Спортивные трансляции</Text>
        <ScrollView>{renderGames()}</ScrollView>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  ...config.styles,
  cont: {
    flex: 1,
  },
  gameBlock: {
    borderWidth: 1,
    borderColor: 'blue',
    marginHorizontal: 20,
    marginBottom: 10,
    flexDirection: 'row',
  },
  liga: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  team: {
    height: 40,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  date: {
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default BroadcastsScreen;
