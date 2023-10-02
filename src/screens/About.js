import React from "react";
import { StyleSheet, Text, View } from "react-native";
//
import { COLORS } from "../constants/colors";

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>О приложении</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.MAIN_BLACK,
  },
  text: {
    fontSize: 24,
    fontWeight: "800",
    color: COLORS.MAIN_WHITE,
  },
});

export default About;
