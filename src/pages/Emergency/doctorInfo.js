import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { PrimaryButton } from "../../components/primaryButton";
import {
  useForm,
  Controller,
  SubmitErrorHandler,
  UseFormGetValues,
} from "react-hook-form";
import DoctorInfoCard from "../../components/doctorInfoCard";

export default DoctorInfo = ({ route }) => {
  const { selectedDoctor } = route.params;
  console.log(selectedDoctor, "selectedDoctorCard");
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.mainHeading}>My Appointment</Text>
      </View>
      <View style={styles.logoContainer}>
        <DoctorInfoCard> </DoctorInfoCard>
      </View>
      <View style={styles.logoContainer}>
        <DoctorInfoCard> </DoctorInfoCard>
      </View>

      <View style={styles.aboutMe}>
        <View style={styles.aboutMeHeading}>
          <Text style={styles.aboutMeHeadingText}>About Me</Text>
        </View>
      </View>

      <StatusBar backgroundColor="#fff"></StatusBar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: 'center',
    backgroundColor: "#fff",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 50,
    height: "100%",
    width: "100%",
  },
  logo: {
    width: 40, // Set the desired width
    height: 40, // Set the desired height
    resizeMode: "contain", // Adjust the resizeMode based on your preference
  },
  heading: {
    // flex: 1,
    alignItems: "center",
    marginTop: 40,
    rowGap: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  mainHeading: {
    fontFamily: "Gilroy-SemiBold",
    fontSize: 30,
    textAlign: "center",
  },
  primaryHeading: {
    color: "#A7A6A5",
    textAlign: "center",
    fontSize: 18,
  },
  aboutMe: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
    backgroundColor: "#F4F6F5",
  },
  aboutMeHeading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  aboutMeHeadingText: {
    fontFamily: "Gilroy-SemiBold",
    fontSize: 20,
  },
});
