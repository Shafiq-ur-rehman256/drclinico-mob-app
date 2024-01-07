import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { PrimaryButton } from '../components/primaryButton';
import { useState } from 'react';


export const SelectRegistration = ({ navigation }) => {

    const [pateint, selectPatient] = useState(true);
    const [doctor, selectDoctor] = useState(true);
    const [emergency, selectEmergency] = useState(true);

    routeTo = () => {

        if(!pateint) navigation.navigate('RegisterStack',{ screen: 'patient_signup' });
        if(!doctor) navigation.navigate('RegisterStack',{ screen: 'doctor_signup' });
        if(!emergency) navigation.navigate('MainStack',{ screen: 'main' });

    }
    selectRegistration = (state, stateMethod) => {
        resetStates()
        stateMethod(() => !state)
    }

    resetStates = () => {
        selectDoctor(() => true)
        selectEmergency(() => true)
        selectPatient(() => true)
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
                <Text style={styles.mainHeading}>Let's get acquainted</Text>
                <Text style={styles.primaryHeading}>Pellentesque placerat arcu in risus facilisis, sed laoreet eros laoreet.</Text>
            </View>

            <View style={styles.registrationSection}>

                <Pressable style={styles.section} onTouchStart={ () => selectRegistration(pateint, selectPatient)}>
                    <View style={styles.iconContainer}>
                        <Image
                            style={styles.icon}
                            source={ require('../../assets/icon_patient.png')}
                        ></Image>
                    </View>
                    <View style={styles.sectionText}>
                        <Text style={ pateint == true ? styles.sectionText1 : styles.sectionText1Active } >I’m a patient</Text>
                        <Text style={styles.sectionText2} >Proin convallis libero ac nisl</Text>
                    </View>
                </Pressable>

                <Pressable style={styles.section} onTouchStart={ () => selectRegistration(doctor, selectDoctor)}>
                    <View style={styles.iconContainer}>
                        <Image
                            style={styles.icon}
                            source={require('../../assets/doctor_icon.png')}
                        ></Image>
                    </View>
                    <View style={styles.sectionText}>
                        <Text style={ doctor ==true ? styles.sectionText1 : styles.sectionText1Active } >I’m a doctor</Text>
                        <Text style={styles.sectionText2} >Proin convallis libero ac nisl</Text>
                    </View>
                </Pressable>


                <Pressable style={styles.section} onTouchStart={ () => selectRegistration(emergency, selectEmergency)}>
                    <View style={styles.iconContainer}>
                        <Image
                            style={styles.icon}
                            source={require('../../assets/emergency_icon.png')}
                        ></Image>
                    </View>
                    <View style={styles.sectionText}>
                        <Text style={ emergency ==true ? styles.sectionText1 : styles.sectionText1Active } >Emergency</Text>
                        <Text style={styles.sectionText2} >Proin convallis libero ac nisl</Text>
                    </View>
                </Pressable>

                
            </View>

            <View style={styles.bottomBtn}>
            <PrimaryButton prop={{ text: 'Continue', onPress: routeTo }}></PrimaryButton>
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
    registrationSection: {
        display: 'flex',
        minWidth: '65%',
        marginTop: 50,
        rowGap: 30
    },
    section: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // columnGap: 50,
        minHeight: 100,
        Width: 40,
        // borderWidth: 2,
        // borderColor: 'red'
    },
    iconContainer: {
        
    },
    iconContainerActive: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2FC1FF',
        width: 60, // Set the desired width
        height: 60, // Set the desired height
        borderRadius: 10
    },
    icon: {
        width: 40, // Set the desired width
        height: 40, // Set the desired height
        resizeMode: 'contain' // Adjust the resizeMode based on your preference
    },
    sectionText: {
        display: 'flex',
        rowGap: 15
    },
    sectionText1: {
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 24
    },
    sectionText1Active: {
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 24,
        color: '#2FC1FF'
    },
    sectionText2: {
        color: '#A7A6A5'    
    },
    bottomBtn: {
        marginTop: 80
    }
})