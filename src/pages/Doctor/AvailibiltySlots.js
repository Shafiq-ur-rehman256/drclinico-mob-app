import { Image, Pressable, ScrollView, StatusBar, TextInput } from "react-native";
import { Text, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getDotorAvailiblitySlots } from "../../services/api.doctor..service";
import { Tag } from "../../components/tag";



export default function AvailiblitySlots ({ navigation, route }){

    const [slots, setSlots] = useState([]);
    const [slotsTime, setslotsTime] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const [Doctor, setDoctor] = useState({
        name: 'ssss',
        specialization: 'ssss'
    });

    const setAvailibilitySlot = async (doctor_id) =>{

        const response = await getDotorAvailiblitySlots(doctor_id)
        setSlots(response.data);
        setDoctor(response.data[0].doctor)
    }

    useEffect(()=>{
        setAvailibilitySlot(route.params.doctor_id)
    }, [])

    const bookAppointment = (time) =>{
        setslotsTime(time)
        setModalVisible(true);
        setTimeout(() => {
            setModalVisible(false);
            setslotsTime('')
        }, 2000);
    }
    return (
        <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.welcomeNoteContainer}>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.welcomeAvatar}
              source={require("../../../assets/welcomeAvatar.png")}
            ></Image>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text1}>{Doctor.full_name}</Text>
            <Text style={styles.text2}>{Doctor.specialization}</Text>
          </View>
        </View>
      </View>
      <View style={styles.doctorList}>
        <ScrollView>
        {slots.map((doctor, index) => {
          return (
            <Pressable key={index} onPress={() => bookAppointment(`${doctor.day_name} (${doctor.start} - ${doctor.end})`)}>
              
              <View style={styles.slotBox}>
                <Text style={styles.day_name} >{doctor.day_name}</Text>
                <Text>{doctor.start} - {doctor.end}</Text>
              </View>

            </Pressable>
          );
        })}
        </ScrollView>
      </View>

      <View style={styles.modal}>
        <SimpleModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          children={
            <View style={styles.bookPopup}>
                <Image
                        style={styles.popupImage}
                        source={require('../../../assets/thumbsup.png')}
                    ></Image>
                <Text style={styles.popupHeading}>Appointment Booked</Text>
                <Text style={styles.popupSubText}>{slotsTime}</Text>
            </View>
          }
        />
      </View>

      <StatusBar backgroundColor="#2FC1FF"></StatusBar>
    </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   color: "black",
      backgroundColor: "#fff",
    },
    header: {
      height: "18%",
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
    //   alignItems: "center",
      paddingTop: "10%",
      paddingLeft: '2%',
      paddingRight: '2%',
      rowGap: 15,
    },
    slotBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        marginBottom: '2%',
        borderRadius: 7,
        padding: '5%',
    },
    day_name: {
        color: 'black',
        fontSize: 17,
        fontWeight: '600',
        fontFamily: "Gilroy-SemiBold",
    },
    time: {
        color: 'black',
        fontSize: 14
    },
    modal: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 20,
        width: 20,
    },
    bookPopup: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '90%',
        height: '40%',
        borderRadius: 40,
    },
    popupImage:{
        marginBottom: 20
    },
    popupHeading: {
        color: 'black',
        fontSize: 25,
        fontWeight: '600',
        fontFamily: "Gilroy-SemiBold",
    },
    popupSubText: {
        color: '#A7A6A5',
        fontSize: 14,
        fontWeight: '600',
        marginTop: 10
    }
    
  });
  