import React, { useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Button,
} from "react-native";

import { useQuery, gql } from "@apollo/client";
//import Story from "./Story";
import { FetchResult, Post } from "../Types";
import { GET_POST_INVENTORY } from "../Queries";
//import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../styles";
import textStyles from "../styles/text";
//import containerStyles from "../styles/containers";
import Story from "./Story";
import { Divider } from "react-native-paper";
import { useRecoilState } from "recoil";
import { filterState } from "../states/filterState";
import { sortState } from "../states/sortState";
import { inputState } from "../states/inputState";
import { pageNumberState } from "../states/pageNumberState";

//pageSize is the max number of stories per page
// satt til 150 som default -- SKAL ENDRES
const pageSize = 10;

export function Results() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // width: width,
    },
  });

  //useStates for input search text, selected tags and sort
  const [searchText, setSearchText] = useRecoilState(inputState);
  const [filter, setFilter] = useRecoilState(filterState);
  const [sort, setSort] = useRecoilState(sortState);

  //useStates for pagination
  const [pageNumber, setPageNumber] = useRecoilState(pageNumberState);
  const [offset, setOffset] = React.useState(0);

  //Hook to get data from the database via backend
  const { loading, data, fetchMore } = useQuery<FetchResult>(
    GET_POST_INVENTORY,
    {
      variables: {
        tag: filter,
        limit: pageSize,
        offset: 0,
        keepPreviousData: true,
        input: searchText,
        sortBy: sort,
      },
    }
  );

  useEffect(() => {
    console.log("changed", data);
  }, [data]);

  /*updates the offset and refetches the data with this offset 
  (the data for the next page)*/
  const handlePageClick = async (page: number) => {
    let newOffset = (page - 1) * pageSize;

    console.log("Offset: ", newOffset);

    console.log(
      "fetched",
      await fetchMore({
        variables: {
          tag: filter,
          sortBy: sort,
          limit: pageSize,
          offset: newOffset,
          input: searchText,
        },
        updateQuery: (previousQueryResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousQueryResult;
          }
          const newResult = Object.assign({}, previousQueryResult, {
            getPost: {
              count: previousQueryResult.getPost.count,
              posts: [
                ...previousQueryResult.getPost.posts,
                ...fetchMoreResult.getPost.posts,
              ],
            },
          });
          return newResult;
        },
      })
    );

    setPageNumber(page);
    setOffset(newOffset);
  };

  //How the items is to be rendered
  const renderItem = ({ item }) => <Story key={item.id} inventory={item} />;

  //Will be altered (footer in the flatlist)
  const endComponent = () => {
    //disables load button and gives feedback if the final page is reached
    if (pageNumber >= data.getPost.count / 10) {
      return (
        <View>
          <text> No more stories available</text>
        </View>
      );
    }
    return (
      <View>
        <Divider />
        <Button
          title="LOAD MORE STORIES"
          onPress={() => handlePageClick(pageNumber + 1)}
        />
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
              />
            )}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
export default Results;