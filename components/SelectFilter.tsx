import React from "react";
import { Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useRecoilState } from "recoil";
import { filterState } from "../states/FilterState";
import { pageNumberState } from "../states/PageNumberState";
import styles from "../styles/SelectFilter";

const data = [
  { label: "Show all", value: "" },
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

const FilterDropdown = () => {
  const [filter, setFilter] = useRecoilState(filterState);
  const [pageNumber, setPageNumber] = useRecoilState(pageNumberState);

  return (
    <View>
      <View style={styles.parentView}>
        <Text style={styles.label}>Filter stories</Text>

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
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

export default FilterDropdown;
