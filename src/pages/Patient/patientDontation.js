import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import PatientMenuItems from "../../components/patientMenuItems";
import { Radio } from "@mui/material";

export default PatientHome = ({ navigation }) => {
  const data = [
    {
      key: 1,
      title: "Jazz Cash",
      number: '0332-2600001',
      icon: require("../../../assets/jazzCash.png"),
    },
    {
      key: 2,
      title: "easypaisa",
      number: '0332-2600001',
      icon: require("../../../assets/easypaisa.png"),
    },
  ];

  const routeTo = (type) => {
    console.log("run");
    if (type === "instant_doctor")
      // Navigating the user to Emergency doctors screen when clicked on Instant Doctor
      navigation.navigate("MainStack", { screen: "main" });
  };
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.mainHeading}>Payment Options</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.description}>
          Pellentesque placerat arcu in risus facilisis, sed laoreet eros
          laoreet.
        </Text>
        <View style={styles.paymentOptions}>
          {data.map((paymentOption, ind) => (
            <Pressable key={ind} onPress={() => routeTo(paymentOption.title)}>
              <PaymentOptions
                title={paymentOption.title}
                icon={paymentOption.icon}
                number={paymentOption.number}
              />
            </Pressable>
          ))}
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export const PaymentOptions = ({ title, description,number, icon, type }) => {
  return (
    <View >
      <View style={styles.paymentOption}>
      <Text style={styles.paymentTitle}>{title} {number}</Text>
      <Image style={styles.image} source={icon}></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  heading: {
    marginTop: 50,
  },
  mainHeading: {
    fontSize: 30,
    fontWeight: "800",
    fontFamily: "Gilroy-SemiBold",
  },
  descriptionContainer: {
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: "#a9a9a9",
  },
  body: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  paymentOption: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    backgroundColor: "#EFF2F1",
    padding: 15,
    borderRadius: 10,
    width: 340,
    height: 100,
  },
  paymentTitle: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Gilroy-SemiBold",
  },
  number: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Gilroy-SemiBold",
    borderColor: '#A7A6A5',
    borderWidth: 1,
    color: '#A7A6A5'
  }
});
