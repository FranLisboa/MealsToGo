import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.searchField}>search</Text>
        <Text style={styles.list}>list</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  searchField: {
    padding: 12,
    backgroundColor: "green",
  },
  list: {
    flex: 1,
    backgroundColor: "blue",
    padding: 12,
  },
});
