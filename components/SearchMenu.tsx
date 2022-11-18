import React from "react";
import { View, Text } from "react-native";
import SearchInput from "./SearchInput";
import SelectFilter from "./SelectFilter";
import SelectSort from "./SelectSort";
import styles from "../styles/SearchMenu";

/**
 * Method for search menu box
 * @returns search menu 
 */
export default function SearchMenu() {
  return (
    <View>
      <Text style={styles.header}>Search menu</Text>
      <SearchInput />
      <SelectFilter />
      <SelectSort />
    </View>
  );
}
