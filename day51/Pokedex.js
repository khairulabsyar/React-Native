import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { getData } from "./api";
import { SafeAreaView } from "react-native-safe-area-context";
import { firstLetter } from "./function";

const WIDTH = Dimensions.get("window").height;

function Pokedex(props) {
  const [pokemons, setPokemon] = useState([]);

  const RenderPokemon = ({ pokemon }) => {
    const onPress = () => {
      props.navigation.navigate("PokemonDetail", { pokemon });
    };

    return (
      <Pressable
        onPress={onPress}
        style={[styles.pokemonView, { width: WIDTH * 0.2 }]}
      >
        <Text bold style={styles.textName}>
          {pokemon.name.toUpperCase()}
        </Text>
        <Image
          source={{
            uri: pokemon.image,
          }}
          style={{ width: 150, height: 150 }}
        />
        <View>
          {pokemon.types.map((type) => (
            <View style={styles.type} key={type.slot}>
              <Text>{firstLetter(type.type.name)}</Text>
            </View>
          ))}
        </View>
      </Pressable>
    );
  };

  const getPokemonList = async () => {
    const res = await getData();
    if (res?.status === 200) {
      setPokemon(res.data);
    }
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pokemons}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => {
          return <RenderPokemon pokemon={item} />;
        }}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

export default Pokedex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  list: {
    paddingVertical: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  textName: {
    color: "white",
    fontSize: 20,
  },
  pokemonView: {
    borderWidth: 1,
    borderColor: "red",
    height: 250,
    padding: 5,
    margin: 5,
    backgroundColor: "black",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  type: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    alignItems: "center",
    margin: 2,
  },
});
