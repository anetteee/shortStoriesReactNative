import React, { useState } from "react";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import SearchMenu from "./SearchMenu";
import Results from "./Results";
import styles from "../styles/MainPage";

export default function MainPage() {
  const [showSearchMenu, setShowSearchMenu] = useState(false);

  return (
    <ScrollView>
      <View>
        <View style={styles.headerView}>
          <Text style={styles.h1}>Fantastic short stories</Text>
          <Text style={styles.h2}>Search among hundreds of titles</Text>
        </View>
        {showSearchMenu ? (
          <>
            <View style={styles.searchMenuView}>
              <SearchMenu />
              <TouchableOpacity
                onPress={() => {
                  setShowSearchMenu(!showSearchMenu);
                }}
                style={
                  showSearchMenu ? styles.closeSearchBtn : styles.showSearchBtn
                }
              >
                <Text>Close search menu</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <>
            <View style={styles.noSearchMenuView}>
              <TouchableOpacity
                style={
                  showSearchMenu ? styles.closeSearchBtn : styles.showSearchBtn
                }
                onPress={() => setShowSearchMenu(!showSearchMenu)}
              >
                <Text>Show search menu</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
        <Image
          style={styles.image}
          source={require("../images/books.png")}
        ></Image>
        <Results />
      </View>
    </ScrollView>
  );
}
