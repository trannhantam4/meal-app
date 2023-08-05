import { View, Text, Image } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import { Ionicons } from "@expo/vector-icons";
import { FavoriteContext } from "../store/context/favorite-content";
export default function MealDetailScreen({ route, navigation }) {
  const favMealsCtx = useContext(FavoriteContext);
  const id = route.params.mealId;

  const mealIsFav = favMealsCtx.ids.includes(id);
  const selectedMeal = MEALS.find((meal) => meal.id === id);

  function changeFavHandler() {
    if (mealIsFav) {
      favMealsCtx.removeFavorite(id);
    } else {
      favMealsCtx.addFavorite(id);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Ionicons
            onPress={changeFavHandler}
            name="heart"
            color={mealIsFav ? "red" : "white"}
            size={24}
          ></Ionicons>
        );
      },
    });
  });
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
