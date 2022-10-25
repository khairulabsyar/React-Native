import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Pokedex from "./Pokedex";
import PokemonDetail from "./PokemonDetail";

const PokemonStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <PokemonStack.Navigator initialRouteName="Pokedex">
        <PokemonStack.Screen name={"Pokedex"} component={Pokedex} />
        <PokemonStack.Screen name={"PokemonDetail"} component={PokemonDetail} />
      </PokemonStack.Navigator>
    </NavigationContainer>
  );
}
