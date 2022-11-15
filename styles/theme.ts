import { Dimensions, StyleSheet } from "react-native";


  var width = Dimensions.get("window").width; //full width
  //var height = Dimensions.get("window").height; //full height
  
export const text = StyleSheet.create({
    h1: {
        fontSize: 36,
        color: "white",
        alignSelf: "center",
        fontFamily: "GillSans-Bold",
        textAlign: "center",
    },
    h2: {
        fontSize: 20,
        color: "white",
        paddingTop: 10,
        alignSelf: "center"
    }, 
    h3: {

        fontSize: 16,
        color: "black",
        alignSelf: "center"
    },
    label: {
        fontSize: 16,
        color: "white",
        paddingLeft: 10,
        paddingTop: 20,
        paddingBottom: 5,
    }
});

export const theme = {
    colors: {
      bluish: "#256670",
      darkGreen:  "#407056",
      lightGreen: "#63ae59",
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
    textVariants: {
      mainHeader: {
        fontSize: 36,
        fontWeight: "bold",
      },
      body: {
        fontSize: 16,
      },

    }
  };