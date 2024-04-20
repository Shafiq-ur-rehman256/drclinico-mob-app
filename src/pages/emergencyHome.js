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
import { useEffect, useState } from "react";
import { activeDoctorList } from "../services/api.doctor..service";

export default EmergencyHome = ({ navigation }) => {
  const [doctors, setDoctors] = useState([]);
  

  
  const getActiveDocList = async() =>{
    
    const response = await activeDoctorList()
    return response.data;
    
  }
  
  useEffect(async()=>{
    const list = await getActiveDocList()
    setDoctors(list)
    
  },[])

  const routeTo = (doctorId) => {
    const selectedDoctorData = doctors.find((doctor) => doctor.id === doctorId);
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
            <Pressable key={doctor.id} onPress={() => routeTo(doctor.id)}>
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
    marginTop: "7%",
  },
  welcomeNoteContainer: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    flexDirection: "row",
    width: "80%",
    columnGap: 15,
  },
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
  doctorList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "10%",
    rowGap: 15,
  },
});
