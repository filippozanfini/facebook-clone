import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

import Header from "../components/Header";
import ProfileInfo from "../components/ProfileInfo";
import ProfileTab from "../components/ProfileTab";
import FriendsView from "../components/FriendsView";
import InfoView from "../components/InfoView";

const ProfileScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Header />
      <ScrollView
        style={{ width: "100%", height: "100%" }}
        contentContainerStyle={{
          width: "100%",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <ProfileInfo />
        <View style={styles.separator} />
        <ProfileTab />
        <InfoView />
        <FriendsView />
      </ScrollView>
      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  separator: {
    width: "100%",
    height: 8,
    backgroundColor: "#F2F3F6",
    marginVertical: 10,
  },
});

export default ProfileScreen;
