import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { PrimaryButton } from '../components/primaryButton';
import { useForm, Controller, SubmitErrorHandler, UseFormGetValues } from 'react-hook-form';

export default DoctorRegistration = ({ navigation }) => {

    const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    };

    // const onError: SubmitErrorHandler<UseFormGetValues> = (errors, e) => {
    //   return console.log(errors)
    // }

    routeTo = () => {

        console.log("run");
        navigation.navigate('RegisterStack', { screen: 'patient_otp' })

    }

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/drlogo.png')}
                ></Image>
            </View>

            <View style={styles.heading}>
                <Text style={styles.mainHeading}>Sign Up</Text>
            </View>

            <View style={styles.form}>

                <View style={styles.formElement}>
                    <Text style={styles.label}>Full Name</Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                placeholder='Jan Kowalski'
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                        )}
                        name="fullname"
                        rules={{ required: true }}
                    />
                </View>

                <View style={styles.formElement}>
                    <Text style={styles.label}>Email</Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.input}
                                placeholder='abc@example.com'
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                        )}
                        name="email"
                        rules={{ required: true }}
                    />
                </View>

                <View style={styles.formElement}>
                    <Text style={styles.label}>CNIC</Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                placeholder='xxxx-xxxxx-xxxx-x'
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                        )}
                        name="cnic"
                        rules={{ required: true }}
                    />
                </View>

                <View style={styles.formElement}>
                    <Text style={styles.label}>Phone Number</Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                placeholder='111-111-111'
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                        )}
                        name="phoneNumber"
                        rules={{ required: true }}
                    />
                </View>

                <View style={styles.GroupElement}>
                    <View style={{...styles.formElement, width: '50%'}}>
                        <Text style={styles.label}>License Number</Text>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={styles.input}
                                    onBlur={onBlur}
                                    placeholder='1111'
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            )}
                            name="phoneNumber"
                            rules={{ required: true }}
                        />
                    </View>

                    <View style={{...styles.formElement, width: '50%'}}>
                        <Text style={styles.label}>Doctor Specialization</Text>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={styles.input}
                                    onBlur={onBlur}
                                    placeholder='cardiologist'
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            )}
                            name="phoneNumber"
                            rules={{ required: true }}
                        />
                    </View>
                </View>

                <View style={styles.formElement}>
                    <Text style={styles.label}>Password</Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                placeholder='*********'
                                onChangeText={value => onChange(value)}
                                value={value}
                                keyboardType='visible-password'
                            />
                        )}
                        name="password"
                        rules={{ required: true }}
                    />
                </View>

            </View>

            <View style={styles.bottomBtn}>
                <PrimaryButton prop={{ text: 'Sign Up', onPress: routeTo }}></PrimaryButton>
            </View>

            <View style={styles.bottomText}>
                <Text style={styles.part1}>Already have account?</Text>
                <Text style={styles.part2}>Sign In</Text>
            </View>

            <StatusBar backgroundColor="#fff"></StatusBar>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#fff'
    },
    logoContainer: {
        marginTop: 50
    },
    logo: {
        width: 40, // Set the desired width
        height: 40, // Set the desired height
        resizeMode: 'contain' // Adjust the resizeMode based on your preference
    },
    heading: {
        // flex: 1,
        alignItems: 'center',
        marginTop: 40,
        rowGap: 10,
        paddingLeft: 10,
        paddingRight: 10,

    },
    mainHeading: {
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 30,
        textAlign: 'center'
    },
    primaryHeading: {
        color: '#A7A6A5',
        textAlign: 'center',
        fontSize: 18,
    },
    form: {
        marginTop: "5%",
        display: 'flex',
        width: '80%',
        rowGap: 10

    },
    GroupElement: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 1,
        justifyContent: 'space-between',
        columnGap: 5
    },
    formElement: {
        display: 'flex',
        rowGap: 5
    },
    label: {
        color: '#A7A6A5',
        fontSize: 15
    },
    input: {
        backgroundColor: '#EFF2F1',
        height: 45,
        borderRadius: 10,
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 16
    },
    bottomBtn: {
        marginTop: 50
    },
    bottomText: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 5,
        width: '70%',
        marginTop: 30
    },
    part1: {
        color: '#A7A6A5',
        fontSize: 16
    },
    part2: {
        color: '#2FC1FF',
        fontSize: 16
    },
})