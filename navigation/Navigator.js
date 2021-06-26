import React from "react";

import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import ProfileScreen from "../screens/ProfileScreen";

import {
  Ionicons,
  Entypo,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="home-outline" size={30} color={tabInfo.tintColor} />
          );
        },
      },
    },
    Market: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Entypo name="shop" size={30} color={tabInfo.tintColor} />;
        },
      },
    },
    Groups: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-people-circle-outline"
              size={30}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Dating: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="heart-outline"
              size={30}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Notifications: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-notifications-outline"
              size={30}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    More: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <SimpleLineIcons name="menu" size={27} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "#1A77F2",
      showLabel: false,
      style: {
        backgroundColor: "white",
        height: 50,
        borderTopColor: "white",
      },
    },
  }
);

export default createAppContainer(TabNavigator);
