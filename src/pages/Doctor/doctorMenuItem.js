import { View, Text, Image, TextInput, StyleSheet, Pressable } from "react-native";
import PatientInfoCard from "../../components/patientInfoCard";
import { useEffect, useState } from "react";
import { patientsAppointmentList } from "../../services/api.doctor..service";
import SimpleModal from '../../components/modal'
import { Entypo } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import { deSelectChat, triggerStartAppointment } from "../../store/doctorReducer";

export default ScheduledAppointments = ({navigation, route }) => {

  console.log(route);
  const dispatch = useDispatch()
  const state = useSelector(state => state.doctorState.chatScreen);
  // console.log(state);
  // console.log("APP STATE",state);
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [patient, setPatient] = useState({});
  const [appointment, setAppointment] = useState({});

  const { from } = route.params;

  const appointmentList = async () => {

    const response = await patientsAppointmentList();

    let temp = response.data.map((ele) => {
      return {
        key: ele.id,
        pt_name: ele.patient.full_name,
        appointment_details: {
          date: ele.scheduled_date,
          slot_time: ele.selected_slot_time,
        },
        status: ele.status,
        profile_pic: require("../../../assets/patientImg1.png"),
        patient: ele.patient
      }
    })

    setData(temp)


  }

  useEffect(()=>{

    if (state.selected_Conversation) {
      setModalVisible(false);
      console.log("BEFORE NAVIGATION",state.selected_Conversation);
      navigation.navigate('DoctorStack', {
        screen: 'chat_box',
        params: { convo: state.selected_Conversation, accessControl: "doctor" },
      })
      // dispatch(deSelectChat()); 
    }

    return () =>{
      appointmentList()
    }

  }, [state.selected_Conversation])
  

  useEffect(() => {

    appointmentList()

  }, []);

  const startAppointment = async () => {
    dispatch(triggerStartAppointment({appointment_id: appointment.key}));
  }

  const startChat = async (appointment) => {
    setPatient(appointment.patient);
    setModalVisible(true);
    setAppointment(appointment);
  }

  // console.log(data);
  const filteredData = data.filter((item) => {
    if (from === "scheduled_appointments") {
      return item.status === "PENDING";
    } else if (from === "past_patients") {
      return item.status === "expired";
    } else if (from === "waiting_users") {
      return item.status === "active";
    } else {
      return true;
    }
  });
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
            <Text style={styles.text1}>Hello, Welcome</Text>
            <Text style={styles.text2}>Anonymus</Text>
          </View>
        </View>
        <View style={styles.searchContainer}>
          <Image
            style={styles.searchIcon}
            source={require("../../../assets/searchIcon.png")}
          ></Image>
          <TextInput
            style={styles.searchInput}
            placeholderTextColor="#D6D6D6"
            placeholder="Search Patient....."
          ></TextInput>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.doctorList}>
          {filteredData.map((appointment, index) => (
            <Pressable key={index} onPress={() => startChat(appointment)}>
              <PatientInfoCard appointmentInfo={appointment} />
            </Pressable>
          ))}
        </View>
      </View>
      <SimpleModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        children={
          <View style={styles.StartChatModal}>
            <Text style={styles.smallText}>Are you sure want to start appointment with <Text style={{ color: 'black', fontWeight: '900' }}>{patient.full_name}</Text></Text>
            <Pressable style={styles.clossModal} onPress={()=> setModalVisible(false)}>
              <Entypo name="cross" size={24} color="black" />
            </Pressable>
            <Pressable style={styles.startChatBtn} onPress={() => startAppointment()}>
              <Text style={styles.btnText}>Start</Text>
            </Pressable>
          </View>
        }
      />
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
    height: "25%",
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
  searchInput: {
    width: "80%",
    color: "#D6D6D6",
  },
  body: {
    height: "70%",
    backgroundColor: "#F4F6F5",
    display: "flex",
    alignItems: "center",
  },
  doctorList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "8%",
    rowGap: 15,
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
  StartChatModal: {
    width: '90%',
    height: '30%',
    backgroundColor: '#fff',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
    position: 'relative'
  },
  smallText: {
    fontFamily: "Gilroy-SemiBold",
    color: '#A7A6A5',
    fontSize: 17,
    textAlign: 'center',
    width: '80%'
  },
  clossModal:{
    position: 'absolute',
    top: 5,
    right: 5
  },
  startChatBtn:{
    backgroundColor: '#2FC1FF',
    width: '50%',
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: "Gilroy-SemiBold"
  }
});
