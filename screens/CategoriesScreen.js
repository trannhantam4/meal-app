import { View, Text, FlatList } from "react-native";
import React from "react";
import CATEGORIES from "../data/dummy-data";
import CategoryGridFile from "../components/CategoryGridFile";
function renderCategoryItem(itemData) {
  return (
    <CategoryGridFile title={itemData.item.title} color={itemData.item.color} />
  );
}

export default function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
}
