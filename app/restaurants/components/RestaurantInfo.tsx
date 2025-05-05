import React from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { View, Text } from "react-native";
import Restaurant from "../models/Restaurant";
import { fonts, fontWeights, fontSizes } from "../../../consts/fonts";
import StarIcon from "../../../assets/star";
import { SvgXml } from "react-native-svg";

interface RestaurantInfoProps {
  restaurant: Restaurant;
}

const RestaurantInfo: React.FC<RestaurantInfoProps> = ({ restaurant }) => {
  const ratingArray = Array.from(
    new Array(Math.floor(restaurant.rating ? restaurant.rating : 0))
  );
  return (
    <Card elevation={5} style={styles.container}>
      <Card.Cover
        source={{
          uri: restaurant.photos.at(0),
        }}
      />
      <Text style={styles.restaurantName}>{restaurant.name}</Text>
      <View style={{ flexDirection: "row", paddingVertical: 12 }}>
        {ratingArray.map((_, index) => (
          <SvgXml key={index} xml={StarIcon} width={24} height={24} />
        ))}
      </View>
      <Text style={styles.restaurantAddress}>{restaurant.addess}</Text>
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
    fontSize: fontSizes.body,
  },
  restaurantAddress: {
    fontFamily: fonts.body,
    fontSize: fontSizes.caption,
  },
});
export default RestaurantInfo;
