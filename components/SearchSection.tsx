import React from "react";
import { StatusBar, View, Text, StyleSheet } from "react-native";
import SelectFilter from "./selectFilter";
import SelectSort from "./selectSort";

export default function SearchSection() {
  return (
    <View>
      <SelectFilter />
      <SelectSort />
      <StatusBar />
    </View>
  );
}
