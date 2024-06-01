import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import PatientHome from "./Patient/patientHome";
import Inbox from "./inbox";
import UpdateProfile from "../pages/Doctor/updateProfile";
import Prescription from "./prescription";
import PatientProfile from '../pages/Patient/patientProfile'
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default Mainpage = ({ route }) => {
  // console.log("=====runnnnnnnn", route);
  // const { accessControl } = route.params;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let Size;
          // console.log(color, size);
          if (route.name === "Home1") {
            iconName = focused ? "ios-home" : "ios-home-outline";
            Size = size;
          } else if (route.name === "Settings") {
            iconName = focused
              ? "md-document-text"
              : "md-document-text-outline";
            Size = size;
          } else if (route.name === "Settings1") {
            iconName = focused ? "md-scan-circle" : "md-scan-circle-outline";
            Size = size + 20;
          } else if (route.name === "Settings2") {
            iconName = focused
              ? "chatbubble-ellipses"
              : "chatbubble-ellipses-outline";
            Size = size;
          } else if (route.name === "Settings3") {
            iconName = focused ? "user-alt" : "user";
            Size = size;
          }
          return route.name === "Settings3" ? (
            <FontAwesome5 name={iconName} size={Size} color={color} />
          ) : (
            <Ionicons name={iconName} size={Size} color={color} />
          );
        },
        tabBarActiveTintColor: "#2FC1FF",
        tabBarInactiveTintColor: "#2FC1FF",
      })}
    >
      <Tab.Screen
        name="Home1"
        component={PatientHome}
        initialParams={{ data: route.params }}
      />
      <Tab.Screen
        name="Settings"
        component={Prescription}
        initialParams={{ data: route.params }}
      />
      <Tab.Screen name="Settings1" component={SettingsScreen} />
      <Tab.Screen
        name="Settings2"
        component={Inbox}
        initialParams={{ data: route.params }}
      />
      <Tab.Screen
        name="Settings3"
        component={route.params?.data?.accessControl == 'patient'? PatientProfile : UpdateProfile}
        initialParams={{ data: route.params}}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    color: "black",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  logoContainer: {
    marginTop: 50,
  },
  logo: {
    width: 40, // Set the desired width
    height: 40, // Set the desired height
    resizeMode: "contain", // Adjust the resizeMode based on your preference
  },
  heading: {
    // flex: 1,
    alignItems: "center",
    marginTop: 40,
    rowGap: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  mainHeading: {
    fontFamily: "Gilroy-SemiBold",
    fontSize: 30,
    textAlign: "center",
  },
  primaryHeading: {
    color: "#A7A6A5",
    textAlign: "center",
    fontSize: 18,
  },
  underlineStyleBase: {
    width: 50,
    height: 50,
    borderWidth: 0,
    backgroundColor: "#EFF2F1",
    color: "#1C1F1E",
    fontWeight: "900",
    fontSize: 20,
    // borderBottomWidth: 1,
  },
  bottomBtn: {
    marginTop: 40,
  },
  bottomText: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: 'center',
    // alignItems: 'center',
    columnGap: 5,
    width: "80%",
    marginTop: 20,
  },
  part1: {
    color: "#A7A6A5",
    fontSize: 16,
  },
  part2: {
    color: "#2FC1FF",
    fontSize: 16,
  },
});
