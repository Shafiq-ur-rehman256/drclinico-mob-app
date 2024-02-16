import { StyleSheet, Text, View, Image } from "react-native";

export default DoctorCard = ({ type }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.iconImage} source={type.icon}></Image>
      <View style={styles.body}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>{type.title}</Text>
        </View>
        <View>
          <Text style={styles.description}>{type.description}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "columns",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    backgroundColor: "#fff",
    borderRadius: 7,
    padding: 15,
    width: 160,
    height: 120,
    columnGap: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  body: {
    marginTop: 10,
    alignItems: "center",
    textAlign: "center",
  },
  heading: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2FC1FF",
  },
  description: {
    fontSize: 12,
    color: "#A7A6A5",
    textAlign: "center",
  },
});
