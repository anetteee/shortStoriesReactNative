import {
  StyleSheet,
  TextInput,
  View,
  Text,
  SafeAreaView,
  Button,
  Pressable,
} from "react-native";
import React from "react";
import { useRecoilState } from "recoil";
import { inputState } from "../states/inputState";
import { pageNumberState } from "../states/pageNumberState";
import { text } from "../styles/theme";
import { wrappers } from "../styles/containers";
import { containers } from "../styles/containers";
import { buttons } from "../styles/buttons";
import { styles } from "../styles/SearchInput";

export default function SearchInput() {
  const [input, setInput] = useRecoilState(inputState);
  const [inputText, setInputText] = React.useState<string>("");
  const [pageNumber, setPageNumber] = useRecoilState(pageNumberState);

  //handel click on search-button
  const handleOnClick = (ev: any) => {
    setPageNumber(1);
    setInput(inputText);
    //prevent refreash caused by form
  };

  return (
    <View style={containers.searchContainer}>
      <Text style={text.label}>Search by title</Text>
      <TextInput
        style={styles.inputField}
        onChangeText={(newText) => setInputText(newText)}
        defaultValue={inputText}
        // value={input}
        placeholder="Search..."
        placeholderTextColor="#D3D3D3"
      />
      <Pressable style={buttons.searchBtn} onPress={handleOnClick}>
        <Text style={text.h3}>Search</Text>
      </Pressable>
    </View>
  );
}
