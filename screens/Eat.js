import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
const Eat = () => {
  return (
    <View>
      <Text style={styles.love}>Eat what makes you happy.</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{}}>
          <Text style={styles.love}></Text>

          <Image
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              marginLeft: 28,
              marginTop: 12,
            }}
            source={{
              uri: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFzdHJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            }}
          />
          <Text
            style={{
              marginLeft: 39,
              marginTop: 10,
              color: "grey",
              fontWeight: "600",
            }}
          >
            Pasrty
          </Text>
        </View>
        <View style={{}}>
          <Text style={styles.love}></Text>

          <Image
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              marginLeft: 28,
              marginTop: 12,
            }}
            source={{
              uri: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            }}
          />
          <Text
            style={{
              marginLeft: 39,
              marginTop: 10,
              color: "grey",
              fontWeight: "600",
            }}
          >
            Burger
          </Text>
        </View>

        <View style={{}}>
          <Text style={styles.love}></Text>

          <Image
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              marginLeft: 28,
              marginTop: 12,
            }}
            source={{
              uri: "https://images.unsplash.com/photo-1571066811602-716837d681de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            }}
          />
          <Text
            style={{
              marginLeft: 39,
              marginTop: 10,
              color: "grey",
              fontWeight: "600",
            }}
          >
            Pizza
          </Text>
        </View>
        <Text style={styles.love}></Text>

        <View style={{}}>
          <Text style={styles.love}></Text>

          <Image
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              marginLeft: 20,
              marginTop: 12,
            }}
            source={{
              uri: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FsYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            }}
          />
          <Text
            style={{
              fontWeight: "600",
              marginLeft: 39,
              marginTop: 10,
              color: "grey",
            }}
          >
            Salad
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Eat;

const styles = StyleSheet.create({
  love: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 17,
  },
});
