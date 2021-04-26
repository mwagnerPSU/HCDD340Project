import * as React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatBotScreen from './App/Screens/ChatBotScreen';
import HomeScreen from './App/Screens/HomeScreen';
import HelpScreen from './App/Screens/HelpScreen';
//import Logo from './App/Components/Logo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { navigationRef } from './App/Navigation/Navigator';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScrn() {
  return(
    <HomeScreen />
  );
}

function ChatBotScrn() {
  return(
    <ChatBotScreen />
  );
}

function HelpScrn() {
  return(
    <HelpScreen />
  );
}

function Home(){
  return(
    <Tab.Navigator 
      initialRouteName="HomeScrn"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HelpScrn') {
            iconName = focused
              ? 'information-circle-outline'
              : 'information-circle';
          } else if (route.name === 'HomeScrn') {
            iconName = focused ? 'home-outline' : 'home';
          } else if (route.name === 'ChatBotScrn') {
            iconName = focused ? 'chatbubble-ellipses-outline' : 'chatbubble-ellipses';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#637461',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="HelpScrn"
        component={HelpScrn}
      />
      <Tab.Screen
        name="HomeScrn" 
        component={HomeScrn}
      />
      <Tab.Screen 
        name="ChatBotScrn"
        component={ChatBotScrn}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{ 
          title: "Caddy",
          headerStyle: {
            backgroundColor: '#BDD2B6',
          }
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7EF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
