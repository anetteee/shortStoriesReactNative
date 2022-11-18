import { StyleSheet } from "react-native";

const MainPage = StyleSheet.create({
  headerView: {
    paddingTop: 25,
    minHeight: 120,
  },
  searchMenuView: {
    marginTop: 20,
    borderColor: "lightgray",
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  noSearchMenuView: {
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
  },
  h1: {
    fontSize: 40,
    color: "white",
    paddingBottom: 10,
    fontFamily: "GillSans-Bold",
    textAlign: "center",
  },
  h2: {
    fontSize: 17,
    color: "white",
    paddingBottom: 20,
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
    alignSelf: "center",
  },
  showSearchBtn: {
    width: 200,
    borderRadius: 3,
    color: "black",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#63ae59",
    padding: 10,
    alignItems: "center",
  },
  closeSearchBtn: {
    alignSelf: "flex-end",
    marginBottom: 10,
    width: "50%",
    borderRadius: 3,
    color: "black",
    backgroundColor: "lightblue",
    borderWidth: 1,
    borderColor: "#63ae59",
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    marginTop: 25,
  },
});

export default MainPage;
