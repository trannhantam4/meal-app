import { View, Text } from "react-native";
import React, { useContext } from "react";
import { MEALS } from "../data/dummy-data";
// import { FavoriteContext } from "../store/context/favorite-content";
import { MealsList } from "../components/MealsList/MealsList";
import { useSelector } from "react-redux";
export default function FavoriteScreen() {
  // const favMealCtx = useContext(FavoriteContext);
  const favMealIds = useSelector((state) => state.favoriteMeals.ids);
  const favMeals = MEALS.filter((meal) => favMealIds.includes(meal.id));
  return <MealsList items={favMeals} />;
}
