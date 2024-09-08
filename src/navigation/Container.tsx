import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserListScreen from '../screens/UserListScreen';
import PostsListScreen from '../screens/PostsListScreen';

export type RootStackParamList = {
    UserList: undefined;
    PostsList: { userId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Container: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="UserList" >
                <Stack.Screen name="UserList" component={UserListScreen} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="PostsList" component={PostsListScreen} options={{
                    headerShown: false
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Container;
