import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.cardElevated, styles.cardOne]}>
          <Text style={styles.textColor}>Tap</Text>
        </View>

        <View style={[styles.card, styles.cardElevated, styles.cardTwo]}>
          <Text style={styles.textColor}>ME</Text>
        </View>

        <View style={[styles.card, styles.cardElevated, styles.cardThree]}>
          <Text style={styles.textColor}>To</Text>
        </View>

        <View style={[styles.card, styles.cardElevated, styles.cardOne]}>
          <Text style={styles.textColor}>SCROLL</Text>
        </View>

        <View style={[styles.card, styles.cardElevated, styles.cardTwo]}>
          <Text style={styles.textColor}>MORE</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    backgroundColor: 'yellow',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardElevated: {
    backgroundColor: 'purple',
    elevation: 8,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowColor: 'black',
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'blue',
  },
  cardThree: {
    backgroundColor: 'green',
  },
  textColor: {
    color: 'white',
  },
});
