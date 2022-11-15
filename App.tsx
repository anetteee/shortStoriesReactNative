import { ApolloProvider } from "@apollo/client";
import React from "react";
import { StyleSheet, Dimensions, Text, View, SafeAreaView } from "react-native";
import { apolloClient } from "./apolloClient";
import MainPage from "./components/MainPage";
import { RecoilRoot } from "recoil";
import { theme } from "./styles/theme";
import { LinearGradient } from "expo-linear-gradient";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

export default function App() {
  return (
    <RecoilRoot>
      <ApolloProvider client={apolloClient}>
        <View style={styles.container}>
          <LinearGradient
            colors={[
              theme.colors.bluish,
              theme.colors.darkGreen,
              // theme.colors.lightGreen,
            ]}
            style={{
              width: width,
              height: height,
            }}
            start={[0, 0]}
            end={[1, 0]}
          >
            <SafeAreaView>
              <MainPage />
            </SafeAreaView>
          </LinearGradient>
        </View>
      </ApolloProvider>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: theme.colors.bluish,
    alignItems: "center",
    justifyContent: "center",
  },
  linearGradient: {
    width: 350,
  },
});
