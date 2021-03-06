import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import ProjectsScreen from '../screens/Projects';
import ProjectDetailScreen from '../screens/ProjectDetail';
import UploadProjectScreen from '../screens/UploadProject';

const HomeStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Projects" component={ProjectsScreen} />
      <Stack.Screen name="ProjectDetail" component={ProjectDetailScreen} />
      <Stack.Screen name="UploadProject" component={UploadProjectScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
