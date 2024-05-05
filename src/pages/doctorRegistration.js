import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { PrimaryButton } from "../components/primaryButton";
import {
  useForm,
  Controller,
} from "react-hook-form";
import { doctorSignUp } from "../services/api.doctor..service";
import { setSnackBar } from "../store/reducers";
import { useDispatch } from 'react-redux'
import { ErrorMessage } from "@hookform/error-message"
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default DoctorRegistration = ({ navigation }) => {

  const [formError, setFormError] = useState({show: true, message: ''})
  const dispatch = useDispatch()
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(()=>{

    if (Object.keys(errors).length) {
      setFormError({show: true, message: 'Please provide all required fields'})
    }

  }, [errors]);

  console.log("errors =============",errors);

  const onSubmit = async (data) => {

    const { code, msg } = await doctorSignUp(data)
    if (code == 200) {
      await AsyncStorage.setItem('doctor_email', data.email)
      dispatch(setSnackBar({ show: true, message: 'Check your email for Otp' }))
      routeToOtp()
    }

  };

  routeToOtp = () => {
    navigation.navigate("RegisterStack", {
      screen: "patient_otp",
      params: { accessControl: "doctor" },
    });
  };

  routeToLogin = () => {
    navigation.navigate("RegisterStack", { screen: "doctor_login" });
  }

  return (
    <View style={styles.container}>
      <ScrollView scrollEnabled={true} contentContainerStyle={{ alignItems: 'center' }}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/drlogo.png")}
        ></Image>
      </View>

      <View style={styles.heading}>
        <Text style={styles.mainHeading}>Sign Up</Text>
        {formError.show && <Text style={styles.formError}>{formError.message}</Text>}
      </View>

      <View style={styles.form}>
        <View style={styles.formElement}>
          <Text style={styles.label}>Full Name</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                // onBlur={onBlur}
                placeholder="Jan Kowalski"
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="full_name"
            rules={{ required: 'Full name is required' }}
          />
        </View>

        <View style={styles.formElement}>
          <Text style={styles.label}>Email</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="abc@example.com"
                // onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="email"
            rules={{ required: true }}
          />
        </View>

        <View style={styles.formElement}>
          <Text style={styles.label}>CNIC</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                // onBlur={onBlur}
                placeholder="xxxx-xxxxx-xxxx-x"
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="cnic"
            rules={{ required: true }}
          />
        </View>

        <View style={styles.formElement}>
          <Text style={styles.label}>Phone Number</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                // onBlur={onBlur}
                placeholder="111-111-111"
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="phone_number"
            rules={{ required: true }}
          />
        </View>

        <View style={styles.GroupElement}>
          <View style={{ ...styles.formElement, width: "50%" }}>
            <Text style={styles.label}>License Number</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  // onBlur={onBlur}
                  placeholder="1111"
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              )}
              name="license_number"
              rules={{ required: true }}
            />
          </View>

          <View style={{ ...styles.formElement, width: "50%" }}>
            <Text style={styles.label}>Doctor Specialization</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  // onBlur={onBlur}
                  placeholder="cardiologist"
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              )}
              name="specialization"
              rules={{ required: true }}
            />
          </View>
        </View>

        <View style={styles.formElement}>
          <Text style={styles.label}>Password</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                // onBlur={onBlur}
                placeholder="*********"
                onChangeText={(value) => onChange(value)}
                value={value}
                keyboardType="visible-password"
              />
            )}
            name="password"
            rules={{ required: true }}
          />
        </View>
        <View style={styles.bottomBtn}>
          <PrimaryButton
            prop={{ text: "Sign Up", onPress: handleSubmit(onSubmit) }}
          ></PrimaryButton>
        </View>
      </View>


      <View style={styles.bottomText}>
        <Text style={styles.part1}>Already have account?</Text>
        <Pressable onPress={routeToLogin}>
          <Text style={styles.part2}>Sign In</Text>
        </Pressable>
      </View>
      </ScrollView>
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
  form: {
    marginTop: "5%",
    display: "flex",
    width: "90%",
    rowGap: 10,
  },
  GroupElement: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 1,
    justifyContent: "space-between",
    columnGap: 5,
  },
  formElement: {
    display: "flex",
    rowGap: 5,
  },
  formError: {
    color: '#FF0000'
  },
  label: {
    color: "#A7A6A5",
    fontSize: 15,
  },
  input: {
    backgroundColor: "#EFF2F1",
    height: 45,
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 16,
  },
  bottomBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  primaryBtn: {
    backgroundColor: '#2FC1FF',
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 220,
    borderRadius: 18
  },
  bottomText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 5,
    width: "70%",
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
