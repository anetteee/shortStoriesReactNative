import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { DECREASE_REACTION, INCREMENT_REACTION } from "../Queries";
import { StoryProps } from "../Types";
import { useRecoilState } from "recoil";
import { View, Text, Button, StyleSheet, TouchableOpacity, Image} from "react-native";


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
  }
  /**
   * Help method for decreasing reactions in database. 
   */
  const onUnLikePress = async () => {
    decreaseReaction({ variables: { decreaseReactionsId: inventory.id } });
    setIsFavorite(false);
  }

  return (
    <View>
      <Text>{inventory.title}</Text>
      {readMore ? (
        <>
          <View>
            <Text>
              {inventory.body}
            </Text>
            <Text>
              Tags: {inventory.tags[0]}, {inventory.tags[1]}
            </Text>
            {inventory.tags[2] ? <Text>, {inventory.tags[2]}</Text> : ""}
          </View>
        </>
      ) : (
        <Text>{inventory.body.substring(0, 100)}...</Text>
      )}
      <View>
        <View>
          <Button
            onPress={() => setReadMore(!readMore)}
            title={readMore ? "Read less" : "Read more"}
          />
        </View>
        <View>
          <View style={styles.likebuttonView}>
           <TouchableOpacity style={styles.opacity} activeOpacity={1.0} onPress={isFavorite? onUnLikePress: onLikePress}>
              <Image style={isFavorite? styles.likeButton: styles.unLikeButton} 
                source={isFavorite? require('../images/redHeart.png') : require('../images/heart.png')}></Image>
            </TouchableOpacity>
          </View>
          <Text> {inventory.reactions}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  likeButton: {
    width: 42,
    height: 38, 
  },
  unLikeButton: {
    width: 45,
    height: 40, 
  },
  likebuttonView: {
    width: 45,
    height: 46, 
  },
  opacity: {
    alignItems: 'center',
    flex: 1,
  }
});

export default Story;
