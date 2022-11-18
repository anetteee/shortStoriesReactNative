import { Dimensions, StyleSheet } from "react-native";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height



export const green = "#407056";
export const blue = "#256670";


export const styles = StyleSheet.create({
    linearGradient: {
        width: width,
        height: height,
    }
    
    

});

