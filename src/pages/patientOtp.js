import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
// import OTPInputView from '@twotalltotems/react-native-otp-input';
import { PrimaryButton } from "../components/primaryButton";
import { docVerifyOtp, verifyOtpPatient } from "../services/api.doctor..service";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { setSnackBar } from "../store/reducers";

export default PatientOtp = ({ navigation, route }) => {

  const [otp_code, setOtp] = useState('')
  const dispatch = useDispatch()
  const { accessControl } = route.params;

  const routeToHome = async() => {

    if (accessControl == 'doctor') {
      
      const email = await AsyncStorage.getItem('doctor_email');

      const payload = {
        otp_code: otp_code,
        email
      }
      console.log(payload);

      const {code, msg} = await docVerifyOtp(payload)

      if (code == 200) {
        dispatch(setSnackBar({ show: true, message: 'Otp sucessfully verified' }))
        // navigation.navigate("MainStack", {
        //   screen: "main",
        //   params: { accessControl: accessControl },
        // });
        navigation.navigate("RegisterStack", { screen: "doctor_login" });
      }
      

    }else{

      const email = await AsyncStorage.getItem('patient_email');

      const payload = {
        otp_code: otp_code,
        email
      }
      console.log(payload);

      const {code, msg} = await verifyOtpPatient(payload)

      if (code == 200) {
        dispatch(setSnackBar({ show: true, message: msg }))
        // navigation.navigate("MainStack", {
        //   screen: "main",
        //   params: { accessControl: accessControl },
        // });
        navigation.navigate("RegisterStack", { screen: "patient_login" });
      }

    }

  };

  onChangeOtp = (value) =>{
    setOtp(value)
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/drlogo.png")}
        ></Image>
      </View>

      <View style={styles.heading}>
        <Text style={styles.mainHeading}>Your Code</Text>
        <Text style={styles.primaryHeading}>Code send to your email</Text>
      </View>

      <View style={styles.otpContainer}>
        <TextInput
          style={styles.input}
          maxLength={5}
          // onBlur={onBlur}
          placeholder="X-X-X-X-X"
          onChangeText={value => onChangeOtp(value)}
          // value={value}
        />
      </View>

      <View style={styles.bottomText}>
        <Text style={styles.part1}>Resend Code?</Text>
        <Text style={styles.part2}>Click here</Text>
      </View>

      <View style={styles.bottomBtn}>
        <PrimaryButton
          prop={{ text: "Verify", onPress: routeToHome }}
        ></PrimaryButton>
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
    marginTop: 50,
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
  otpContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "#EFF2F1",
    height: 45,
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 16,
    marginTop: 20,
    textAlign: "center",
  },
  underlineStyleBase: {
    width: 50,
    height: 50,
    borderWidth: 0,
    backgroundColor: "#EFF2F1",
    color: "#1C1F1E",
    fontWeight: "900",
    fontSize: 20,
    // borderBottomWidth: 1,
  },
  bottomBtn: {
    marginTop: 40,
  },
  bottomText: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: 'center',
    // alignItems: 'center',
    columnGap: 5,
    width: "80%",
    marginTop: 20,
  },
  part1: {
    color: "#A7A6A5",
    fontSize: 16,
  },
  part2: {
    color: "#2FC1FF",
    fontSize: 16,
  },
});
