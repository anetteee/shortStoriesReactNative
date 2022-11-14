import { StyleSheet, TextInput, SafeAreaView, Button } from "react-native";
import React from "react";
import { useRecoilState } from "recoil";
import { inputState } from "../states/inputState";

export default function SearchInput() {
  const [input, setInput] = useRecoilState(inputState);
  const [inputText, setInputText] = React.useState<string>("");
  //handel click on search-button
  const handleOnClick = (ev: any) => {
    setInput(inputText);
    //prevent refreash caused by form
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.text_input_field}
        onChangeText={(newText) => setInputText(newText)}
        defaultValue={inputText}
        // value={input}
        placeholder="Search..."
        placeholderTextColor="#D3D3D3"
      />
      <Button onPress={handleOnClick} title="Search" color="#841584" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text_input_field: {
    height: 40,
    margin: 12,
    padding: 10,
    borderColor: "#FFF",
    borderWidth: 1,
  },
});
