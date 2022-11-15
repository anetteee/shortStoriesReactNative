import React from "react";
import { ScrollView, View, Text, FlatList } from "react-native";
import SearchInput from "./SearchInput";
import SelectFilter from "./selectFilter";
import SelectSort from "./selectSort";
import { text } from "../styles/theme";
import { containers } from "../styles/containers";

export default function SearchSection() {
  return (
    <View>
      {/* <View style={containers.headerContainer}>
        <Text style={text.h1}>Fantastic short stories</Text>
        <Text style={text.h2}>Search among hundreds of titles</Text>
      </View> */}
      <SearchInput />

      <View style={containers.selectFilterContainer}>
        <SelectFilter />
      </View>

      <View style={containers.selectSortContainer}>
        <SelectSort />
      </View>
    </View>
  );
}
