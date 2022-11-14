import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useRecoilState } from "recoil";
import { pageNumberState } from "../states/pageNumberState";
import { sortState } from "../states/sortState";

const data = [
  { label: "From least to most likes", value: "asc" },
  { label: "From most to least likes", value: "desc" },
];

const DropdownComponent = () => {
  const [sort, setSort] = useRecoilState(sortState);
  const [pageNumber, setPageNumber] = useRecoilState(pageNumberState);

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      iconStyle={styles.iconStyle}
      data={data}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select sorting order"
      value={sort}
      onChange={(item) => {
        setPageNumber(1);
        setSort(item.value);
      }}
      renderLeftIcon={() => (
        <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
      )}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    width: "100%",
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
