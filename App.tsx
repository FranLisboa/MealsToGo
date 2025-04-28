import React from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Searchbar } from "react-native-paper";

export default function App() {
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
        <Text style={styles.list}>list</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

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
