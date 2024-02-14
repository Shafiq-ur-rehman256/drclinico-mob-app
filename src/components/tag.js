import { StyleSheet, Text, View } from "react-native";

export const Tag = ({ text, type }) => {
  return type === "active" ? (
    <View>
      <Text style={styles.activeSymbol}>{text}</Text>
    </View>
  ) : (
    <View>
      <Text style={styles.inactiveSymbol}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  activeSymbol: {
    color: "#0EBE7F",
    backgroundColor: "#daf5eb",
    width: 60,
    textAlign: "center",
    height: 22,
    borderRadius: 5,
  },
  inactiveSymbol: {
    color: "#FF5A5F",
    backgroundColor: "#f8d7da",
    width: 60,
    textAlign: "center",
    height: 22,
    borderRadius: 5,
  },
});