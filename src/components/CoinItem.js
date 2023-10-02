import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
//
import { COLORS } from "../constants/colors";

const CoinItem = ({ item }) => {
  const delay = 300;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { displayName, markPrice, high, dailyChange } = item;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 700,
      delay,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim, delay]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        ...styles.row,
        ...styles.container,
      }}
    >
      <View style={styles.square}>
        <Text style={{ ...styles.cell, ...styles.cellBold }}>
          {displayName}
        </Text>
        <Text style={styles.cell}>{markPrice}</Text>
      </View>
      <View style={{ ...styles.square }}>
        <Text
          style={{
            ...styles.cell,
            ...styles.cellBold,
            ...styles.cellAlignedRight,
          }}
        >
          {high}
        </Text>
        <Text style={{ ...styles.cell, ...styles.cellAlignedRight }}>
          {dailyChange}
        </Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: "row",
    borderBottomColor: COLORS.SECONDARY_BLACK,
    borderWidth: 1,
  },
  square: {
    flex: 1,
  },
  cell: {
    flex: 1,
    color: COLORS.MAIN_WHITE,
    padding: 10,
  },
  cellBold: {
    fontWeight: "bold",
    fontSize: 18,
  },
  cellAlignedRight: {
    textAlign: "right",
  },
});

export default CoinItem;
