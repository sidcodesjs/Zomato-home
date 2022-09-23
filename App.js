import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform, ScrollView } from "react-native";
import Catogories from "./components/Catogories";
import HomeScreen from "./screens/HomeScreen";
import Location from "./screens/Location";
import Images from "./screens/Images";
import Orders from "./screens/Orders";
import ItemComp from "./components/ItemComp";
import Eat from "./screens/Eat";
import Hotels from "./data/Hotels";
import Hotels1 from "./components/Hotels1";
import Develope from "./screens/Develope";

const data = Hotels;

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={{
          backgroundColor: "	#DCDCDC",
        }}
      >
        <Location />
        <HomeScreen />
        <Catogories />
        <Images />
        <Orders />
        <ItemComp />
        <Eat />

        {data.map((item) => (
          <Hotels1 restaurant={item} />
        ))}

        <Develope />
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  text: {
    color: "red",
    fontFamily: "",
  },
});
