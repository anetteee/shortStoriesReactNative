import React from "react";
import { Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useRecoilState } from "recoil";
import { pageNumberState } from "../states/PageNumberState";
import { sortState } from "../states/SortState";
import styles from "../styles/SelectSort";

const data = [
  { label: "From least to most likes", value: "asc" },
  { label: "From most to least likes", value: "desc" },
];

const DropdownComponent = () => {
  const [sort, setSort] = useRecoilState(sortState);
  const [pageNumber, setPageNumber] = useRecoilState(pageNumberState);

  return (
    <View>
      <View style={styles.parentView}>
        <Text style={styles.label}>Sort stories</Text>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={data}
          // maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select sorting order"
          value={sort}
          onChange={(item) => {
            setPageNumber(1);
            setSort(item.value);
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

export default DropdownComponent;
