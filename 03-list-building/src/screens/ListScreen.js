import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = function () {
  //Solving the key issue
  //1. You can manually put a key inside the object, which must be unique
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
    //2. Using keyExtractor - using name property
    <FlatList
      horizontal //Makes the list of data display horizontal
      showsHorizontalScrollIndicator={false} //Hide horizontal scroll bar
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        // element === {item : {name: 'Friend #1'}, index: 0}
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
