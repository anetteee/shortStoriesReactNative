import { ApolloProvider } from "@apollo/client";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { apolloClient } from "./apolloClient";
import Search, { MainPage } from "./components/MainPage";

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <View style={styles.container}>
        <MainPage />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
