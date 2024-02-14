import { StyleSheet, Text, View, Image } from "react-native";

export default DoctorInfoCard = ({ selectedDoctor }) => (
  <View style={styles.container}>
    <View style={styles.profileImageContainer}>
      <Image
        style={styles.profileImage}
        source={require("../../assets/doc1.png")}
      ></Image>
    </View>

    <View style={styles.docterDetailContainer}>
      <View style={styles.doctorNameRow}>
        <Text style={styles.doctorName}>{selectedDoctor.name}</Text>
        <Text style={styles.activeSymbol}>{selectedDoctor.status}</Text>
      </View>

      <Text style={styles.doctorSpecialization}>
        {selectedDoctor.speciality}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
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
    width: 307,
    height: 160,
  },
  docterDetailContainer: {
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
