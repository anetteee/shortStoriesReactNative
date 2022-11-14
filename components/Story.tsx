import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { DECREASE_REACTION, INCREMENT_REACTION } from "../Queries";
import { StoryProps } from "../Types";
import { useRecoilState } from "recoil";
import { expandedStoriesListState } from "../states/storyListState";
import { View, Text, Button, StyleSheet, TouchableOpacity, Image} from "react-native";
//import LikeButton from 'expo-like-button';

const Story: React.FC<StoryProps> = ({ inventory }) => {
  /*expandedList is set to the value of the state,
  setExpandedList is set to the function which updates 
  the value of the state when called. */
  const [expandedList, setExpandedList] = useRecoilState(
    expandedStoriesListState
  );
  const index = expandedList.findIndex(
    (listItem) => listItem === inventory._id
  );

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

  /*The list of which stories the user wants to be expanded are updated.
  If the story was expanded its id is removed from the list, 
  and if it was not expanded its id is added to the list.  */
  const updateRecoilList = () => {
    if (expandedList.includes(inventory._id)) {
      setExpandedList((oldExpandedList) => {
        return oldExpandedList.filter((value, i) => {
          return i !== index;
        });
      });
      console.log(expandedList);
    } else {
      setExpandedList((oldExpandedList) => [...oldExpandedList, inventory._id]);
      console.log(expandedList);
    }
  };

  /*readMore is a boolean and is true if 
  the user have expanded the story (identified by an unique id)*/
  const readMore = expandedList.includes(inventory._id);

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
            {inventory.tags[2] ? (
              <Text>
                , {inventory.tags[2]}
              </Text>
            ) : (
              ""
            )}
          </View>
        </>
      ) : (
        <Text>
          {inventory.body.substring(0, 100)}...
        </Text>
      )}
      <View>
        <View>
          <Button
            onPress={() => updateRecoilList()}
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
