import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  StatusBar,
} from "react-native";
import { Tag } from "./tag";

export default DoctorCard = ({ doctorDetails }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image
          style={styles.profileImage}
          source={require("../../assets/doc1.png")}
        ></Image>
      </View>

      <View style={styles.docterDetailContainer}>
        <Text style={styles.doctorName}>{doctorDetails?.name}</Text>
        <Text style={styles.doctorSpecialization}>
          {doctorDetails?.speciality}
        </Text>
        <Tag text={doctorDetails?.status} type="active" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    color: "black",
    backgroundColor: "#fff",
    borderRadius: 7,
    padding: 15,
    width: 320,
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
  profileImageContainer: {},
  profileImage: {
    height: 75,
    width: 75,
  },
  docterDetailContainer: {
    // display: 'flex'
    rowGap: 3,
  },
  doctorName: {
    fontFamily: "Gilroy-Medium",
    fontWeight: "700",
    fontSize: 18,
  },
  doctorSpecialization: {
    fontFamily: "Gilroy-Light",
    fontSize: 14,
  },
  activeSymbol: {
    color: "#0EBE7F",
    backgroundColor: "#90ee90",
    width: 60,
    textAlign: "center",
    height: 22,
    borderRadius: 5,
  },
});
