import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const FlatListEx = function () {
  //2. Add a new 'age' property to each of our 'friend' objects
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
  ].map((el, i) => {
    // prettier-ignore
    const ageArr = ["Age 20", "Age 45", "Age 32", "Age 27", "Age 53", "", "Age 30", "", ""];
    el.age = ageArr[i];
    return el;
  });

  return (
    <FlatList
      //1. Make the FlatList scroll vertically again.
      //   horizontal
      //   showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        //3. Print out that age for each element
        return (
          <Text style={styles.textStyle}>
            {item.name} - {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default FlatListEx;

//Stephen Grider Implementation

/*
const FlatListEx = function () {
    //2. Add a new 'age' property to each of our 'friend' objects
    const friends = [
      { name: "Friend #1", age: 20 },
      { name: "Friend #2", age: 21 },
      { name: "Friend #3", age: 22 },
      { name: "Friend #4", age: 23 },
      { name: "Friend #5", age: 24 },
      { name: "Friend #6", age: 25 },
      { name: "Friend #7", age: 26 },
      { name: "Friend #8", age: 27 },
      { name: "Friend #9", age: 28 },
    ]
  
    return (
      <FlatList
        //1. Make the FlatList scroll vertically again.
        //   horizontal
        //   showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
          //3. Print out that age for each element
          return (
            <Text style={styles.textStyle}>
              {item.name} - Age {item.age}
            </Text>
          );
        }}
      />
    );
  };
  
  const styles = StyleSheet.create({
    textStyle: {
      marginVertical: 50,
    },
  });
*/
