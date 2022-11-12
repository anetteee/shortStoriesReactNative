import React from "react";
import { SafeAreaView } from "react-native";
import Results from "./Results";
import SearchSection from "./SearchSection";

export default function MainPage() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SearchSection />
      <Results />
    </SafeAreaView>
  );
}
