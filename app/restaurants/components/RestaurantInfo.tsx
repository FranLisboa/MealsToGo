import React from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { Text } from "react-native"
import Restaurant from "../models/Restaurant";
import { fonts, fontWeights, fontSizes } from "../../../consts/fonts"

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
      <Text style={styles.restaurantName}>
        {restaurant.name}
      </Text>
      <Text style={styles.restaurantAddress}>
        {restaurant.addess}
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  restaurantName: {
    paddingTop: 12,
    fontFamily: fonts.heading,
    fontSize: fontSizes.body
  },
  restaurantAddress: {
    fontFamily: fonts.body,
    fontSize: fontSizes.caption
  },
});
export default RestaurantInfo;
