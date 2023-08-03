import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealOverviewScreen from "./screens/MealOverviewScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealCategories"
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            option={{
              title: "All categories",
            }}
            name="MealCategories"
            component={CategoriesScreen}
          />
          <Stack.Screen name="MealOverview" component={MealOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
