// 2 important imports that are always declared in the start
// React library is how different components work together
import React from "react";
// React-Native is used to show some content on the mobile device
import { Text, StyleSheet } from "react-native";

const ComponentsScreen = function () {
  //{fontSize: 30} - will also work
  return <Text style={styles.textStyle}>This is the components screen</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
