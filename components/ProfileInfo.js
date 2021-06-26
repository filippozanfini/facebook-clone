import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

import { FRIENDS } from "../data/sample_data";

const ProfileInfo = (props) => {
  return (
    <View style={styles.profileInfoView}>
      <ImageBackground
        style={styles.profileCover}
        source={{
          uri: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        }}
        resizeMode="cover"
        imageStyle={{
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          height: 210,
        }}
      >
        <View style={styles.addPicBtn}>
          <Ionicons name="camera" size={20} />
        </View>
      </ImageBackground>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        }}
        style={styles.profilePic}
        imageStyle={{
          borderRadius: 100,
          borderWidth: 5,
          borderColor: "white",
        }}
      >
        <View style={styles.addProfilePicBtn}>
          <Ionicons name="camera" size={20} />
        </View>
      </ImageBackground>
      <Text style={{ fontSize: 23, fontWeight: "800", marginTop: 10 }}>
        Sarah Corruccini
      </Text>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>
        246 <Text style={{ color: "#777" }}>friends</Text>
      </Text>
      <View style={styles.friendsView}>
        {FRIENDS.map((friend) => {
          return (
            <Image
              source={{ uri: friend.image }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                marginHorizontal: 2,
              }}
            />
          );
        })}
      </View>
      <View style={styles.btnsContainer}>
        <TouchableOpacity style={styles.addStoryBtn} activeOpacity={0.8}>
          <Ionicons name="add-circle-sharp" color="white" size={26} />
          <Text
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: 18,
              marginLeft: 10,
            }}
          >
            Add Story
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moreBtn} activeOpacity={0.8}>
          <Feather name="more-horizontal" size={27} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileInfoView: {
    height: 500,
    width: "90%",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
  },
  profileCover: {
    width: "100%",
    height: 210,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  profilePic: {
    width: 170,
    height: 170,
    marginTop: -80,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  addPicBtn: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 50,
    marginBottom: 20,
    marginRight: 20,
  },
  addProfilePicBtn: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 50,
    marginBottom: 10,
    marginLeft: 20,
  },
  friendsView: {
    flexDirection: "row",
    marginTop: 10,
  },
  btnsContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 25,
  },
  addStoryBtn: {
    backgroundColor: "#1A77F2",
    width: "80%",
    height: 45,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 10,
  },
  moreBtn: {
    width: 45,
    height: 45,
    borderRadius: 7,
    backgroundColor: "#DEDDE1",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
});

export default ProfileInfo;
