import { StyleSheet, TextInput, SafeAreaView, Button } from "react-native";
import React from "react";

interface SearchSectionProps {
  input: string;
}

const SearchSection = (props: SearchSectionProps) => {
  const [input, setInput] = React.useState<string>("");

  //handel click on search-button
  const handleOnClick = (ev: any) => {
    //prevent refreash caused by form

    setInput(props.input);
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.text_input_field}
        onChangeText={(e) => {
          handleOnClick;
        }}
        value={props.input}
        placeholder="Search..."
        placeholderTextColor="#D3D3D3"
      />
      <Button onPress={handleOnClick} title="Search" color="#841584" />
    </SafeAreaView>
  );
};

export default SearchSection;

const styles = StyleSheet.create({
  text_input_field: {
    height: 40,
    margin: 12,
    padding: 10,
    borderColor: "#FFF",
    borderWidth: 1,
  },
});
