import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>

      {/* Container View */}
      <View style={styles.container}>
        {/* Card View */}
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.textColor}>Red</Text>
        </View>

        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.textColor}>Blue</Text>
        </View>

        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.textColor}>Green</Text>
        </View>

        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.textColor}>Red</Text>
        </View>

        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.textColor}>Blue</Text>
        </View>
      </View>
    </View>
  );
};

// Styles
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
    borderRadius: 10,
    margin: 4,
    padding: 10,
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

export default FlatCards;
