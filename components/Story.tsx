import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { DECREASE_REACTION, INCREMENT_REACTION } from "../Queries";
import { StoryProps } from "../Types";
import { useRecoilState } from "recoil";
import { View, Text, Button, StyleSheet } from "react-native";
import { Checkbox } from "react-native-paper";

const Story: React.FC<StoryProps> = ({ inventory }) => {
  const [readMore, setReadMore] = useState(false);

  /*Mutation is used to increase/decrease reactions (likes) 
  and the UI is updated when the action of liking/unliking is done.*/
  const [isFavorite, setIsFavorite] = useState(false);
  const [increaseReaction] = useMutation(INCREMENT_REACTION);
  const [decreaseReaction] = useMutation(DECREASE_REACTION);

  const handleChange = (e: boolean) => {
    setIsFavorite(e);
    if (e === true) {
      increaseReaction({ variables: { incrementReactionsId: inventory.id } });
    } else {
      decreaseReaction({ variables: { decreaseReactionsId: inventory.id } });
    }
  };

  return (
    <View>
      <Text>{inventory.title}</Text>
      {readMore ? (
        <>
          <View>
            <Text style={readMoreStyle.container}>{inventory.body}</Text>

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
          <View>
            <Text>Like</Text>
            <Checkbox
              status={isFavorite ? "checked" : "unchecked"}
              onPress={() => handleChange(!isFavorite)}
            />
            <Text> {inventory.reactions}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const readMoreStyle = StyleSheet.create({
  container: {
    //margin: {readMore ? "p-extra-margin" : "p-no-margin"},
  },
});

export default Story;
