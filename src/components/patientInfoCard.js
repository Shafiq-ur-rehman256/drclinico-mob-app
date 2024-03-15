import { View, Text, StyleSheet, Image } from "react-native";
import { Tag } from "./tag";

export default function PatientInfoCard({ appointmentInfo }) {
  const appointmentDate = new Date(appointmentInfo.appointment_details.date);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    day: "numeric",
    year: "numeric",
  }).format(appointmentDate);
  const appointmentStatus = appointmentInfo.status;

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={appointmentInfo.profile_pic} style={styles.icon} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{appointmentInfo.pt_name}</Text>
        {appointmentStatus === "pending" && (
          <Text style={styles.description}>
            {appointmentInfo.appointment_details.startTime} -{" "}
            {appointmentInfo.appointment_details.endTime}
          </Text>
        )}
      </View>
      {appointmentStatus === "pending" && (
        <View style={styles.appointmentDate}>
          <Text style={styles.date}>{String(formattedDate)}</Text>
        </View>
      )}
      {appointmentStatus === "active" && (
        <View style={styles.extraContent}>
          <Tag text="Accept" type="active" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 350,
    alignItems: "center",
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 50,
    height: 50,
  },
  textContainer: {
    marginLeft: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 15,
    color: "grey",
  },
  extraContent: {
    marginLeft: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  appointmentDate: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    marginBottom: 30,
  },
  date: {
    color: "grey",
    fontSize: 12,
  },
});
