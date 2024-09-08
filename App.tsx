import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserListScreen from './src/screens/UserListScreen';
import PostsListScreen from './src/screens/PostsListScreen';
import Container from './src/navigation/Container';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/store';

type RootStackParamList = {
  UserList: undefined;
  PostsList: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {

  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, [])

  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
};

export default App;
