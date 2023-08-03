import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import React from "react";

export default function MealItem({
  title,
  imgURL,
  duration,
  complexity,
  affordability,
}) {
  return (
    <View style={styles.container}>
      <Pressable android_ripple={{ color: "#ccc" }}>
        <View>
          <Image source={{ uri: imgURL }} style={styles.image}></Image>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailsItem}>Duration: {duration}m</Text>
          <Text style={styles.detailsItem}>
            Complexity: {complexity.toUpperCase()}
          </Text>
          <Text style={styles.detailsItem}>Price: {affordability}</Text>
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,

    elevation: 8,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    margin: 8,
  },
  details: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 8,
  },
  detailsItem: {
    marginHorizontal: 8,
    fontSize: 12,
  },
});
