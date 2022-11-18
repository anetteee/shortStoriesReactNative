import { StyleSheet } from "react-native";

const MainPage = StyleSheet.create({
  headerView: {
    paddingTop: 25,
    minHeight: 120,

    // textAlign: "center",
    // alignContent: "center"
  },
  searchMenuView: {
    marginTop: 20,
    borderColor: "lightgray",
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
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
    // fontFamily: "Gill Sans",
    paddingBottom: 20,
    // alignSelf: "center"
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
    alignSelf: "center",
  },
  showSearchBtn: {
    textAlign: "center",
    justifyContent: "center",
    width: 200,
    borderRadius: 3,
    color: "black",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#63ae59",
    fontFamily: "Gill Sans",
    padding: 8,
    alignItems: "center",
  },
  closeSearchBtn: {
    alignSelf: "flex-end",
    // textAlign: "center",
    // justifyContent: "center",

    marginRight: 10,
    marginBottom: 10,
    width: "50%",
    borderRadius: 3,
    color: "black",
    // backgroundColor: "#f4f4f4",
    backgroundColor: "lightblue",
    borderWidth: 1,
    borderColor: "#63ae59",
    fontFamily: "Gill Sans",
    padding: 8,
    alignItems: "center",
  },
  textBtn: {
    alignSelf: "center",
  },
});

export default MainPage;
