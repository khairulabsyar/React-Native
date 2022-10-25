import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { firstLetter } from "./function";
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

function PokemonDetail(props) {
  const pokemon = props.route.params.pokemon;

  const getBackgroundColor = (type) => {
    switch (type) {
      case "normal":
        return "#A8A877";
      case "fighting":
        return "#C03028";
      case "flying":
        return "#A890F0";
      case "poison":
        return "#9F409F";
      case "ground":
        return "#E0C068";
      case "rock":
        return "#B8A038";
      case "bug":
        return "#A8B720";
      case "ghost":
        return "#705898";
      case "steel":
        return "#B8B8D0";
      case "water":
        return "#6790F0";
      case "fire":
        return "#EF8030";
      case "grass":
        return "#78C84F";
      case "electric":
        return "#F8CF30";
      case "physic":
        return "#F85787";
      case "ice":
        return "#98D8D8";
      case "dragon":
        return "#7038F8";
      case "dark":
        return "#705848";
      case "fairy":
        return "#FF9BE0";
      case "unknown":
        return "yellow";
      case "shadow":
        return "#1F203E";
      default:
        return "white";
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: "white" }]}>
      <LinearGradient
        colors={[
          getBackgroundColor(pokemon?.types[0].type.name),
          getBackgroundColor(pokemon?.types[1]?.type.name),
        ]}
        style={styles.background}
      >
        <Text style={styles.textName}>{pokemon?.name.toUpperCase()}</Text>
        <Image
          source={{ uri: pokemon.image }}
          style={{ width: WIDTH, height: HEIGHT * 0.5, resizeMode: "contain" }}
        />
        <View style={{ flexDirection: "row" }}>
          {pokemon.types.map((type) => (
            <View
              style={[
                {
                  backgroundColor: getBackgroundColor(type.type.name),
                },
                styles.type,
              ]}
              key={type.slot}
            >
              <Text>{firstLetter(type.type.name)}</Text>
            </View>
          ))}
        </View>
      </LinearGradient>
    </View>
  );
}

export default PokemonDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  background: {
    width: "100%",
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
  },
  type: {
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  textName: {
    color: "black",
    fontSize: 30,
  },
});
