import React from "react";
import { StatusBar, View, Text, StyleSheet } from "react-native";
import SearchInput from "./SearchInput";
import SelectFilter from "./selectFilter";
import SelectSort from "./selectSort";
import { text } from "../styles/theme";
import { wrappers } from "../styles/containers";
import { containers } from "../styles/containers";

export default function SearchSection() {
  return (
    <View>
      <View style={containers.headerContainer}>
        <Text style={text.h1}>Fantastic short stories</Text>
        <Text style={text.h2}>Search among hundreds of titles</Text>
      </View>
      <SearchInput />
      <SelectFilter />
      {/* <SelectSort /> */}
      {/* <StatusBar /> */}
    </View>
  );
}
