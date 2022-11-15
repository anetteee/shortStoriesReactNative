import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, Button, View, StyleSheet, TouchableOpacity } from "react-native";

import { useQuery, gql } from "@apollo/client";
import { FetchResult, Post } from "../Types";
import { GET_POST_INVENTORY } from "../Queries";
import SearchSection from "./SearchSection";
import Results from "./Results";
import { theme } from "../styles/theme";
import { text } from "../styles/theme";
import { containers } from "../styles/containers";

//pageSize is the max number of stories per page
// satt til 150 som default -- SKAL ENDRES
const pageSize = 150;

export default function MainPage() {
  //useStates for input search text, selected tags and sort

  const [input, setInput] = React.useState<string>("");
  const [selects, setSelects] = React.useState<string>("");
  const [sortFilter, setsortFilter] = React.useState<string>("");

  //useStates for pagination
  const [pageNumber, setPageNumber] = React.useState(1);
  const [offset, setOffset] = React.useState(0);

  //Hook to get data from the database via backend
  const { loading, data, refetch } = useQuery<FetchResult>(GET_POST_INVENTORY, {
    variables: {
      tag: selects,
      limit: pageSize,
      offset: 0,
      keepPreviousData: true,
      input: input,
      sortBy: sortFilter,
    },
  });

  /*updates the offset and refetches the data with this offset 
  (the data for the next page)*/
  const handlePageClick = (event: React.ChangeEvent<unknown>, page: number) => {
    setPageNumber(page);
    let newOffset = (page - 1) * pageSize;
    setOffset(newOffset);

    refetch({
      tag: selects,
      sortBy: sortFilter,
      limit: pageSize,
      offset: newOffset,
      input: input,
      keepPreviousData: true,
    });
  };

  const [showSearchMenu, setShowSearchMenu] = useState(false);

  return (
    <ScrollView>
      <View>
        <View style={containers.headerContainer}>
          <Text style={text.h1}>Fantastic short stories</Text>
          <Text style={text.h2}>Search among hundreds of titles</Text>
        </View>
        {showSearchMenu ? (
          <> 
            <SearchSection /> 
              <View style={styles.showMoreView}>
                <TouchableOpacity
                  style={styles.showBtn}
                  onPress={() => setShowSearchMenu(!showSearchMenu)}
                >
                  <Text style={{ alignSelf: "center" }}>
                    {showSearchMenu ? "Hide search menu" : "Show search menu"}
                  </Text>
                </TouchableOpacity>
              </View>
            <Results/>
          </>
          ) : (
            <> 
            <View style={styles.showMoreView}>
              <TouchableOpacity
                style={styles.showBtn}
                onPress={() => setShowSearchMenu(!showSearchMenu)}
              >
                <Text style={{ alignSelf: "center" }}>
                  {showSearchMenu ? "Hide search menu" : "Show search menu"}
                </Text>
              </TouchableOpacity>
            </View>
            
            <Results />
            
            </>)}
    
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  showBtn: {
    textAlign: "center",
    justifyContent: "center",
    width: 200,
    borderRadius: 3,
    color: "black",
    backgroundColor: "#f4f4f4",
    borderWidth: 1,
    borderColor: "#63ae59",
    fontFamily: "Gill Sans",
    padding: 8,
    alignItems: "center",
  },
  showMoreView: {
    marginTop: 10,
    alignSelf: "center",
  },
});