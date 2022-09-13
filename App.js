import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Button,
  Text,
  View,
} from 'react-native';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function MyPagesScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Mypages Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if(route.name === 'Home'){
              iconName = focused 
                ? 'home'
                : 'home';
            }else if(route.name === 'Mypages'){
              iconName = focused
                ? 'home'
                : 'home';
            }
            return <Icon name={iconName} size={size} color={color}/>;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarBadge: 3 }}/>    
        <Tab.Screen name="Mypages" component={MyPagesScreen}/>    
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;