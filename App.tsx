import {useState} from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import NameItem from './components/nameItem';
import NameInput from './components/nameInput';

const playerList = [
  'Emily Johnson',
  'Daniel Martinez',
  'Olivia Brown',
  'Ethan Davis',
  'Sophia Rodriguez',
  'Michael Wilson',
  'Ava Taylor',
  'William Anderson',
  'Isabella Thomas',
  'Alexander Jackson',
  'Mia White',
  'Benjamin Harris',
  'Charlotte Thompson',
  'James Moore',
  'Amelia Lewis',
  'Matthew Lee',
  'Harper Walker',
  'Jacob Hall',
  'Abigail Clark',
  'Samuel Wright',
];

export default () => {
  const [playerNames, setPlayerNames] = useState(playerList);

  const AddPlayer = (player: string) => {
    setPlayerNames(currentPlayerNames => [...currentPlayerNames, player]);
  };
  const RemovePlayer = (name: string) => {
    const newPlayerList = playerNames.filter(player => player != name);
    setPlayerNames(newPlayerList);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={playerNames.length <= 0 ? styles.image : styles.imageWithText}
          source={require('./assets/images/player_logo.png')}
        />
      </View>

      <NameInput addName={AddPlayer} />

      <View style={styles.playerList}>
        <FlatList
          data={playerNames}
          renderItem={itemData => {
            return (
              <NameItem
                name={itemData.item}
                id={itemData.index}
                onClick={RemovePlayer}
              />
            );
          }}
          alwaysBounceVertical={false}></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    margin: 20,
    flex: 1,
  },
  playerList: {
    flex: 5,
  },
  logo: {
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image: {
    width: 150,
    height: 180,
  },
  imageWithText: {
    width: 100,
    height: 100,
  },
});
