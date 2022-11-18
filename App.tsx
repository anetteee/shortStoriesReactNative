import { ApolloProvider } from "@apollo/client";
import React from "react";
import { Dimensions, View, SafeAreaView } from "react-native";
import { apolloClient } from "./apolloClient";
import MainPage from "./components/MainPage";
import { RecoilRoot } from "recoil";
import { LinearGradient } from "expo-linear-gradient";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

export default function App() {
  return (
    <RecoilRoot>
      <ApolloProvider client={apolloClient}>
        <View>
          <LinearGradient
            colors={["#256670", "#407056"]}
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
