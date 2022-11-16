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
  tags: {
    color: "white",
    fontSize: 16,
    paddingBottom: 5,
  },
  text: {
    color: "white",
    fontSize: 16,
    marginTop: 5,
  },
  bottomView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  readMoreView: {
    flex: 1,
    flexDirection: "row",
  },
  favoriteView: {
    justifyContent: "space-evenly",
    flexDirection: "row-reverse",
  },
  numberView: {
    marginTop: 5,
  },
  readMoreBtn: {
    alignItems: "center",
    width: 100,
    borderRadius: 3,
    color: "black",
    backgroundColor: "white",
    fontFamily: "GillSans",
    borderWidth: 1,
    borderColor: "#63ae59",
    padding: 8,
  },
  extraMargin: {
    marginTop: 5,
    color: "white",
    fontSize: 16,
    marginBottom: 15,
  },
  noMargin: {
    marginTop: 5,
    color: "white",
    fontSize: 16,
    marginBottom: 0,
  },
  likeButton: {
    width: 41,
    height: 35,
  },
  unLikeButton: {
    width: 38,
    height: 33,
  },
  heartBtnView: {
    width: 41,
    height: 35,
  },
  opacity: {
    alignItems: "center",
    flex: 1,
  },
});

export default Story;
