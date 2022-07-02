import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Colors} from '../utils/colors';
import {RoundedButton} from '../components/RoundedButton';
import {fontSizes, spacing} from '../utils/sizes';

export const Focus = props => {
  const [subject, setSubject] = useState(null);
  console.log('Text input : ', subject);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like o focus on"
          Type="outlined"
          onChangeText={setSubject}
        />
        <View style={styles.buttonContainer}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => props.addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  textInput: {
    flex: 1,
    marginRight: spacing.md,
  },
  text: {
    color: Colors.white,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: spacing.lg,
  },
  buttonContainer: {
    justifyContent: 'center',
  },
});
