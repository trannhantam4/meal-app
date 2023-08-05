import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useEffect, useLayoutEffect } from "react";
import MealItem from "../components/MealsList/MealItem";
import { MealsList } from "../components/MealsList/MealsList";
export default function MealOverviewScreen({ route, navigation }) {
  const catID = route.params.categoryID;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catID
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [catID, navigation]);

  return <MealsList items={displayedMeals} />;
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});
