import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";

import { useQuery, gql } from "@apollo/client";
//import Pagination from "@mui/material/Pagination";
//import Story from "./Story";
import { FetchResult, Post } from "../Types";
import { GET_POST_INVENTORY } from "../Queries";
import Story from "./Story";
import { Divider } from "react-native-paper";

//pageSize is the max number of stories per page
// satt til 150 som default -- SKAL ENDRES
const pageSize = 150;
//const pageN = 1;

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
  const handlePageClick = (page: number) => {
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

  //How the items is to be rendered
  const renderItem = ({ item }) => <Story key={item.id} inventory={item} />;

  //Will be altered (footer in the flatlist)
  const endComponent = () => {
    return (
      <View>
        <Divider />
        <Text> List ended</Text>
      </View>
    );
  };

  /*const handleEmpty = () => {
    return <Text> No stories available</Text>;
  };*/

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <View>
            {!data && <Text>No stories available</Text>}
            {data && (
              <FlatList
                ListFooterComponent={endComponent} //Footer prop that will be altered
                data={data.getPost.posts} //The array of data to be displayed
                keyExtractor={(item) => item.id} //Unique key for each item
                renderItem={renderItem} //how to render the items from the list

                /* Props that may help with handling empty result list
                ListEmptyComponent={handleEmpty}
                */

                /* Props that may help with pagination:
                onEndReachedThreshold={0.01}
                onEndReached={() => handlePageClick(pageN+1)}
                 */
              />
            )}
          </View>
        )}
      </View>
    </SafeAreaView>

    /*<ScrollView> //Old soulution with ScrollView
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
                    <Story key={inventory.id} inventory={inventory} />
                </Text>
              ))}
          </View>
        )}
    </ScrollView>*/
  );
}
export default Search;
