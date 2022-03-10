// 2 important imports that are always declared in the start
// React library is how different components work together
import React from "react";
// React-Native is used to show some content on the mobile device
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = function () {
  //{fontSize: 30} - will also work

  //3. Use JS variable inside JSX
  const greeting = "Bye there!";
  //4. Use JSX element inside a JSX block
  const greeting2 = <Text>Hello to you!</Text>;

  return (
    //1. Text inside View
    //2. style inside the Text block = 'props'
    <View>
      <Text style={styles.textStyle}>This is the components screen</Text>
      {/* <Text>{greeting}</Text> */}
      {greeting2}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
