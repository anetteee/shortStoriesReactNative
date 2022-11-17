import React from "react";
import { View, Text } from "react-native";
import SearchInput from "./SearchInput";
import SelectFilter from "./SelectFilter";
import SelectSort from "./SelectSort";
import styles from "../styles/SearchMenu";

export default function SearchMenu() {
  return (
    <View>
      <Text style={styles.header}>Search menu</Text>
      <SearchInput />

      {/* <View style={styles.selectFilterView}> */}
      <SelectFilter />
      {/* </View> */}

      {/* <View style={styles.selectSortView}> */}
      <SelectSort />
      {/* </View> */}
    </View>
  );
}
