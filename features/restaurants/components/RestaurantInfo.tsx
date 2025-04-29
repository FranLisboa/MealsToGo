import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text as PaperText } from "react-native-paper";
import Restaurant from "../models/Restaurant";

interface RestaurantInfoProps {
  restaurant: Restaurant;
}

const RestaurantInfo: React.FC<RestaurantInfoProps> = ({ restaurant }) => {
  return (
    <Card elevation={5} style={styles.container}>
      <Card.Cover
        source={{
          uri: restaurant.photos.at(0),
        }}
      />
      <PaperText variant="titleLarge">Kermit</PaperText>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});
export default RestaurantInfo;
