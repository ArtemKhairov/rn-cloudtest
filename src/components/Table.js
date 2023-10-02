import React, { useCallback } from "react";
import { FlatList, StyleSheet } from "react-native";
//
import CoinItem from "./CoinItem";
import TableHeader from "./TableHeader";
import AppLoader from "../modules/loader/Loader";

const Table = ({ data }) => {
  const renderItem = useCallback(({ item }) => <CoinItem item={item} />, []);
  const keyExtractor = (item) => item?.symbol;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListFooterComponent={null}
      ListHeaderComponent={<TableHeader text="Crypto" />}
      ListHeaderComponentStyle={styles.tableHeader}
      ListEmptyComponent={<AppLoader />}
      windowSize={6}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
  },
  tableHeader: {
    marginBottom: 10,
  },
});

export default Table;
