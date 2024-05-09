import {View, Text, Linking, StyleSheet, Image} from 'react-native';
import React from 'react';

const ActionCard = () => {
  const PracticingLinking = websiteLink => {
    Linking.openURL(websiteLink);
  };

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>

      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in JavaScript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://via.placeholder.com/300x200?text=Placeholder+Image',
          }}
          style={styles.cardImage}
        />
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {},
  card: {},
  elevatedCard: {},
  headingContainer: {},
  cardImage: {
    height: 100,
  },
});
