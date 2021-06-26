import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const InfoView = (props) => {
  return (
    <View style={styles.infoContainer}>
      <Text style={{ fontSize: 25, fontWeight: "bold", marginBottom: 10 }}>
        Details
      </Text>
      <View style={styles.infoView}>
        <Ionicons name="home" color="#8A8E91" size={25} />
        <Text style={{ fontSize: 18, marginLeft: 10 }}>
          Lives in London,{" "}
          <Text style={{ fontWeight: "bold" }}>United Kingdom</Text>
        </Text>
      </View>
      <View style={styles.infoView}>
        <FontAwesome name="graduation-cap" color="#8A8E91" size={25} />
        <Text style={{ fontSize: 18, marginLeft: 10 }}>
          Studies at{" "}
          <Text style={{ fontWeight: "bold" }}>Harvard University</Text>
        </Text>
      </View>
      <View style={styles.infoView}>
        <Ionicons name="logo-instagram" color="#8A8E91" size={27} />
        <Text style={{ fontSize: 18, marginLeft: 10 }}>sarahcorrucini</Text>
      </View>
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: 30,
  },
  infoView: {
    flexDirection: "row",
    width: "100%",
    height: 30,
    marginVertical: 10,
    alignItems: "center",
  },
  separator: {
    width: "90%",
    height: 1,
    backgroundColor: "#EBEDEE",
    marginTop: 20,
  },
});

export default InfoView;
