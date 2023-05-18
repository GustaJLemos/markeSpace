import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { MyAdvertises } from "../screens/MyAdvertises";

const Tab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Tab.Navigator>
      {/* TODO estilizar esses carinhas aq, e colocar navegação nas rotinhas */}
      <Tab.Screen name="HomeTab" component={Home} />
      <Tab.Screen name="MyAdvertiseTab" component={MyAdvertises} />
      <Tab.Screen name="LogOutTab" component={() => null} />
    </Tab.Navigator>
  );
}