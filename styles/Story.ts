import { StyleSheet } from "react-native";

const Story = StyleSheet.create({
  parentView: {
    borderWidth: 1,
    borderColor: "lightgray",
    marginBottom: 10,
    padding: 10,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "GillSans-Bold",
    fontSize: 19,
  },
  textView: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  text: {
    color: "white",
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5,
  },
  bottomView: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  readMoreView: {
    flex: 1,
    flexDirection: "row",
  },
  heartAndNumberView: {
    flexDirection: "row",
  },
  numberView: {
    margin: 5,
  },
  readMoreBtn: {
    alignItems: "center",
    width: 100,
    borderRadius: 3,
    color: "black",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#63ae59",
    padding: 10,
  },
  heartBtn: {
    width: 41,
    height: 35,
  },
});

export default Story;
