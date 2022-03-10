import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = function () {
  const name = "Matt";

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native!</Text>
      <Text style={styles.subTextStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subTextStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
