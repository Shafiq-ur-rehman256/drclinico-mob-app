import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import PatientMenuItems from "../../components/patientMenuItems";

export default PatientHome = ({ navigation }) => {
  const data = [
    {
      key: 1,
      type: "instant_doctor",
      title: "Instant Doctor",
      description: "GP, Psychologists & Nutritionists",
      icon: require("../../../assets/perscription.png"),
    },
    {
      key: 2,
      type: "book_appointment",
      title: "Book Appointment",
      description: "Book a doctor for your consultation",
      icon: require("../../../assets/stethoscope.png"),
    },
    {
      key: 3,
      type: "instant_doctor",
      title: "Instant Doctor",
      description: "GP, Psychologists & Nutritionists",
      icon: require("../../../assets/perscription.png"),
    },
    {
      key: 4,
      type: "book_appointment",
      title: "Book Appointment",
      description: "Book a doctor for your consultation",
      icon: require("../../../assets/stethoscope.png"),
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
            {data.map((item) => (
              <Pressable onPress={() => routeTo(item.type)}>
                <PatientMenuItems type={item}></PatientMenuItems>
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
