import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const ProfileTab = (props) => {
  const [tabSelected, setTabSelected] = useState("post");

  return (
    <View style={styles.profileTab}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginHorizontal: 12, marginTop: 10 }}
      >
        <TouchableOpacity
          style={{
            ...styles.tapBtn,
            backgroundColor: tabSelected === "post" ? "#E7F3FF" : "white",
          }}
          onPress={() => setTabSelected("post")}
        >
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              color: tabSelected === "post" ? "#1A77F2" : "black",
            }}
          >
            Posts
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.tapBtn,
            backgroundColor: tabSelected === "about" ? "#E7F3FF" : "white",
          }}
          onPress={() => setTabSelected("about")}
        >
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              color: tabSelected === "about" ? "#1A77F2" : "black",
            }}
          >
            About
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.tapBtn,
            backgroundColor: tabSelected === "photos" ? "#E7F3FF" : "white",
          }}
          onPress={() => setTabSelected("photos")}
        >
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              color: tabSelected === "photos" ? "#1A77F2" : "black",
            }}
          >
            Photos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.tapBtn,
            backgroundColor: tabSelected === "mentions" ? "#E7F3FF" : "white",
          }}
          onPress={() => setTabSelected("mentions")}
        >
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              color: tabSelected === "mentions" ? "#1A77F2" : "black",
            }}
          >
            Mentions
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  profileTab: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    height: 80,
  },
  tapBtn: {
    borderRadius: 20,
    height: 40,
    width: 80,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileTab;
