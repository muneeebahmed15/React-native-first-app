import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

// navigation
import {useNavigation} from '@react-navigation/native';

const Details = ({route}) => {
  const {productId} = route.params;

  //second method for navigation
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Details: {productId}</Text>
      <Button
        title="Go to Home"
        //   onPress={() => navigation.navigate('Home')}
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Update Product Id"
        onPress={() => navigation.setParams({productId: productId + 2})}
      />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallText: {
    color: 'black',
  },
});
