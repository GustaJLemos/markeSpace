import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';

const Stack = createNativeStackNavigator();

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