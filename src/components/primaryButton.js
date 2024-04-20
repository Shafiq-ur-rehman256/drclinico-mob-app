
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';


export const PrimaryButton = ({navigation,prop}) => {
    // const { text, onPress } = prop;

    return (
        <Pressable style={styles.primaryBtn} onPress={prop.onPress} >
            <Text style={styles.BtnText} >{prop.text}</Text>
        </Pressable>
    )

}


const styles = StyleSheet.create({

    primaryBtn: {
        backgroundColor: '#2FC1FF',
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 220,
        borderRadius: 18
    },
    BtnText: {
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 18,
        color: '#fff',
        textAlign: 'center'
        // padding: 20
    }

})