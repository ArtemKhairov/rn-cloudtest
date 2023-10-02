import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
//
import { COLORS } from "../../constants/colors";

const AppLoader = (props) => {
  return (
    <View style={{ ...styles.center, ...props.style }}>
      <ActivityIndicator
        size="large"
        color={props.actColor ?? COLORS.MAIN_WHITE}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppLoader;
