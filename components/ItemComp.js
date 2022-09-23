import React from "react";
import { Image, View, Text, StyleSheet, ScrollView } from "react-native";
import { Octicons } from "@expo/vector-icons";
const ItemComp = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        borderWidth: 0,
        height: 120,
        paddingBottom: 6,
        borderRadius: 10,
        borderColor: "grey",
      }}
    >
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Image
          style={{
            //   justifyContent: "space-between",
            width: 75,
            height: 75,
            marginLeft: 20,
            marginTop: 15,
            borderRadius: 10,
          }}
          source={{
            uri: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGF2JTIwYmhhaml8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          }}
        />
        <Text style={{ marginTop: 20, marginLeft: 13 }}>
          Jain Bandhu Pa..{"\n"}
          <Octicons name="stopwatch" size={17} color="green" /> 10 Min...{"\n"}
          <Text style={{ color: "blue" }}>10% off upto $40</Text>
        </Text>

        <Image
          style={{
            //   justifyContent: "space-between",
            width: 75,
            height: 75,
            marginLeft: 20,
            marginTop: 15,
            borderRadius: 10,
          }}
          source={{
            uri: "https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
          }}
        />
        <Text style={{ marginTop: 20, marginLeft: 13 }}>
          Monginis{"\n"}
          <Octicons name="stopwatch" size={17} color="red" /> 80 Min...{"\n"}
          <Text style={{ color: "blue" }}>40% off upto $40</Text>
        </Text>

        <Image
          style={{
            //   justifyContent: "space-between",
            width: 75,
            height: 75,
            marginLeft: 20,
            marginTop: 15,
            borderRadius: 10,
          }}
          source={{
            uri: "https://images.unsplash.com/photo-1593701461250-d7b22dfd3a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z3VsYWIlMjBqYW11bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          }}
        />
        <Text style={{ marginTop: 20, marginLeft: 13 }}>
          Shri Ram Mithai...{"\n"}
          <Octicons name="stopwatch" size={17} color="orange" /> 35 Min...{"\n"}
          <Text style={{ color: "blue" }}>40% off upto $40</Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export default ItemComp;
