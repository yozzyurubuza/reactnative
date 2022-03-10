import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = function () {
  const friends = [
    { name: "Friend #1" },
    { name: "Friend #2" },
    { name: "Friend #3" },
    { name: "Friend #4" },
    { name: "Friend #5" },
    { name: "Friend #6" },
    { name: "Friend #7" },
    { name: "Friend #8" },
    { name: "Friend #9" },
  ];

  // Notes: Missing Keys for items, when deleting a single item from the list, the entire list needs to be reloaded just to display the list again.
  // Ideal scenario is just remove the single item in the list and update the list without reloading the whole list.
  // Placing a key will resolve this issue, thus knowing which element in the list was deleted and will not need to reload to the whole list. (Useful for performance optimization)
  return (
    <FlatList
      data={friends}
      renderItem={({ item }) => {
        // element === {item : {name: 'Friend #1'}, index: 0}
        return <Text>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
