import { ApolloProvider } from "@apollo/client";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { apolloClient } from "./apolloClient";
import Search from "./components/Search";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <ApolloProvider client={apolloClient}>
        <View style={styles.container}>
          <Search/>
        </View>
      </ApolloProvider>
    </RecoilRoot>
   
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
