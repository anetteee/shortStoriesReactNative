import { StyleSheet } from "react-native";

const Results = StyleSheet.create({
  parentView: {
    height: "100%",
    padding: 10,
  },
  header: {
    marginTop: 15,
    fontSize: 20,
    color: "white",
    fontFamily: "GillSans-Bold",
    paddingTop: 5,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginTop: 5,
  },
  loadMoreBtn: {
    alignSelf: "flex-end",
    width: "50%",
    borderRadius: 3,
    color: "black",
    backgroundColor: "lightblue",
    borderWidth: 1,
    borderColor: "#63ae59",
    padding: 10,
    alignItems: "center",
  },
});

export default Results;
