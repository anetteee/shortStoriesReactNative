import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

import { useQuery, gql } from "@apollo/client";
//import Pagination from "@mui/material/Pagination";
//import Story from "./Story";
import { FetchResult, Post } from "../Types";
import { GET_POST_INVENTORY } from "../Queries";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../styles";
import textStyles from "../styles/text";
import containerStyles from "../styles/containers";

//pageSize is the max number of stories per page
// satt til 150 som default -- SKAL ENDRES
const pageSize = 150;

export function Search() {
  //useStates for input search text, selected tags and sort
  const [searchText, setSearchText] = React.useState<string>("");
  const [selects, setSelects] = React.useState<string>("");
  const [sortFilter, setsortFilter] = React.useState<string>("");
  const [input, setInput] = React.useState<string>("");

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

  //handel click on search-button
  const handleOnClick = (ev: any) => {
    //prevent refreash caused by form
    ev.preventDefault();
    setInput(searchText);
  };

  return (
    <ScrollView style={containerStyles.scrollContainer}>
      <LinearGradient
        colors={[Colors.green.s10, Colors.green.s20]}
        start={[0, 0]}
        end={[1, 0]}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View style={containerStyles.parentContainer}>
            <Text style={textStyles.title}>Fantastic short stories</Text>
            <Text style={textStyles.title2}>
              Search among hundreds of titles
            </Text>
            {loading ? (
              <Text style={textStyles.text}>Loading...</Text>
            ) : (
              <View>
                {!data && (
                  <Text style={textStyles.text}>No stories available</Text>
                )}
                {data && data.getPost.posts?.length === 0 && (
                  <Text style={textStyles.text}>
                    Found no stories matching your search and choice of filter
                  </Text>
                )}
                {data &&
                  data.getPost.posts.map((inventory) => (
                    <Text style={textStyles.text}>{inventory.id}</Text>
                  ))}
              </View>
            )}
          </View>
        </SafeAreaView>
      </LinearGradient>
    </ScrollView>
  );
}
export default Search;
