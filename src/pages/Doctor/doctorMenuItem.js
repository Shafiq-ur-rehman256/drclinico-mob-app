import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import PatientInfoCard from "../../components/patientInfoCard";

export default ScheduledAppointments = ({ route }) => {
  const { from } = route.params;
  const data = [
    {
      key: 1,
      pt_name: "Jon Snow",
      appointment_details: {
        date: "2024-01-10",
        startTime: "10:00",
        endTime: "11:00",
      },
      status: "expired",
      profile_pic: require("../../../assets/patientImg1.png"),
    },
    {
      key: 2,
      pt_name: "Ethan Turner",
      appointment_details: {
        date: "2024-01-10",
        startTime: "10:00",
        endTime: "11:00",
      },
      status: "active",
      profile_pic: require("../../../assets/patientImg1.png"),
    },
    {
      key: 3,
      pt_name: "Eva Snow",
      appointment_details: {
        date: "2024-01-10",
        startTime: "10:00",
        endTime: "11:00",
      },
      status: "pending",
      profile_pic: require("../../../assets/patientImg1.png"),
    },
    {
      key: 4,
      pt_name: "Caleb Turner",
      appointment_details: {
        date: "2024-01-10",
        startTime: "10:00",
        endTime: "11:00",
      },
      status: "expired",
      profile_pic: require("../../../assets/patientImg1.png"),
    },
    {
      key: 5,
      pt_name: "Isabella Nelson",
      appointment_details: {
        date: "2024-01-10",
        startTime: "10:00",
        endTime: "11:00",
      },
      status: "active",
      profile_pic: require("../../../assets/patientImg1.png"),
    },
    {
      key: 6,
      pt_name: "Jon Williams",
      appointment_details: {
        date: "2024-01-10",
        startTime: "10:00",
        endTime: "11:00",
      },
      status: "pending",
      profile_pic: require("../../../assets/patientImg1.png"),
    },
  ];

  const filteredData = data.filter((item) => {
    if (from === "scheduled_appointments") {
      return item.status === "pending";
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
          {filteredData.map((appointment) => (
            <PatientInfoCard appointmentInfo={appointment} />
          ))}
        </View>
      </View>
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
});
