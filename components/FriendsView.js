import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native";
import { FRIENDS } from "../data/sample_data";

const FriendsView = (props) => {
  const renderFriends = (itemData) => {
    return (
      <TouchableOpacity style={styles.friendCard}>
        <Image style={styles.friendPic} source={{ uri: itemData.item.image }} />
        <Text style={styles.friendTitle}>{itemData.item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.friendsView}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "95%",
          marginHorizontal: 12,
        }}
      >
        <View>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Friends</Text>
          <Text style={{ fontSize: 18, color: "#777" }}>246 friends</Text>
        </View>
        <Button title="Find Friends" />
      </View>
      <FlatList
        data={FRIENDS}
        renderItem={renderFriends}
        numColumns={3}
        key={(itemData) => itemData.item.name}
        style={{ width: "100%", marginTop: 10 }}
        nestedScrollEnabled
      />
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  friendsView: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  friendCard: {
    backgroundColor: "white",
    width: 110,
    height: 200,
    borderRadius: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "visible",
    marginHorizontal: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  friendPic: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  friendTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    width: "100%",
    marginLeft: 10,
  },
  separator: {
    width: "90%",
    height: 1,
    backgroundColor: "#EBEDEE",
    marginTop: 20,
  },
});

export default FriendsView;
