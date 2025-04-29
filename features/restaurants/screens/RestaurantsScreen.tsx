import React from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/RestaurantInfo";
import Restaurant from "../models/Restaurant";
import { FlatList } from "react-native";

const demoRestaurantList = [
  new Restaurant({ name: "Mc Donalds" }),
  new Restaurant({ name: "Mc Donalds" }),
  new Restaurant({ name: "Mc Donalds" }),
];
const RestaurantsScreen: React.FC<{}> = ({}) => {
  const [searchText, setSearchText] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Searchbar
          style={styles.searchField}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
        />
        <View style={styles.list}>
          <RestaurantInfo
            restaurant={
              new Restaurant({
                name: "Kermit",
                photos: [
                  "https://www.shutterstock.com/shutterstock/photos/2508403429/display_1500/stock-photo-kermit-the-frog-on-an-airport-2508403429.jpg",
                ],
              })
            }
          />
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchField: {
    margin: 12,
  },
  list: {
    flex: 1,
    backgroundColor: "blue",
    padding: 12,
  },
});

export default RestaurantsScreen;
