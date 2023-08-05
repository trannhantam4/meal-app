import { View, Text } from "react-native";
import React, { useContext } from "react";
import { MEALS } from "../data/dummy-data";
import { FavoriteContext } from "../store/context/favorite-content";
import { MealsList } from "../components/MealsList/MealsList";
export default function FavoriteScreen() {
  const favMealCtx = useContext(FavoriteContext);
  const favMeals = MEALS.filter((meal) => favMealCtx.ids.includes(meal.id));
  return <MealsList items={favMeals} />;
}
