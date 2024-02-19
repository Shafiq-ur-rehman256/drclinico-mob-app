import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import PatientMenuItems from "../../components/patientMenuItems";

export default PatientHome = ({ navigation, prop }) => {
  console.log("======> ", prop);
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
      navigation.navigate("MainStack", { screen: "main" });
  };

  const donationRouting = () => {
    navigation.navigate("PatientStack", { screen: "patient_donate" });
  };
  return (
    <View style={styles.container}>
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
});
