import { View, Text, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridFile from "../components/CategoryGridFile";

export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealOverview", { categoryID: itemData.item.id });
    }
    return (
      <CategoryGridFile
        onPress={pressHandler}
        title={itemData.item.title}
        color={itemData.item.color}
        navigation={navigation}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
