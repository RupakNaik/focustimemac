/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, Platform, StatusBar} from 'react-native';
import {Colors} from './src/utils/colors';

import {Focus} from './src/features/Focus';
import {Timer} from './src/features/Timer';
import {FocusHistory} from './src/features/FocusHistory';
import {spacing} from './src/utils/sizes';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={subject => {
            setHistory([...history, subject]);
          }}
          clearSubject={() => setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: Colors.darkBlue,
    // paddingHorizontal: spacing.lg,
  },
  screen: {
    flex: 1,
  },
  text: {
    color: Colors.white,
  },
});
