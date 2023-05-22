import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { Box } from 'native-base';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type AuthRoutes = {
  SignInScreen: undefined;
  SignUpScreen: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const Stack = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name='SignInScreen'
        component={SignIn}
      />
      <Stack.Screen
        name='SignUpScreen'
        component={SignUp}
      />
    </Stack.Navigator>
  );
}