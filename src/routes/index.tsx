import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Box, useTheme } from "native-base";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const nativeBaseTheme = useTheme();

  const theme = DefaultTheme;
  theme.colors.background = nativeBaseTheme.colors.gray[600];

  const userAuth = false;

  return (
    <Box flex={1} bg='gray.600'>
      <NavigationContainer theme={theme}>
        {userAuth ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </Box>
  );
}