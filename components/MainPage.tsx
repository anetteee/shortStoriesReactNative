import React, { useState } from "react";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";

import { useQuery, gql } from "@apollo/client";
import { FetchResult, Post } from "../Types";
import { GET_POST_INVENTORY } from "../Queries";
import SearchMenu from "./SearchMenu";
import Results from "./Results";
import styles from "../styles/MainPage";

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
        <View style={styles.headerView}>
          <Text style={styles.h1}>Fantastic short stories</Text>
          <Text style={styles.h2}>Search among hundreds of titles</Text>
        </View>

        {showSearchMenu ? (
          <>
            <View style={styles.searchMenuView}>
              <SearchMenu />

              <View>
                <TouchableOpacity
                  onPress={() => {
                    setShowSearchMenu(!showSearchMenu);
                  }}
                  style={
                    showSearchMenu
                      ? styles.closeSearchBtn
                      : styles.showSearchBtn
                  }
                >
                  <Text>
                    {showSearchMenu ? "Close search menu" : "Show search menu"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <Image
              style={styles.image}
              source={require("../images/bookspngg.png")}
            ></Image>
            <Results />
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
                <Text style={styles.textBtn}>
                  {showSearchMenu ? "Hide search menu" : "Show search menu"}
                </Text>
              </TouchableOpacity>
            </View>
            <Image
              style={styles.image}
              source={require("../images/bookspngg.png")}
            ></Image>

            <Results />
          </>
        )}
      </View>
    </ScrollView>
  );
}
