import { useContext } from 'react';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Box, StatusBar, useTheme } from "native-base";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";
import { AuthContext } from "../contexts/auth";

export function Routes() {
  const nativeBaseTheme = useTheme();
  const { colors } = useTheme();
  const { userAuth } = useContext(AuthContext);

  const theme = DefaultTheme;
  theme.colors.background = nativeBaseTheme.colors.gray[600];

  return (
    <Box w='full' h='full'>
      <NavigationContainer theme={theme}>
        <StatusBar
          barStyle='dark-content'
          backgroundColor={colors.gray[600]}
          translucent
        />
        {userAuth ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </Box>
  );
}