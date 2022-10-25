import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Pokemon } from "../api";
import { firstLetter } from "../function";

interface Props {
  stats: Pokemon["stats"];
}

function Stats(props: Props) {
  return (
    <View style={styles.container}>
      {props.stats.map((stat: any, index: number) => (
        <>
          <View style={{ flexDirection: "row", margin: 5 }}>
            <Text style={styles.stat}>{firstLetter(stat.stat.name)}</Text>
            <Text style={styles.value}>{stat.base_stat}</Text>
          </View>
        </>
      ))}
    </View>
  );
}

export default Stats;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30,
  },
  stat: {
    borderWidth: 1,
    borderRadius: 10,
    height: 35,
    width: 175,
    color: "green",
    backgroundColor: "yellow",
    overflow: "hidden",
    marginRight: 10,
    padding: 5,
    fontSize: 20,
    textAlign: "center",
  },
  value: {
    borderWidth: 1,
    borderRadius: 10,
    height: 35,
    width: 50,
    color: "green",
    backgroundColor: "yellow",
    overflow: "hidden",
    padding: 5,
    fontSize: 20,
    textAlign: "center",
  },
});
