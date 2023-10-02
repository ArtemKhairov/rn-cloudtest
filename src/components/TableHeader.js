import React from "react";
import { StyleSheet, View, Text } from "react-native";
//
import { COLORS } from "../constants/colors";

const TableHeader = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tableHeader}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 10,
  },
  tableHeader: {
    fontSize: 24,
    fontWeight: "800",
    color: COLORS.MAIN_WHITE,
  },
});

export default TableHeader;
