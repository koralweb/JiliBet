// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screenList from './src/screens/screenList';
import {
  faArrowLeft,
  faBars,
  faBook,
  faHome,
  faListAlt,
  faPencilSquare,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';

library.add(
  faShoppingCart,
  faBars,
  faHome,
  faArrowLeft,
  faPencilSquare,
  faBook,
  faListAlt,
);

const Stack = createNativeStackNavigator();

function App() {
  const renderScreens = () => {
    return screenList.map(screen => (
      <Stack.Screen
        name={screen.name}
        component={screen.component}
        key={screen.name}
        options={{headerShown: false}}
      />
    ));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>{renderScreens()}</Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
