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
      <PaperText style={styles.restaurantName} variant="titleLarge">
        {restaurant.name}
      </PaperText>
      <PaperText style={{ fontFamily: "Lato_400Regular" }} variant="titleLarge">
        {restaurant.name}
      </PaperText>
      <PaperText variant="titleLarge">
        {restaurant.name}
      </PaperText>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  restaurantName: {
    fontFamily: "Oswald_400Regular",
  },
});
export default RestaurantInfo;
