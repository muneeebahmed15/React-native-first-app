import 'react-native-gesture-handler';

import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from '../components/FlatCards';
import ElevatedCards from '../components/ElevatedCards';
import FancyCards from '../components/FancyCards';
import ActionCard from '../components/ActionCard';

import Icon from 'react-native-vector-icons/FontAwesome';

//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

//screens
import Home from './screen/Home';
import Details from './screen/Details';
import PasswordGenerator from './screen/PasswordGenerator';

// const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen
          name="Details"
          initialParams={{productId: 100}}
          component={Details}
        />
        <Drawer.Screen
          name="Password Generator"
          component={PasswordGenerator}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

// <NavigationContainer>
//   <Tab.Navigator
//     initialRouteName="Home"
//     screenOptions={({route}) => ({
//       tabBarIcon: ({focused, color, size}) => {
//         let iconName;
//         let rn = route.name;

//         if (rn === 'Home') {
//           iconName = focused ? 'home' : 'home-outline';
//         } else if (rn === 'Details') {
//           iconName = focused ? 'list' : 'list-outline';
//         } else if (rn === 'Password Generator') {
//           iconName = focused ? 'list' : 'list-outline';
//         }
//         return <Icon name={iconName} size={size} color={'blue'} />;
//       },
//     })}>
//     <Tab.Screen
//       name="Home"
//       component={Home}
//       options={{title: 'Trending Products'}}
//     />

//     <Tab.Screen
//       name="Details"
//       component={Details}
//       initialParams={{productId: 100}}
//       options={{title: 'Product Details'}}
//     />

//     <Tab.Screen
//       name="Password Generator"
//       component={PasswordGenerator}
//       options={{title: 'Password Generator'}}
//     />
//   </Tab.Navigator>
// </NavigationContainer>
