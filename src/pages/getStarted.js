import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { PrimaryButton } from '../components/primaryButton';
// import { Image } from 'expo-image';

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


export default function GetStarted({ navigation }) {

    routeTo = () => {

        console.log("run");
        navigation.navigate('select_registration')

    }

    return (
        <View style={styles.container} >
            <View style={styles.top} >
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/drlogo.png')}
                    ></Image>
                    <Text style={styles.logotext} >DrClinico</Text>
                </View>
                <View style={styles.bannerContainer}>
                    <Image
                        style={styles.bannerImage}
                        source={require('../../assets/bannerImage.png')}
                    ></Image>
                </View>
            </View>
            <View style={styles.bottom} >

                <Text style={styles.mainText}>Manage your health and happy future</Text>
                <PrimaryButton prop={{ text: 'Get Started', onPress: routeTo }}></PrimaryButton>

            </View>
            <StatusBar backgroundColor="#00386D"></StatusBar>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
    },
    top: {
        backgroundColor: '#00386D',
        alignSelf: 'flex-start',
        width: '100%',
        height: '70%',
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    logoContainer: {
        // flex: 2,
        borderColor: '#fff',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 5,
        height: 20,
        marginTop: '20%'
    },
    logotext: {
        color: '#fff',
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 20,
        height: 25
    },
    image: {
        width: 30, // Set the desired width
        height: 30, // Set the desired height
        resizeMode: 'contain' // Adjust the resizeMode based on your preference
    },
    bannerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#fff'
    },
    bottom: {
        marginTop: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainText: {
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 25,
        textAlign: 'center',
        padding: 20
    },
    bottonBtn: {
        backgroundColor: '#2FC1FF',
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: 210,
        borderRadius: 18
    },
    BtnText: {
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 18,
        color: '#fff',
        textAlign: 'center'
        // padding: 20
    }
});