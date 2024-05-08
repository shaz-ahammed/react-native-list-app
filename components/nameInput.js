import {Button, StyleSheet, TextInput, View} from 'react-native';
import {useState} from 'react';

export default NameInput = ({addName}) => {
  const [player, setPlayer] = useState('');

  const addPlayer = () => {
    addName(player);
    setPlayer('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter player name"
        value={player}
        onChangeText={setPlayer}
      />
      <Button title="Add name!" onPress={addPlayer} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '60%',
    padding: 8,
  },
});
