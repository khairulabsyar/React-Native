import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Animated,
} from "react-native";
import { firstLetter } from "../function";
import { getData, Pokemon } from "../api";
import { SafeAreaView } from "react-native";
import { PokemonStackParamList } from "../Navigation/types";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RenderPokemon } from "./RenderPokemon";

type Props = NativeStackScreenProps<PokemonStackParamList, "Pokedex">;

function Pokedex(props: Props) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const getPokemonList = async () => {
    const res = await getData();
    if (res?.status === 200) {
      setPokemons(res.data);
    }
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  const renderItem = ({ item, index }: { item: Pokemon; index: number }) => (
    <RenderPokemon item={item} navigation={props.navigation} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pokemons}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={renderItem}
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
