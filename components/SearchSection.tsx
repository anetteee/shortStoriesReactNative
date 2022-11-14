import React from "react";
import { StatusBar, View, Text, StyleSheet } from "react-native";
import SearchInput from "./SearchInput";

export default function SearchSection() {
  return (
    <View>
      <SearchInput />
      <StatusBar />
    </View>
  );
}
