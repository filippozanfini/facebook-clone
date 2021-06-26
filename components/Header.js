import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back"
          size={32}
          style={{ marginHorizontal: 20 }}
        />
        <Text style={styles.profileName}>Sarah Corrucini</Text>
        <View style={styles.actionView}>
          <MaterialIcons
            name="mode-edit"
            size={27}
            style={{ marginRight: 15 }}
          />
          <FontAwesome name="search" size={24} />
        </View>
      </View>
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
    marginTop: 50,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  actionView: {
    flexDirection: "row",
    marginRight: 20,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "800",
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#D5D5D5",
    marginTop: 20,
  },
});

export default Header;
