import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

function MealItem({ mealsData, onPress }) {
  return (
    <View style={styles.outterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <Image
          source={{ uri: mealsData.item.imageUrl }}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{mealsData.item.title}</Text>
          <Text style={styles.text}>
            Complexity: {mealsData.item.complexity}
          </Text>
          <Text style={styles.text}>
            Duration: {mealsData.item.duration}mins
          </Text>
          <Text style={styles.text}>
            Affordability: {mealsData.item.affordability}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  outterContainer: {
    flex: 1,
    height: 150,
    marginVertical: 5,
    borderRadius: 10,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 3, height: 2 },
  },
  innerContainer: {
    flex: 1,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C7A793",
  },
  detailsContainer: {
    justifyContent: "space-evenly",
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: "#351401",
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
  },
  text: {
    color: "#F5E3D7",
  },
  pressed: {
    opacity: Platform.OS === "ios" ? 0.25 : 100,
  },
});
