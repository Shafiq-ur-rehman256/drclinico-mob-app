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
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.mainHeading}>My Appointment</Text>
      </View>
      <View style={styles.logoContainer2}>
        <View style={styles.logoContainer}>
          <DoctorInfoCard selectedDoctor={selectedDoctor}> </DoctorInfoCard>
        </View>
        <View style={styles.aboutMe}>
          <View style={styles.aboutMeHeading}>
            <Text style={styles.aboutMeHeadingText}>About Me</Text>
          </View>
          <View>
            <Text style={styles.description}>{'Notice how componentDidMount and componentWillUnmount need to mirror each other. Lifecycle methods force us to split this logic even though conceptually code in both of them is related to the same effect.'}</Text>
          </View>
        </View>
        <View style={styles.bottomBtn}>
          <PrimaryButton prop={{ text: "Start Chat" }}></PrimaryButton>
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
    backgroundColor: "#fff",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 50,
    width: "100%",
  },
  logoContainer2: {
    height: "100%",
    width: "100%",
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  heading: {
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
    width: "80%",
    marginTop: 60,
    marginLeft: 45,
    fontSize: 24,
  },
  aboutMeHeading: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    fontWeight: "700",
    marginBottom: 10,
  },
  aboutMeHeadingText: {
    fontFamily: "Gilroy-SemiBold",
    fontSize: 20,
  },
  description: {
    color: "#878787",
  },
  bottomBtn: {
    alignItems: "center",
    marginTop: 80,
  },
});
