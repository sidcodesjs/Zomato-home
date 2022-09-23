import React from "react";
import { Image, View, StyleSheet, Text, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
const Hotels1 = (props) => {
  const restaurant = props.restaurant;
  console.log(restaurant);

  return (
    <View
      style={{
        // backgroundColor: "#F0F0F0",
        borderWidth: 0.2,
        borderRadius: 10,
        margin: 10,

        borderColor: "white",

        // width: 500,
      }}
    >
      <ScrollView>
        <Image
          style={{
            elevation: 7,
            width: "90%",
            aspectRatio: 6 / 4,
            marginTop: 20,
            marginLeft: 24,
            padding: 20,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            flexDirection: "row",

            // padding: 30,
          }}
          source={{ uri: restaurant.featured_image }}
        />
      </ScrollView>
      <View
        style={{
          backgroundColor: "white",
          borderWidth: 0.5,
          //   borderBottomEndRadius: 10,
          //   borderBottomStartRadius: 10,
          elevation: 10,
          width: 353,
          borderColor: "white",
          marginLeft: 24,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ marginLeft: 28, fontSize: 18, padding: 3 }}>
          {restaurant.name}
          {"\n"}
          <Text
            style={{
              marginLeft: 28,
              fontWeight: "400",
              color: "grey",
              fontSize: 15,
            }}
          >
            {restaurant.cuisines}
            {"\n"}
            {"\n"}
            <Text style={{ marginTop: 20 }}>
              ₹{restaurant.cost_for_two} for two
            </Text>
          </Text>
        </Text>

        <Text
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginRight: 9,
            backgroundColor: "#30B700",
            padding: 4,
            borderRadius: 4,
            color: "white",
            fontWeight: "bold",
          }}
        >
          {restaurant.rating}
          <AntDesign name="star" size={13} color="white" />
        </Text>
      </View>
      <Text
        style={{
          borderColor: "grey",
          borderWidth: 1,
          height: 0.5,
          width: 350,
          marginLeft: 26,
          borderRadius: 10,
          //   alignItems: "center",
        }}
      />
      <Text
        style={{
          padding: 10,
          marginLeft: 25,
          backgroundColor: "white",
          width: 352,
          elevation: 10,
          borderWidth: 1,
          borderColor: "white",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,

          //   borderRadius: 10,
        }}
      >
        <SimpleLineIcons
          //   style={{ marginLeft: 20 }}
          name="graph"
          size={16}
          color="purple"
        />{" "}
        {restaurant.no_of_deliveries}+ order placed from here recently.🍲
      </Text>
    </View>
  );
};

export default Hotels1;

const styles = StyleSheet.create({});
