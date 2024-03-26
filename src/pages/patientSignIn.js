import { useForm, Controller } from "react-hook-form";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Pressable,
} from "react-native";
import { PrimaryButton } from "../components/primaryButton";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useEffect } from "react";
import { doctorAuthenticate, patientAuthenticate } from "../services/api.doctor..service";
import { useDispatch } from 'react-redux'
import { setSnackBar } from "../store/reducers";

export default PatientSignIn = ({ navigation }) => {

    const dispatch = useDispatch()
    const [formError, setFormError] = useState({ show: true, message: '' })
    const {
        register,
        setValue,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm();

    useEffect(() => {

        if (Object.keys(errors).length) {
            setFormError({ show: true, message: 'Please provide correct email or password' })
        }

    }, [errors]);

    const onSubmit = async (data) => {
        console.log("pppppppppppppp",data);
        const { code, msg } = await patientAuthenticate(data);

        if (code == 200) {

            dispatch(setSnackBar({ show: true, message: msg }))
            navigation.navigate("MainStack", {
              screen: "main",
              params: { accessControl: 'patient' },
            });
        }else{
            dispatch(setSnackBar({ show: true, message: msg }))
        }

    };

    const routeToSignup = () => {
        navigation.navigate("RegisterStack", { screen: "patient_signup" });
    }
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../../assets/drlogo.png")}
                ></Image>
            </View>

            <View style={styles.heading}>
                <Text style={styles.mainHeading}>Sign In</Text>
                {formError.show && <Text style={styles.formError}>{formError.message}</Text>}
            </View>

            <View style={styles.form}>

                <View style={styles.formElement}>
                    <Text style={styles.label}>Email</Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.input}
                                placeholder="abc@example.com"
                                // onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                value={value}
                            />
                        )}
                        name="email"
                        rules={{ required: true }}
                    />
                </View>

                <View style={styles.formElement}>
                    <Text style={styles.label}>Password</Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.input}
                                // onBlur={onBlur}
                                placeholder="*********"
                                onChangeText={(value) => onChange(value)}
                                value={value}
                                keyboardType="visible-password"
                            />
                        )}
                        name="password"
                        rules={{ required: true }}
                    />
                </View>
                <View style={styles.bottomBtn}>
                    <PrimaryButton
                        prop={{ text: "Sign In", onPress: handleSubmit(onSubmit) }}
                    ></PrimaryButton>
                </View>
            </View>


            <View style={styles.bottomText}>
                <Text style={styles.part1}>Don't have any account?</Text>
                <Pressable onPress={routeToSignup}>
                    <Text style={styles.part2}>Sign Up</Text>
                </Pressable>
            </View>
            <StatusBar backgroundColor="#fff"></StatusBar>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        // justifyContent: 'center',
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
    form: {
        marginTop: "5%",
        display: "flex",
        width: "80%",
        rowGap: 10,
    },
    GroupElement: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 1,
        justifyContent: "space-between",
        columnGap: 5,
    },
    formElement: {
        display: "flex",
        rowGap: 5,
    },
    formError: {
        color: '#FF0000'
    },
    label: {
        color: "#A7A6A5",
        fontSize: 15,
    },
    input: {
        backgroundColor: "#EFF2F1",
        height: 45,
        borderRadius: 10,
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 16,
    },
    bottomBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    primaryBtn: {
        backgroundColor: '#2FC1FF',
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 220,
        borderRadius: 18
    },
    bottomText: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        columnGap: 5,
        width: "70%",
        marginTop: 30,
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
