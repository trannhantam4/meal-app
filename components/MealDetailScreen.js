import { View, Text, Image } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
export default function MealDetailScreen({ route }) {
  const id = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === id);
  return (
    <View>
      <Image
        source={{ uri: selectedMeal.imageUrl }}
        style={{ width: "100%", height: 200 }}
      ></Image>
      <Text>{selectedMeal.title}</Text>
    </View>
  );
}
