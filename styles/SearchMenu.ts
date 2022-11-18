import { StyleSheet } from "react-native";

const SearchMenu = StyleSheet.create({
  header: {
    fontSize: 20,
    color: "white",
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: "center",
  },
  pink: {
    height: "100%",
    marginTop: 20,
    padding: 10,
    color: "white",
  },
  selectFilterView: {
    flex: 1,
    flexDirection: "column",
    // marginTop: 30,
    // paddingTop:10,
    minHeight: 140,
  },
  selectSortView: {
    flex: 1,
    // paddingTop:10,
    minHeight: 120,
  },
});

export default SearchMenu;
