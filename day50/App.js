import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { getData } from "./api";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  Pressable,
  ScrollView,
} from "react-native";

const tickets = [
  {
    id: 1,
    tittle: "Bug",
    description: "Need to fix urgently",
    status: "In progress",
    priority: "High",
    category: "Adnexio",
    createdAt: "12/10/2022",
    updatedAt: "12/10/2022",
    createdBy: "Absyar",
  },
  {
    id: 2,
    tittle: "Update column table",
    description: "Requested by user",
    status: "In progress",
    priority: "Low",
    category: "Adnexio",
    createdAt: "5/10/2022",
    updatedAt: "5/10/2022",
    createdBy: "Ali",
  },
  {
    id: 3,
    tittle: "Hello World",
    description: "Say Hello",
    status: "In progress",
    priority: "Mid",
    category: "Adnexio",
    createdAt: "5/10/2022",
    updatedAt: "5/10/2022",
    createdBy: "Ali",
  },
  {
    id: 4,
    tittle: "No Tittle",
    description: "Requested by user",
    status: "Backlog",
    priority: "Low",
    category: "Meniaga",
    createdAt: "5/10/2022",
    updatedAt: "5/10/2022",
    createdBy: "Ali",
  },
];
const TicketCard = ({ tickets }) => {
  return (
    <View style={styles.ticketView}>
      <Text style={styles.text}>ID: {tickets.id}</Text>
      <Text>Tittle: {tickets.tittle}</Text>
      <Text>Description: {tickets.description}</Text>
      <Text>Status: {tickets.status}</Text>
      <Text>Priority: {tickets.priority}</Text>
      <Text>Category: {tickets.category}</Text>
    </View>
  );
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const PokemonCard = ({ pokemon }) => {
  return (
    <View style={styles.pokemonView}>
      <Image source={{ uri: pokemon.image }} style={styles.pokemonImage} />
      <Text style={styles.pokemonName}>
        Name: {capitalizeFirstLetter(pokemon.name)}
      </Text>
      <Text style={styles.pokemonType}>Type: </Text>
      {pokemon.types.map((type) => {
        return (
          <Text style={styles.pokemonType}>
            {capitalizeFirstLetter(type.type.name)}
          </Text>
        );
      })}
    </View>
  );
};

const ListEmptyComponent = () => {
  return (
    <View>
      <Text>No bugs are recorded. Good job Devs!</Text>
    </View>
  );
};

const ListFooterComponent = () => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>Resolve all</Text>
    </Pressable>
  );
};

export default function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    setPokemon(getData());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>Pokemon</Text>
      <FlatList
        data={pokemon._3}
        renderItem={({ item, index }) => {
          return <PokemonCard pokemon={item} />;
        }}
        numColumns={2}
        ListFooterComponent={ListFooterComponent}
      />

      {/* <ScrollView style={styles.scrollView}>
        <Text style={{ fontSize: 30, color: "red" }}>All Ticket</Text>
        <Text>Backlog</Text>
        <FlatList
          horizontal={true}
          data={tickets}
          contentContainerStyle={{
            alignItems: "center",
            height: 200,
            backgroundColor: "lightpink",
          }}
          renderItem={({ item, index }) => {
            return <TicketCard tickets={item} />;
          }}
          ListEmptyComponent={ListEmptyComponent}
          ListFooterComponent={ListFooterComponent}
        />

        <Text>In Progress</Text>
        <FlatList
          horizontal={true}
          data={tickets}
          contentContainerStyle={{
            alignItems: "center",
            height: 200,
            backgroundColor: "lightpink",
          }}
          renderItem={({ item, index }) => {
            return <TicketCard tickets={item} />;
          }}
          ListEmptyComponent={ListEmptyComponent}
          ListFooterComponent={ListFooterComponent}
        />

        <Text>Completed</Text>
        <FlatList
          horizontal={true}
          data={tickets}
          contentContainerStyle={{
            alignItems: "center",
            height: 200,
            backgroundColor: "lightpink",
          }}
          renderItem={({ item, index }) => {
            return <TicketCard tickets={item} />;
          }}
          ListEmptyComponent={ListEmptyComponent}
          ListFooterComponent={ListFooterComponent}
        />
      </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "purple",
    fontWeight: "bold",
    fontSize: 30,
    backgroundColor: "lightgreen",
    width: "100%",
  },
  ticketView: {
    borderWidth: 1,
    width: 180,
    height: 175,
    padding: 5,
  },
  pokemonView: {
    borderWidth: 1,
    width: 180,
    height: 250,
    padding: 5,
    margin: 5,
  },
  pokemonImage: { height: 150 },
  buttonText: {
    fontSize: 30,
  },
  pokemonName: {
    color: "red",
    backgroundColor: "lightblue",
    fontSize: 20,
  },
  pokemonType: { color: "purple", backgroundColor: "lightblue", fontSize: 15 },
  button: {
    backgroundColor: "lightblue",
    width: "100%",
    borderWidth: 2,
    borderRadius: 5,
    alignItems: "center",
  },
  scrollView: {
    padding: 15,
  },
});
