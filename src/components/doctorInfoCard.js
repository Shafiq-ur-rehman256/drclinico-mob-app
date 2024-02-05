import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  StatusBar,
} from "react-native";

export default DoctorInfoCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image
          style={styles.profileImage}
          source={require("../../assets/doc1.png")}
        ></Image>
      </View>

      <View style={styles.docterDetailContainer}>
        <View style={styles.doctorNameRow}>
          <Text style={styles.doctorName}>Dr. Pediatrician</Text>
          <Text style={styles.activeSymbol}>Active</Text>
        </View>

        <Text style={styles.doctorSpecialization}>Specialist Cardiologist</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    // flexDirection: "row",
    alignItems: "center",
    color: "black",
    backgroundColor: "#fff",
    borderRadius: 7,
    paddingTop: 0,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    width: "80%",
    height: 250,
    // columnGap: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  profileImageContainer: {},
  profileImage: {
    // height: 95,
    width: 307,
    height: 160,
  },
  docterDetailContainer: {
    // display: 'flex'
    // rowGap: 3,
    marginTop: 20,
    width: "100%",
  },
  doctorName: {
    fontFamily: "Gilroy-Medium",
    fontWeight: "700",
    fontSize: 18,
  },
  doctorSpecialization: {
    fontFamily: "Gilroy-Light",
    fontSize: 14,
    marginTop: 15,
  },
  activeSymbol: {
    color: "#0EBE7F",
    backgroundColor: "#90ee90",
    width: 60,
    textAlign: "center",
    height: 22,
    borderRadius: 5,
  },
  doctorNameRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
