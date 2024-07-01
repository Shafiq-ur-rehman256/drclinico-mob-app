import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  StatusBar,
  ScrollView,
  Button,
  Pressable
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { PrimaryButton } from "../../components/primaryButton";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { getAvailableSlot, updateAvailableSlot } from "../../services/api.doctor..service";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default PatientProfile = ({ navigation, route }) => {
  
  
  const {
    control,
    formState: { errors },
  } = useForm();

  const { accessControl } = route.params.data;


  const logout = async () => {

    console.log("run");
    const user = JSON.parse(await AsyncStorage.getItem('user'));
    console.log(user);
    if (user.accessControl == 'patient') {
      await AsyncStorage.removeItem('user');
      navigation.navigate("RegisterStack", { screen: "patient_login" });
    }


  }



  return (
    <View style={styles.container}>
      <ScrollView scrollEnabled={true}>
        <View style={styles.header}>
          <View style={styles.welcomeNoteContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.text1}>Set up your profile</Text>
              <Text style={styles.text2}>
                {`Update your profile to connect with your ${accessControl === "doctor" ? "patients" : "doctors"
                  } with better impression.`}
              </Text>
            </View>
            <View style={styles.avatarContainer}>
              <View style={styles.uploadImageIconContainer}>
                <Image
                  style={styles.uploadImageIcon}
                  source={require("../../../assets/camera.png")}
                />
              </View>
              <Image
                style={styles.welcomeAvatar}
                source={require("../../../assets/patient1.png")}
              ></Image>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <Text style={styles.heading}>Personal Information</Text>
          <View style={styles.form}>
            <View style={styles.formElement}>
              <Text style={styles.label}>Full Name</Text>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    placeholder="Jan Kowalski"
                    onChangeText={(value) => onChange(value)}
                    value={value}
                  />
                )}
                name="fullname"
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
                    onBlur={onBlur}
                    placeholder="111-111-111"
                    onChangeText={(value) => onChange(value)}
                    value={value}
                  />
                )}
                name="phoneNumber"
                rules={{ required: true }}
              />
            </View>
            <View style={styles.formElement}>
              <Text style={styles.label}>Date of Birth</Text>
              <View style={styles.label} ></View>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    placeholder="DD MM YYYY"
                    onChangeText={(value) => onChange(value)}
                    value={value}
                  />
                )}
                name="phoneNumber"
                rules={{ required: true }}
              />
            </View>
            <View style={styles.bottomBtn}>
              <PrimaryButton prop={{ text: "Logout", onPress:  logout }}></PrimaryButton>
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#2FC1FF"></StatusBar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "black",
    backgroundColor: "#F4F6F5",
    // paddingBottom: 10
  },
  header: {
    height: "25%",
    backgroundColor: "#2FC1FF",
    padding: 10,
    rowGap: 15,
    marginTop: "7%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  heading: {
    fontFamily: "Gilroy-SemiBold",
    fontSize: 18,
    color: "#000",
    marginBottom: 15,
  },
  welcomeNoteContainer: {
    marginTop: 30,
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    columnGap: 15,
  },
  welcomeAvatar: {
    width: 120,
    height: 120,
  },
  textContainer: {
    textAlign: "center",
    marginBottom: 20,
  },
  text1: {
    fontFamily: "Gilroy-Bold",
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
  },
  text2: {
    fontFamily: "Gilroy-SemiBold",
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  searchContainer: {
    borderColor: "#D6D6D6",
    borderWidth: 1,
    width: "80%",
    height: 50,
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
    columnGap: 10,
  },
  searchIcon: {
    width: 25,
    height: 25,
  },
  doctorList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "10%",
    rowGap: 15,
  },
  uploadImageIcon: {
    width: 25,
    height: 25,
    backgroundColor: "#000",
    opacity: 0.5,
    borderRadius: 50,
    padding: 10,
  },
  avatarContainer: {
    position: "relative",
    width: 120,
    height: 120,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  welcomeAvatar: {
    width: "100%",
    height: "100%",
  },
  uploadImageIconContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    backgroundColor: "rgba(128, 128, 128, 0.8)",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    marginBottom: 5,
  },
  uploadImageIcon: {
    width: 20,
    height: 20,
    opacity: 0.8,
  },
  body: {
    marginTop: 40,
    // marginBottom: 15,
    padding: 20,
    display: "flex",
    justifyContent: "center",
  },
  form: {
    marginTop: "5%",
    display: "flex",
    rowGap: 10,
    marginBottom: '20%'
  },
  formElement: {
    display: "flex",
    rowGap: 5,
    marginBottom: 10,
  },
  formElement2: {
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
    marginBottom: 10,
    // borderColor: 'red',
    // borderWidth: 1
  },
  label: {
    color: "#A7A6A5",
    fontSize: 15,
    fontFamily: "Gilroy-SemiBold",
  },
  slotLabel: {
    color: "#A7A6A5",
    fontSize: 15,
    fontFamily: "Gilroy-SemiBold",
    // fontWeight: '900'
  },
  input: {
    backgroundColor: "#EFF2F1",
    height: 45,
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 16,
  },
  availableSlots: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: 10

  },
  bottomBtn: {
    marginTop: 10,
    // marginBottom: 10,
    alignItems: "center",
  },
  timeBtnContainer: {
    alignItems: 'center',
    width: 90,
  },
  timeBtnText: {
    color: '#2FC1FF',
    fontWeight: '800',
    fontFamily: "Gilroy-SemiBold",
  }
});
