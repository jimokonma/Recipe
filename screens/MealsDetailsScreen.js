import { useLayoutEffect } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import IconButton from "../components/ui/IconButton";

function MealsDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const headerButtonPressHandler = () => {
    console.log("pressed");
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={headerButtonPressHandler}
            icon="star"
            color="#fff"
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  const selectMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <ImageBackground
          source={{ uri: selectMeal.imageUrl }}
          style={styles.image}
        >
          <Text style={styles.headerText}>{selectMeal.title}</Text>
        </ImageBackground>
      </View>
      <View style={styles.detailsContainter}>
        <Text style={styles.sectionTitle}>
          Duration:{" "}
          <Text style={styles.sectionText}>{selectMeal.duration}</Text>
        </Text>
        <Text style={styles.sectionTitle}>
          Complexity:{" "}
          <Text style={styles.sectionText}>{selectMeal.complexity}</Text>
        </Text>
        <Text style={styles.sectionTitle}>
          Affordability:{" "}
          <Text style={styles.sectionText}>{selectMeal.affordability}</Text>
        </Text>
        <Text style={styles.sectionTitle}>
          Ingredients:{" "}
          <Text style={styles.sectionText}>
            {selectMeal.ingredients.join(", ")}
          </Text>
        </Text>
        <Text style={styles.sectionTitle}>
          Steps:{" "}
          <Text style={styles.sectionText}>
            {"\n - "}
            {selectMeal.steps.join("\n \n - ")}
          </Text>
        </Text>
      </View>
    </View>
  );
}

export default MealsDetailsScreen;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
  },
  headerContainer: {
    width: "95%",
    height: 200,
    borderRadius: 15,
    margin: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "rgba(82, 32, 6, 0.2)",
  },
  detailsContainter: {
    flex: 1,
    width: "95%",
    backgroundColor: "#69422C",
    padding: 10,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#351401",
  },
  sectionText: {
    fontWeight: "normal",
    color: "#fff",
  },
});
