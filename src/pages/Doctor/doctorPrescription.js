import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { GetAllPrescription } from "../../store/doctorReducer";

export default DoctorPrescription = ({ navigation, route }) => {

  const screenState = useSelector(state => state.doctorState.prescriptionScreen);
  const dispatch = useDispatch()
  // console.log(screenState);
  // console.log("=====================================", route);
  const { accessControl } = route.params.data;

  const getAllPrescription = () => {
    dispatch(GetAllPrescription());
  }

  useFocusEffect(
    useCallback(()=>{
      getAllPrescription()
    },[])
  )

  const data = [
    {
      key: "1",
      from: {
        type: "doctor",
        name: "Dr. John Doe",
        avatar: require("../../../assets/doc1.png"),
        speciality: "Cardiologist",
      },
      meta: {
        issued: "2021-06-12",
        expires: "2021-09-01",
      },
      medicines: [
        {
          name: "Aspirin",
          dosage: "20mg",
          frequency: "1x",
          time: "10 AM",
        },
        {
          name: "Lisinopril",
          dosage: "10mg",
          frequency: "2x",
          time: "11 PM",
        },
      ],
    },
    {
      key: "2",
      from: {
        type: "doctor",
        name: "Dr. John Doe",
        avatar: require("../../../assets/doc1.png"),
        speciality: "Cardiologist",
      },
      meta: {
        issued: "2021-02-01",
        expires: "2021-04-19",
      },
      medicines: [
        {
          name: "Aspirin",
          dosage: "20mg",
          frequency: "1x",
          time: "10 AM",
        },
        {
          name: "Lisinopril",
          dosage: "10mg",
          frequency: "2x",
          time: "11 PM",
        },
      ],
    },
    {
      key: "3",
      from: {
        type: "doctor",
        name: "Dr. John Doe",
        avatar: require("../../../assets/doc1.png"),
        speciality: "Cardiologist",
      },
      meta: {
        issued: "2021-06-01",
        expires: "2021-07-01",
      },
      medicines: [
        {
          name: "Aspirin",
          dosage: "20mg",
          frequency: "1x",
          time: "10 AM",
        },
        {
          name: "Lisinopril",
          dosage: "10mg",
          frequency: "2x",
          time: "11 PM",
        },
      ],
    },
    {
      key: "4",
      from: {
        type: "patient",
        name: "Ethan Turner",
        avatar: require("../../../assets/patientImg1.png"),
      },
      meta: {
        issued: "2021-08-11",
        expires: "2021-10-05",
      },
      medicines: [
        {
          name: "Aspirin",
          dosage: "20mg",
          frequency: "1x",
          time: "10 AM",
        },
        {
          name: "Lisinopril",
          dosage: "10mg",
          frequency: "2x",
          time: "11 PM",
        },
      ],
    },
    {
      key: "5",
      from: {
        type: "patient",
        name: "Ethan Turner",
        avatar: require("../../../assets/patientImg1.png"),
      },
      meta: {
        issued: "2021-06-01",
        expires: "2021-07-01",
      },
      medicines: [
        {
          name: "Aspirin",
          dosage: "20mg",
          frequency: "1x",
          time: "10 AM",
        },
        {
          name: "Lisinopril",
          dosage: "10mg",
          frequency: "2x",
          time: "11 PM",
        },
      ],
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Prescription</Text>
      <View style={styles.body}>
        {screenState.list
          .map((item, ind) => (
            <PrescriptionCard data={item} key={ind} />
          ))}
      </View>
    </View>
  );
};

const PrescriptionCard = ({ data }) => {
  const issuedDate = new Date(data.created_at).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
  });
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <Image source={require("../../../assets/patientImg1.png")} style={styles.avatar} />
        <View style={styles.doctorInfo}>
          <Text style={styles.doctorName}>{data.patient.full_name}</Text>
          {/* <Text style={styles.doctorSpeciality}>{data.from.speciality}</Text> */}
        </View>
        <Text style={styles.dates}>{`${issuedDate}`}</Text>
      </View>
      <View style={styles.medicinesContainer}>
        {data.detail.map((medicine, ind) => (
          <View style={styles.medicine} key={ind}>
            <Text
              style={styles.medicineName}
            >{`${medicine.medicine_name.toUpperCase()} - ${medicine.number_of_doze}`}X</Text>
            <Text style={styles.medicineFreq}>{medicine.time}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2", // Change the background color to gray
    padding: 20,
    marginTop: 30,
  },
  heading: {
    fontFamily: "Gilroy-SemiBold",
    fontSize: 30,
    textAlign: "left",
  },
  body: {
    marginTop: 20,
  },
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  cardHeader: {
    flexDirection: "row",
    // alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  doctorName: {
    fontFamily: "Gilroy-SemiBold",
    fontSize: 20,
    marginLeft: 10,
  },
  doctorSpeciality: {
    color: "#A7A6A5",
    marginLeft: 10,
  },
  dates: {
    position: "absolute",
    right: 5,
  },
  doctorInfo: {
    paddingBottom: 20,
  },
  medicinesContainer: {
    marginTop: 10,
  },
  medicine: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    color: "#A7A6A5",
  },
  medicineName: {
    color: "#A7A6A5",
  },
  medicineFreq: {
    color: "#A7A6A5",
  },
});
