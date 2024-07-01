import { FlatList, Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, View, TextInput } from "react-native"
import AntDesign from "@expo/vector-icons/AntDesign";
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "../services/socket.service";
import { deSelectChat as doctorDeSelectChate, GetAllPatientChat, SendMessageToPatient, setDocNewMessage } from "../store/doctorReducer";
import { deSelectChat, GetAllDoctorChat, SendMessageToDoctor, setPatNewMessage } from "../store/patientReducer";
import { useFocusEffect } from "@react-navigation/native";

export default ChatBox = ({ navigation, route }) => {


    const patientState = useSelector(state => state.patientState);
    const doctorState = useSelector(state => state.doctorState);
    const dispatch = useDispatch()

    const [message, setMessage] = useState('');
    const [data, setData] = useState([]);
    const [convo, setConvo] = useState({});
    const [keypadActive, setKeyPadActive] = useState(false);

    // console.log("=============================>", route.params.accessControl == 'doctor' ? doctorState.chatScreen.selected_Conversation.patient.id: '');

    const { accessControl } = route.params

    const flatListRef = useRef(null);



    const sendMessage = () => {
        // console.log(object);
        if (message) {
            if (route.params.accessControl == 'doctor') {
                const payload = {
                    message: message,
                    attachment: null,
                    message_type: "TEXT",
                    message_from_doctor: true,
                    appointment_id: convo.appointments[0].id,
                    doc_id: convo.docter.id,
                    pat_id: convo.patient.id,
                    conversation_id: convo.id
                }
                dispatch(SendMessageToPatient(payload))
                setMessage('');
            }else{
                const payload = {
                    message: message,
                    attachment: null,
                    message_type: "TEXT",
                    message_from_doctor: false,
                    appointment_id: convo.appointments[0].id,
                    doc_id: convo.docter.id,
                    pat_id: convo.patient.id,
                    conversation_id: convo.id
                }
                console.log("MESSAGE EMIT", payload);
                dispatch(SendMessageToDoctor(payload))
                setMessage('');
            }
            // setData([...data, { message: message, attachment: '', message_type: 'TEXT', message_from_doctor: data.length ? !data[data.length - 1].message_from_doctor : false, id: data.length + 1 }]);
        }
    }

    const handleTextChange = (newText) => {
        setMessage(newText);
    };

    const backToInbox = () => {
        navigation.navigate('MainStack', {
            screen: 'main',
            params: {  accessControl: route.params.accessControl  },
        })
        // route.params.accessControl == 'doctor' ? dispatch(doctorDeSelectChate()) : dispatch(deSelectChat());
       
    }

    const joinRoom = () =>{
        if (route.params.accessControl == 'doctor') {

            socket.emit('joinRoom', doctorState.chatScreen.selected_Conversation.room_name)

        } else {
            socket.emit('joinRoom', patientState.chatScreen.selected_Conversation.room_name)


        }
    }

    const leaveRoom = () =>{
        if (route.params.accessControl == 'doctor') {

            socket.emit('leaveRoom', doctorState.chatScreen.selected_Conversation.room_name)

        } else {
            socket.emit('leaveRoom', patientState.chatScreen.selected_Conversation.room_name)

        }
    }

    const getAllChats =()=>{
        if (route.params.accessControl == 'doctor') {

            dispatch(GetAllPatientChat(doctorState.chatScreen.selected_Conversation.patient.id))

        } else {
            dispatch(GetAllDoctorChat(patientState.chatScreen.selected_Conversation.patient.id))
            // socket.emit('leaveRoom', patientState.chatScreen.selected_Conversation.room_name)

        }
    }

    useEffect(() => {
        console.log("AAAA");
        if (flatListRef.current) {
            // setTimeout(() => {
                flatListRef.current.scrollToEnd({ animated: true });
            // }, 1000);
        }
    }, [data]);


    useFocusEffect(useCallback(()=>{
        console.log("BBSS");
        route.params.accessControl == 'doctor'? setData(doctorState.chatScreen.open_chat) : setData(patientState.chatScreen.open_chat);
        // if (flatListRef.current) {
        //     setTimeout(() => {
        //         flatListRef.current.scrollToEnd({ animated: true });
        //     }, 1000);
        // }
    },[doctorState.chatScreen.open_chat,patientState.chatScreen.open_chat]))

    useFocusEffect(
        useCallback(() => {
            if (route.params.accessControl == 'doctor') {

                // console.log("===========================sadsadsddas==========",doctorState.chatScreen.open_chat.length);
                setConvo(doctorState.chatScreen.selected_Conversation)
               
    
            } else {
                setConvo(patientState.chatScreen.selected_Conversation)
            }

            return () =>{
            }
        }, [patientState.chatScreen.selected_Conversation, doctorState.chatScreen.selected_Conversation])
    )

    useFocusEffect(
        useCallback(() => {

            console.log("TRY TO JOIN ROOM");

            getAllChats()

            joinRoom();

            socket.on('connect', ()=>{
                joinRoom()
            })

            socket.on('chat-message', (payload)=>{
                console.log(payload.message);
                // setData()
                route.params.accessControl != 'doctor'? dispatch(setPatNewMessage(payload)): dispatch(setDocNewMessage(payload));

            })

            socket.on('room-joined', () => {
                console.log("room join sucessfully")
            })


            return () => {
                socket.off('chat-message')
                leaveRoom()
            };
        }, [])
    );


    return (
        <View style={styles.container}>

            <View style={styles.chatHeader}>
                <View style={styles.avatarContainer}>
                    <Pressable style={styles.bck_btn_press} onPress={() => backToInbox()}>
                        <AntDesign name="left" size={13} color="black" />
                        <Text style={styles.bck_btn_txt}>Back</Text>
                    </Pressable>
                    <View style={styles.nameContainer}>
                        <Image style={{ width: 40, height: 40 }} source={require('../../assets/doctor.png')}></Image>
                        <View >
                            <Text style={styles.name}>{accessControl == 'doctor' ? convo?.patient?.full_name : convo?.docter?.full_name}</Text>
                            {
                                accessControl == 'doctor' ?
                                    <Text style={styles.status}> <MaterialIcons name="circle" size={8} color={convo.patient?.status == 'Active' ? 'green' : 'yellow'} />{convo.patient?.status}</Text>
                                    :
                                    <Text style={styles.status}> <MaterialIcons name="circle" size={8} color={convo.docter?.status == 'Active' ? 'green' : 'yellow'} />{convo.docter?.status}</Text>
                            }
                        </View>
                    </View>
                </View>
            </View>

            <View style={{...styles.chatContainer, height: keypadActive ? '60%': '75%'}}>
                {
                    accessControl == 'doctor' ?
                    <FlatList ref={flatListRef} data={data} renderItem={ConversationDoctor} keyExtractor={item => item.id} />
                    :
                    <FlatList ref={flatListRef} data={data} renderItem={Conversation} keyExtractor={item => item.id} />

                }
            </View>

            <View style={styles.senderContainer}>
                <View style={styles.attachments}>
                    <TextInput style={styles.typeBox} onChangeText={handleTextChange} value={message} onPress={(e)=> setKeyPadActive(true)} onBlur={(e)=> setKeyPadActive(false)} placeholder="Write a message...."></TextInput>
                </View>
                <Pressable style={styles.sendBtn} onPress={() => sendMessage()}>
                    <Feather name="send" size={25} color="#FFFFFF" />
                    {/* <MaterialCommunityIcons name="send" size={24} color="#FFFFFF" /> */}
                </Pressable>
            </View>

            <StatusBar backgroundColor="#fff"></StatusBar>
        </View>
    )

}


const Conversation = ({ item }) => {
    // console.log(item.message_from_doctor);
    return (
        <View style={item.message_from_doctor ? styles.chatTextContainerLeft : styles.chatTextContainerRight}>
            <Text style={item.message_from_doctor ? styles.chatTextLeft: styles.chatTextRight}>{item.message}</Text>
        </View>
    )
}

const ConversationDoctor = ({ item }) => {
    // console.log(item);
    return (
        <View style={item.message_from_doctor ? styles.chatTextContainerRight : styles.chatTextContainerLeft}>
            <Text style={item.message_from_doctor ? styles.chatTextRight:styles.chatTextLeft}>{item.message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingTop: '6%'
    },
    chatHeader: {
        width: '100%',
        // borderWidth: 1,
        // borderColor: 'red',
        backgroundColor: '#fff'
    },
    avatarContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: 120,
        backgroundColor: '#fff',
        rowGap: 7

    },
    bck_btn_press: {
        marginLeft: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 5,
        height: 20
    },
    bck_btn_img: {
        width: 8,
        height: 8,

    },
    bck_btn_txt: {
        fontSize: 16,
        height: 19
    },
    nameContainer: {
        marginLeft: 15,
        display: 'flex',
        flexDirection: 'row',
        columnGap: 10
    },
    name: {
        fontSize: 17,
        fontStyle: 'italic',
        fontFamily: "Gilroy-Bold",
    },
    status: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        fontFamily: "Gilroy-Bold",
        color: '#A7A6A5'
    },
    chatContainer: {
        // padding: 15,
        display: 'flex',
        rowGap: 10,
        // height: "75%",
        // borderWidth: 1,
        // borderColor: 'red',
    },
    chatTextContainerLeft: {
        width: "100%",
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 15,
        display: 'flex',
        alignItems: 'flex-start',
    },
    chatTextLeft: {
        backgroundColor: '#2FC1FF',
        fontFamily: "Gilroy-SemiBold",
        width: "70%",
        color: '#fff',
        fontSize: 16,
        padding: 8,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
    },
    chatTextContainerRight: {
        width: "100%",
        marginTop: 5,
        marginBottom: 10,
        paddingRight: 15,
        display: 'flex',
        alignItems: 'flex-end',
    },
    chatTextRight: {
        backgroundColor: '#fff',
        fontFamily: "Gilroy-SemiBold",
        width: "70%",
        color: 'black',
        fontSize: 16,
        padding: 8,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        borderBottomLeftRadius: 7,
    },
    senderContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10,
        padding: 10,
        position: 'absolute',
        width: "100%",
        bottom: 1,
        backgroundColor: '#F4F6F5',
        // height: 'auto',
        // alignSelf: 'stretch'
        // justifyContent: 'center'
    },
    attachments: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        width: '85%',
        height: 50,
        borderRadius: 10,
        padding: 8
        // position: 'relative',
        // bottom: 1
    },
    typeBox: {
        backgroundColor: '#FFFFFF',
        height: 40,
        fontFamily: "Gilroy-SemiBold",
        // borderWidth: 1,
        // borderColor: 'red',

    },
    sendBtn: {
        backgroundColor: '#2FC1FF',
        height: 50,
        width: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingTop: 3,
        paddingRight: 2

    }
})

