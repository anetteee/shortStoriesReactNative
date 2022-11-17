import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { DECREASE_REACTION, INCREMENT_REACTION } from "../Queries";
import { StoryProps } from "../Types";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../styles/Story";

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
    <View style={styles.parentView}>
      <Text style={styles.title}>{inventory.title}</Text>
      {readMore ? (
        <>
          <View style={styles.textView}>
            <Text style={styles.text}>{inventory.body}</Text>
            <Text style={styles.text}>
              Tags: {inventory.tags[0]}, {inventory.tags[1]}
            </Text>
            {inventory.tags[2] ? (
              <Text style={styles.text}>, {inventory.tags[2]}</Text>
            ) : (
              ""
            )}
          </View>
        </>
      ) : (
        <Text style={styles.text}>{inventory.body.substring(0, 100)}...</Text>
      )}
      <View style={styles.bottomView}>
        <View style={styles.readMoreView}>
          <TouchableOpacity
            style={styles.readMoreBtn}
            onPress={() => setReadMore(!readMore)}
          >
            <Text>{readMore ? "Read less" : "Read more"}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.heartAndNumberView}>
          <View style={styles.numberView}>
            <Text style={styles.text}> {inventory.reactions}</Text>
          </View>
          <TouchableOpacity
            activeOpacity={1.0}
            onPress={isFavorite ? onUnLikePress : onLikePress}
          >
            <Image
              style={styles.heartBtn}
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
  );
};

export default Story;
