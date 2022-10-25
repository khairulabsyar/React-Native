import { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pokedex from "../Screens/Pokedex";
import { PokemonStackParamList } from "./types";
import { getBackgroundColor } from "../function";
import PokemonDetail from "../Screens/PokemonDetail";

const PokemonStack = createNativeStackNavigator<PokemonStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <PokemonStack.Navigator initialRouteName='Pokedex'>
        <PokemonStack.Screen name={"Pokedex"} component={Pokedex} />
        <PokemonStack.Screen
          name={"PokemonDetail"}
          component={PokemonDetail}
          options={({ navigation, route }) => ({
            title: route.params.pokemon.name.toUpperCase(),
            // title: "Pokemon Detail",
            headerStyle: {
              backgroundColor: getBackgroundColor(
                route.params.pokemon.types[0].type.name
              ),
            },
            headerLeft: () => (
              <Entypo
                onPress={() => navigation.goBack()}
                name='chevron-left'
                size={24}
                color='black'
              />
            ),
            headerRight: () => {
              const [selected, SetSelected] = useState<boolean>();

              return (
                <Entypo
                  onPress={() => SetSelected(!selected)}
                  name={selected ? "heart" : "heart-outlined"}
                  size={24}
                  color={selected ? "red" : "black"}
                />
              );
            },
          })}
        />
      </PokemonStack.Navigator>
    </NavigationContainer>
  );
}
