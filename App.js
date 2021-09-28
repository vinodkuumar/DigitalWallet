import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';

import { SignUp,ContentLoader } from './screens';
import Tabs from './navigation/Tabs';
import GradeSwitchModal from './modals.js/gradeSwitchModal';
import userProfile from './components/gameMode/userProfile';
import TimerPopup from './modals.js/TimerPopup';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent"
  },
}

const Stack = createStackNavigator();


const App = () => {
  return(
    <NavigationContainer
      theme={theme}>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}
        initialRouteName={'TimerPopup'}>
          <Stack.Screen name="TimerPopup" component={TimerPopup} />
          <Stack.Screen name="UserProfile" component={userProfile} />
          <Stack.Screen name="showModal" component={GradeSwitchModal} />
          <Stack.Screen name="ContentLoader" component={ContentLoader} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Home" component={Tabs} />
          
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App;