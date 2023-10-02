import React, { useRef } from "react";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
// Tabs
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { StatusBar } from "expo-status-bar";
// Screen
import About from "../../screens/About";
import Quotes from "../../screens/Quotes";
// Icons
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";

const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const NavBar = () => {
  const navigationRef = useRef();

  const routeNameRef = useRef();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      }
      onStateChange={async (state) => {}}
    >
      <StatusBar backgroundColor={COLORS.MAIN_WHITE} />
      <Tab.Navigator initialRouteName="About" shifting>
        <Tab.Screen
          name="О приложении"
          component={About}
          options={{
            tabBarIcon: ({ focused, color }) => {
              return (
                <AntDesign
                  name="infocirlceo"
                  size={24}
                  color={focused ? color : "black"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Котировки"
          component={Quotes}
          options={{
            tabBarIcon: ({ focused, color }) => {
              return (
                <AntDesign
                  name="linechart"
                  size={24}
                  color={focused ? color : "black"}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavBar;
