import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { StyleSheet, Text, View, Platform } from "react-native";
//
import Table from "../components/Table";
//
import { COLORS } from "../constants/colors";
import { RESPONSE } from "../constants/ui";
import { POLONIEX_API } from "../constants/api";
// Mobx
import { observer } from "mobx-react";
import { counterStore } from "../store/store";
//
import Constants from "expo-constants";

const marginTopError =
  Platform.OS === "android" ? Constants.statusBarHeight : null;

const Quotes = observer(() => {
  const [error, setError] = useState(null);
  const data = counterStore.getCoins();

  useFocusEffect(
    useCallback(() => {
      let intervalId;
      const fetchData = async () => {
        try {
          const response = await fetch(`${POLONIEX_API.MARKET}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (response.ok) {
            const coins = await response.json();
            counterStore.setCoins(coins);
            error === RESPONSE.QUOTES_ERROR ? setError(null) : null;
          } else {
            setError(RESPONSE.QUOTES_ERROR);
          }
        } catch (error) {
          console.log(error);
          setError(RESPONSE.QUOTES_ERROR);
        }
      };
      intervalId = setInterval(fetchData, 5000);
      return () => {
        intervalId ? clearInterval(intervalId) : null;
      };
    }, [])
  );
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.error}>{error}</Text>
      </View>
      <Table data={data} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.MAIN_BLACK,
  },
  error: {
    marginTop: marginTopError,
    paddingTop: 2,
    paddingLeft: 10,
    color: COLORS.MAIN_RED,
    fontSize: 20,
  },
});

export default Quotes;
