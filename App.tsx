import { ApolloProvider } from "@apollo/client";
import React from "react";
import { Dimensions, View, SafeAreaView } from "react-native";
import { apolloClient } from "./apolloClient";
import MainPage from "./components/MainPage";
import { RecoilRoot } from "recoil";
import { LinearGradient } from "expo-linear-gradient";
import {styles} from "./styles/App";
import {green, blue} from "./styles/App";

/**
 * Method for rendering the application
 * @returns application
 */
export default function App() {
  return (
    <RecoilRoot>
      <ApolloProvider client={apolloClient}>
        <View>
          <LinearGradient
            colors={[blue, green]}
            style={styles.linearGradient}
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
