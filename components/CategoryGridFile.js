import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  Platform,
} from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");
export default function CategoryGridFile({
  onPress,
  title,
  color,
  navigation,
}) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={[styles.innerContatiner, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: height * 0.25,

    borderRadius: 8,
    elevation: 4,
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContatiner: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: height * 0.03,
  },
  buttonPressed: {
    flex: 1,
    opacity: 0.5,
  },
});
