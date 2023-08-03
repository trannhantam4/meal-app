import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
export default function MealOverviewScreen({ route, navigation }) {
  const catID = route.params.categoryID;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });
  const categoryTitle = CATEGORIES.find((category) => {
    category.id === catID;
  }).title;
  navigation.setOption({});
  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imgURL: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});
