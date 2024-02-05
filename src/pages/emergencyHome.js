import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  StatusBar,
} from "react-native";
import DoctorCard from "../components/doctorCard";
import { useState } from "react";

export default EmergencyHome = ({ navigation }) => {
  const [selectedDoctor, setSelectedDoctor] = useState({});

  const doctors = [
    {
      id: 1,
      name: "Dr. Johnn Doe",
      speciality: "Cardiologist",
      rating: 4.5,
      reviews: 20,
      status: "Active",
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      speciality: "Dermatologist",
      rating: 4.2,
      reviews: 15,
      status: "Active",
    },
    {
      id: 3,
      name: "Dr. John Smith",
      speciality: "Orthopedic",
      rating: 4.8,
      reviews: 25,
      status: "Active",
    },
    {
      id: 4,
      name: "Dr. Aly Williams",
      speciality: "Pediatrician",
      rating: 4.6,
      reviews: 18,
      status: "Active",
    },
  ];
  const openDoctorsInfo = (selectedDoctorsId) => {
    console.log(selectedDoctorsId, "selectedDoctorsId");
    const selectedDoctordData = doctors.find(
      (doctor) => doctor.id === selectedDoctorsId
    );
    setSelectedDoctor(selectedDoctordData);
    console.log(selectedDoctordData, "selectedDoctordData");
  };

  const routeTo = (doctorId) => {
    const selectedDoctorData = doctors.find((doctor) => doctor.id === doctorId);
    setSelectedDoctor(selectedDoctorData);
    navigation.navigate("EmergencyStack", {
      screen: "doctor_info",
      params: { selectedDoctor: selectedDoctorData },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.welcomeNoteContainer}>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.welcomeAvatar}
              source={require("../../assets/welcomeAvatar.png")}
            ></Image>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text1}>Hello, Welcome</Text>
            <Text style={styles.text2}>Anonymus</Text>
          </View>
        </View>
        <View style={styles.searchContainer}>
          <Image
            style={styles.searchIcon}
            source={require("../../assets/searchIcon.png")}
          ></Image>
          <TextInput
            style={styles.searchInput}
            placeholderTextColor="#D6D6D6"
            placeholder="Search Doctor....."
          ></TextInput>
        </View>
      </View>
      <View style={styles.doctorList}>
        {doctors.map((doctor) => {
          return (
            <Pressable
              onTouchStart={() => openDoctorsInfo(doctor.id)}
              onPress={() => routeTo(selectedDoctor)}
            >
              <DoctorCard key={doctor.id} doctorDetails={doctor}></DoctorCard>
            </Pressable>
          );
        })}
      </View>
      <StatusBar backgroundColor="#2FC1FF"></StatusBar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "black",
    backgroundColor: "#F4F6F5",
  },
  header: {
    height: "30%",
    backgroundColor: "#2FC1FF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 15,
    // padding: ,
    marginTop: "7%",
  },
  welcomeNoteContainer: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    flexDirection: "row",
    width: "80%",
    columnGap: 15,
    // marginTop:
  },
  avatarContainer: {},
  welcomeAvatar: {
    width: 60,
    height: 60,
  },
  textContainer: {},
  text1: {
    fontFamily: "Gilroy-SemiBold",
    color: "#fff",
    fontSize: 20,
  },
  text2: {
    fontFamily: "Gilroy-Bold",
    color: "#fff",
    fontSize: 20,
    fontWeight: "800",
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
  searchInput: {},
  doctorList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10%",
    rowGap: 15,
  },
});
