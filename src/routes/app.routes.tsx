import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { MyAdvertises } from "../screens/MyAdvertises";
import { House, Tag, SignOut } from 'phosphor-react-native';
import { VStack, useTheme } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductDetails } from "../screens/ProductDetails";
import { CreateAdvertise } from "../screens/CreateAdvertise";
import { LogOutModal } from "../components/LogOutModal";
import { MyProductDetails } from "../screens/MyProductDetails";
import { InterfaceType } from "../types/InterfaceType";

type AppRoutes = {
  HomeTab: undefined;
  MyAdvertiseTab: undefined;
  LogOutTab: undefined;
}

type HomeStack = {
  HomeScreen: undefined;
  AdvertiseDetailsScreen: undefined;
  CreateAdvertiseScreen: {
    editAdvertise: boolean;
  };
  MyProductDetailsScreen: {
    interfaceType: InterfaceType;
  };
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

export type HomeNavigatorRoutesProps = BottomTabNavigationProp<HomeStack>;

const NativeStack = createNativeStackNavigator<HomeStack>();

const Tab = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const { sizes, colors } = useTheme();

  const iconSize = sizes[6];

  function HomeStack() {
    return (
      <NativeStack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <NativeStack.Screen
          name='HomeScreen'
          component={Home}
        />
        <NativeStack.Screen
          name='AdvertiseDetailsScreen'
          component={ProductDetails}
        />
        <NativeStack.Screen
          name='CreateAdvertiseScreen'
          component={CreateAdvertise}
        />
        <NativeStack.Screen
          name='MyProductDetailsScreen'
          component={MyProductDetails}
        />
      </NativeStack.Navigator>
    );
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.gray[200],
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}

    >
      {/* TODO estilizar esses carinhas aq, e colocar navegação nas rotinhas */}
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => <House size={iconSize} color={color} />,
        }}
      />
      <Tab.Screen
        name="MyAdvertiseTab"
        component={MyAdvertises}
        options={{
          tabBarIcon: ({ color }) => <Tag size={iconSize} color={color} />,
        }}
      />
      <Tab.Screen
        name="LogOutTab"
        component={LogOutModal}
        options={{
          tabBarIcon: ({ focused }) => <SignOut size={iconSize} color={focused ? colors.red[600] : colors.red[400]} />,
        }}
      />
    </Tab.Navigator>
  );
}