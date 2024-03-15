import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import PatientMenuItems from "../../components/patientMenuItems";
import { Tag } from "../../components/tag";
import SimpleModal from "../../components/modal";

export default PatientHome = ({ navigation, prop }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [hasModalBeenShown, setHasModalBeenShown] = useState(false);

  const data = [
    {
      key: 1,
      access: "patient",
      type: "instant_doctor",
      title: "Instant Doctor",
      description: "GP, Psychologists & Nutritionists",
      icon: require("../../../assets/perscription.png"),
    },
    {
      key: 2,
      access: "patient",
      type: "book_appointment",
      title: "Book Appointment",
      description: "Book a doctor for your consultation",
      icon: require("../../../assets/stethoscope.png"),
    },
    {
      key: 3,
      access: "patient",
      type: "instant_doctor",
      title: "Instant Doctor",
      description: "GP, Psychologists & Nutritionists",
      icon: require("../../../assets/perscription.png"),
    },
    {
      key: 4,
      access: "patient",
      type: "book_appointment",
      title: "Book Appointment",
      description: "Book a doctor for your consultation",
      icon: require("../../../assets/stethoscope.png"),
    },
    {
      key: 5,
      access: "doctor",
      type: "scheduled_appointment",
      title: "Scheduled Appointment",
      description: "Your upcoming appointments",
      icon: require("../../../assets/perscription.png"),
    },
    {
      key: 6,
      access: "doctor",
      type: "waiting_users",
      title: "Waiting Users",
      description: "Users waiting for your consultation",
      icon: require("../../../assets/perscription.png"),
    },
    {
      key: 7,
      access: "doctor",
      type: "past_patients",
      title: "Past Patients",
      description: "Your past patients",
      icon: require("../../../assets/perscription.png"),
    },
  ];

  const routeTo = (type) => {
    if (type === "instant_doctor")
      // Navigating the user to Emergency doctors screen when clicked on Instant Doctor
      navigation.navigate("EmergencyStack", { screen: "emergency_home" });
    if (type === "scheduled_appointment") {
      navigation.navigate("DoctorStack", {
        screen: "doctor_menu",
        params: { from: "scheduled_appointments" },
      });
    }
    if (type === "waiting_users")
      navigation.navigate("DoctorStack", {
        screen: "doctor_menu",
        params: { from: "waiting_users" },
      });
    if (type === "past_patients")
      navigation.navigate("DoctorStack", {
        screen: "doctor_menu",
        params: { from: "past_patients" },
      });
  };

  const showModal = () => {
    if (prop.data.accessControl === "doctor" && !hasModalBeenShown) {
      setTimeout(() => {
        setModalVisible(true);
        setHasModalBeenShown(true);
      }, 2000);
    }
  };

  //Uncomment the line below to test the modal
  // showModal();

  const donationRouting = () => {
    navigation.navigate("PatientStack", { screen: "patient_donate" });
  };

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <SimpleModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          children={
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.ptName}>Ethan Turner</Text>
                <Text style={styles.modalDesc}>
                  Pellentesque placerat arcu in risus facilisis, sed laoreet
                  eros laoreet.
                </Text>
                <View style={styles.buttonsList}>
                  <View style={styles.firstRow}>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                      <Tag
                        text="Accept"
                        type="active"
                        customCss={styles.acceptBtn}
                      />
                    </Pressable>
                    <View style={{ width: 20 }}></View>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                      <Tag
                        text="Decline"
                        type="inactive"
                        customCss={styles.declineBtn}
                      />
                    </Pressable>
                  </View>
                  <View style={styles.secondRow}>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                      <Tag
                        text="Wait 5 min"
                        type="inactive"
                        customCss={styles.fiveMin}
                      />
                    </Pressable>
                    <View style={{ width: 10 }}></View>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                      <Tag
                        text="Wait 10 min"
                        type="inactive"
                        customCss={styles.fiveMin}
                      />
                    </Pressable>
                    <View style={{ width: 10 }}></View>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                      <Tag
                        text="Wait 15 min"
                        type="inactive"
                        customCss={styles.fiveMin}
                      />
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          }
        />
      </View>
      <View style={styles.header}>
        <View style={styles.heading}>
          <Text style={styles.mainHeading}>Welcome Back, Anonymus!</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Pellentesque placerat arcu in risus facilisis, sed laoreet eros
            laoreet.
          </Text>
        </View>
        <View style={styles.body}>
          <Pressable onPress={() => donationRouting()}>
            <Image
              style={styles.image}
              source={require("../../../assets/foundation.png")}
            ></Image>
          </Pressable>
          <View style={styles.menu}>
            {data
              .filter((option) => option.access === prop.data.accessControl)
              .map((option) => (
                <Pressable
                  onPress={() => {
                    routeTo(option.type);
                  }}
                >
                  <PatientMenuItems type={option}></PatientMenuItems>
                </Pressable>
              ))}
          </View>
        </View>
      </View>

      <StatusBar backgroundColor="#fff"></StatusBar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    paddingTop: 30,
  },

  heading: {
    marginTop: 40,
    rowGap: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  mainHeading: {
    fontFamily: "Gilroy-SemiBold",
    fontSize: 22,
    textAlign: "left",
  },
  descriptionContainer: {
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  description: {
    color: "#A7A6A5",
    fontSize: 16,
    textAlign: "left",
  },
  body: {
    marginTop: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 340,
    height: 200,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
  },
  menu: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    columnGap: 20,
    marginLeft: 10,
    rowGap: 20,
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  ptName: {
    fontFamily: "Gilroy-SemiBold",
    fontSize: 22,
    textAlign: "left",
    marginBottom: 15,
  },
  modalDesc: {
    color: "#A7A6A5",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15,
  },
  buttonsList: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  firstRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  acceptBtn: {
    color: "#0EBE7F",
    backgroundColor: "#daf5eb",
    width: 150,
    textAlign: "center",
    height: 30,
    borderRadius: 5,
    paddingTop: 4,
    fontSize: 16,
  },
  declineBtn: {
    color: "#FF5A5F",
    backgroundColor: "#f8d7da",
    width: 70,
    textAlign: "center",
    height: 30,
    paddingTop: 4,
    fontSize: 14,
    borderRadius: 5,
  },
  fiveMin: {
    color: "#2FC1FF",
    backgroundColor: "#e6f8ff",
    width: 90,
    textAlign: "center",
    height: 30,
    paddingTop: 4,
    fontSize: 14,
    borderRadius: 5,
  },
  secondRow: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
