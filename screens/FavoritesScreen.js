import { useContext } from "react";
import { Text } from "react-native";
import { FavoriteContext } from "../store/context/FavoriteContext";

function FavoritesScreen(props) {
  const favContext = useContext(FavoriteContext);

  return <Text>Favorites Screen</Text>;
}

export default FavoritesScreen;
