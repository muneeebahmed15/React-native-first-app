import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import notifee, {AndroidImportance} from '@notifee/react-native';

// navigation

const Home = ({navigation}) => {
  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    if (Platform.OS == 'ios') {
      await notifee.requestPermission();
    }

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default2',
      name: 'Default Channel2',
      sound: 'default',
      importance: AndroidImportance.HIGH,
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,
        // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {productId: 86})}
      />

      <Button title="Display Notification" onPress={onDisplayNotification} />
    </View>
  );
};

export default Home;

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
