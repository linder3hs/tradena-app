import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { Table, Row } from "react-native-table-component";

interface Props {
  data: any;
}

const CustomTable: FC<Props> = ({ data }) => {
  return (
    <Table>
      <Row
        style={styles.head}
        textStyle={styles.headText}
        data={data.tableHead}
      />
      {data.tableData.map((row: any, index: number) => (
        <Row
          key={index}
          style={index % 2 === 0 ? styles.body : styles.bodyInit}
          textStyle={styles.bodyText}
          data={row}
        />
      ))}
    </Table>
  );
};

export default CustomTable;

const styles = StyleSheet.create({
  head: {
    marginBottom: 10,
  },
  headText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  body: {
    padding: 12,
    borderRightWidth: 0,
    borderStyle: "solid",
    borderColor: "#616161",
    backgroundColor: "#fff",
  },
  bodyInit: {
    padding: 12,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  bodyText: {
    fontSize: 14,
    color: "#616161",
    padding: 6,
  },
});
