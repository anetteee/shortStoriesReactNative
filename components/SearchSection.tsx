import React from "react";
import { StatusBar, View, Text, StyleSheet } from "react-native";
import SearchInput from "./SearchInput";
import SelectFilter from "./selectFilter";
import SelectSort from "./selectSort";

export default function SearchSection() {
  return (
    <View>
      <SearchInput />
      <SelectFilter />
      <SelectSort />
      <StatusBar />
    </View>
  );
}
