import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const FancyCards = ({from}) => {
  return (
    <View>
      {from !== 'test' && (
        <Text style={styles.headingText}>Trending Places</Text>
      )}

      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://via.placeholder.com/300x200?text=Placeholder+Image',
          }}
          style={styles.cardImage}
        />

        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>ABC</Text>
          <Text style={styles.cardLabel}>DEF</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magni,
            in quaerat eos tenetur aliquam saepe sit quasi itaque! Voluptas
            minus dolores illo, quia praesentium impedit atque nulla adipisci
            debitis?
          </Text>
          <Text style={styles.cardFooter}>XYZ</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 325,
    height: 320,
    borderRadius: 16,
    marginVertical: 12, // Adjust top and bottom margin
    marginHorizontal: 16, // Adjust left and right margin
  },

  cardElevated: {
    backgroundColor: 'aqua',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 150,
    marginBottom: 10,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    marginBottom: 12,
  },
  cardFooter: {
    fontSize: 14,
  },
});
