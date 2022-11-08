import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useQuery, gql } from "@apollo/client";
//import Pagination from "@mui/material/Pagination";
//import Story from "./Story";
import { FetchResult, Post } from "../Types";
import { GET_POST_INVENTORY } from "../Queries";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../styles";

import { Dimensions } from "react-native";
import SearchSection from "./SearchSection";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

//pageSize is the max number of stories per page
// satt til 150 som default -- SKAL ENDRES
const pageSize = 150;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
  },
});

export function MainPage() {
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

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={[Colors.green.s10, Colors.green.s20]}
        start={[0, 0]}
        end={[1, 0]}
      >
        <View>
          <SearchSection input={input} />
        </View>

        <Text>{input}</Text>
      </LinearGradient>
    </ScrollView>
  );
}
export default MainPage;
