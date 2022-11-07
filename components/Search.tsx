import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { useQuery, gql } from "@apollo/client";
//import Pagination from "@mui/material/Pagination";
//import Story from "./Story";
import { FetchResult, Post } from "../Types";
import { GET_POST_INVENTORY } from "../Queries";

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
    <ScrollView> 
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <View>
            {!data && (
              <Text>
                No stories available
              </Text>
            )}
            {data && data.getPost.posts?.length === 0 && (
              <Text>
                Found no stories matching your search and choice of filter
              </Text>
            )}
            {data &&
              data.getPost.posts.map((inventory) => (
                <Text>
                    {inventory.id}
                </Text>
              ))}
          </View>
        )}
    </ScrollView>
  );
}
export default Search;


