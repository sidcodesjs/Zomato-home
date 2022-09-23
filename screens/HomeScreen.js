import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <View style={styles.view}>
      {/* <Text style={styles.location}>HOME</Text> */}

      <AntDesign style={styles.icon} name="search1" size={24} color="#E52850" />
      <TextInput
        style={styles.content}
        placeholder="Restaurant name or a  dish...  "
      ></TextInput>
      <Text style={styles.vertical}></Text>
      <Ionicons
        style={styles.mic}
        name="ios-mic-sharp"
        size={24}
        color="#E52850"
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  image1: {
    flexDirection: "row",
    alignItems: "center",
  },

  content: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 15,
  },

  view: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor:'#D8D8D8',
    padding: 4,
    margin: 10,
    borderRadius: 10,
    borderColor: "#D8D8D8",
    borderWidth: 1,
  },
  icon: {
    marginLeft: 15,
    marginTop: 10,
  },
  mic: {
    marginLeft: 10,
    marginTop: 8,
  },

  vertical: {
    borderWidth: 1,
    marginLeft: 60,
    marginTop: 7,
    borderColor: "#D8D8D8",
  },

  // location:{

  //     marginLeft: 30,
  //     fontWeight:'bold',
  //     fontSize: 15,
  //     color:'#E52850'

  // }
});
