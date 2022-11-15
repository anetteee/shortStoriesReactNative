import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { DECREASE_REACTION, INCREMENT_REACTION } from "../Queries";
import { StoryProps } from "../Types";
import { useRecoilState } from "recoil";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";

const Story: React.FC<StoryProps> = ({ inventory }) => {
  const [readMore, setReadMore] = useState(false);

  /*Mutation is used to increase/decrease reactions (likes) 
  and the UI is updated when the action of liking/unliking is done.*/
  const [isFavorite, setIsFavorite] = useState(false);
  const [increaseReaction] = useMutation(INCREMENT_REACTION);
  const [decreaseReaction] = useMutation(DECREASE_REACTION);

  /**
   * Help method for increasing reactions in database.
   */
  const onLikePress = async () => {
    increaseReaction({ variables: { incrementReactionsId: inventory.id } });
    setIsFavorite(true);
  };
  /**
   * Help method for decreasing reactions in database.
   */
  const onUnLikePress = async () => {
    decreaseReaction({ variables: { decreaseReactionsId: inventory.id } });
    setIsFavorite(false);
  };

  return (
    <View style={styles.storyContainer}>
      <Text style={styles.title}>{inventory.title}</Text>
      {readMore ? (
        <>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <Text style={readMore ? styles.extraMargin : styles.noMargin}>
              {inventory.body}
            </Text>
            <Text style={styles.tags}>
              Tags: {inventory.tags[0]}, {inventory.tags[1]}
            </Text>

            {inventory.tags[2] ? (
              <Text style={styles.tags}>, {inventory.tags[2]}</Text>
            ) : (
              ""
            )}
          </View>
        </>
      ) : (
        <Text style={styles.body}>{inventory.body.substring(0, 100)}...</Text>
      )}
      <View style={styles.bottomContainer}>
        <View style={styles.readMoreView}>
          <TouchableOpacity
            style={styles.readMoreBtn}
            onPress={() => setReadMore(!readMore)}
          >
            <Text style={{ alignSelf: "center" }}>
              {readMore ? "Read less" : "Read more"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.heartandnumber}>
          <View style={styles.likenumberview}>
            <Text style={{ color: "white" }}> {inventory.reactions}</Text>
          </View>
          <View style={styles.likebuttonView}>
            <TouchableOpacity
              style={styles.opacity}
              activeOpacity={1.0}
              onPress={isFavorite ? onUnLikePress : onLikePress}
            >
              <Image
                style={isFavorite ? styles.likeButton : styles.unLikeButton}
                source={
                  isFavorite
                    ? require("../images/blackheart.png")
                    : require("../images/heart.png")
                }
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  readMoreView: {
    flex: 1,
    flexDirection: "row",
  },

  heartandnumber: {
    justifyContent: "space-evenly",
    flexDirection: "row-reverse",
  },
  likenumberview: {
    marginTop: 10,
  },
  readMoreBtn: {
    textAlign: "center",
    justifyContent: "center",
    width: 95,
    borderRadius: 3,
    color: "black",
    backgroundColor: "#f4f4f4",
    borderWidth: 1,
    borderColor: "#63ae59",
    fontFamily: "Gill Sans",
    padding: 8,
    // paddingTop: 0.25,
    // paddingBottom: 0.25,
  },

  storyContainer: {
    borderWidth: 1,
    borderColor: "white",
    marginBottom: 10,
    padding: 10,
  },
  title: {
    color: "white",
    fontFamily: "Gill Sans",
    fontWeight: "bold",
    fontSize: 18,
  },

  body: {
    color: "white",
    fontFamily: "Gill Sans",
    fontSize: 17,
    marginTop: 7,
  },
  tags: {
    color: "white",
    fontFamily: "Gill Sans",
    fontSize: 17,
  },
  extraMargin: {
    marginTop: 7,
    color: "white",
    fontFamily: "Gill Sans",
    fontSize: 17,
    marginBottom: 20,
  },

  noMargin: {
    marginTop: 7,
    color: "white",
    fontFamily: "Gill Sans",
    fontSize: 17,
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
  likebuttonView: {
    width: 41,
    height: 35,
  },
  opacity: {
    alignItems: "center",
    flex: 1,
  },
});

export default Story;
