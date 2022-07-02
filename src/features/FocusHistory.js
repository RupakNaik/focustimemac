import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {Colors} from '../utils/colors';
import {fontSizes, spacing} from '../utils/sizes';

export const FocusHistory = ({history}) => {
  if (!history || !history.length) {
    return null;
  }

  const renderItem = ({item}) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
  },
  item: {
    fontSize: fontSizes.md,
    color: Colors.white,
    paddingTop: spacing.sm,
  },
  title: {
    color: Colors.white,
    fontSize: fontSizes.lg,
  },
});
