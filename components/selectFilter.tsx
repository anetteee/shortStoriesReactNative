import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useRecoilState } from "recoil";
import { filterState } from "../states/filterState";
import { pageNumberState } from "../states/pageNumberState";
import { text } from "../styles/theme";
import { containers } from "../styles/containers";

const data = [
  { label: "Select filter", value: null },
  { label: "History", value: "history" },
  { label: "Crime", value: "crime" },
  { label: "English", value: "english" },
  { label: "Love", value: "love" },
  { label: "Fiction", value: "fiction" },
  { label: "French", value: "french" },
  { label: "Classic", value: "classic" },
  { label: "Magical", value: "magical" },
  { label: "Mystery", value: "mystery" },
  { label: "American", value: "american" },
];

const SortDropdown = () => {
  const [filter, setFilter] = useRecoilState(filterState);
  const [pageNumber, setPageNumber] = useRecoilState(pageNumberState);

  return (
    <View>
      <View style={containers.filterContainer}>
        <Text style={text.label}>Filter stories</Text>

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={data}
          labelField="label"
          valueField="value"
          placeholder="Select filter"
          value={filter}
          onChange={(item) => {
            setPageNumber(1);
            setFilter(item.value);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color="white"
              name="Safety"
              size={20}
            />
          )}
        />
      </View>
    </View>
  );
};

export default SortDropdown;

const styles = StyleSheet.create({
  dropdown: {
    marginLeft: 10,
    marginRight: 10,

    padding: 5,
    color: "white",
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    position: "relative",
    borderColor: "white",
    borderWidth: 1,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "white",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "white",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
