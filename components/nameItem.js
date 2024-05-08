import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default NameItem = playerObject => {
  return (
    <TouchableOpacity
      style={styles.playersList}
      key={playerObject.id}
      onPress={playerObject.onClick.bind(this, playerObject.name)}>
      <Text android_ripple={{color: '#dddddd'}} style={styles.playerText}>
        {playerObject.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  playersList: {
    flexDirection: 'column',
    borderRadius: 8,
    backgroundColor: 'grey',
    margin: 8,
  },
  playerText: {
    color: 'white',
    padding: 10,
  },
});
