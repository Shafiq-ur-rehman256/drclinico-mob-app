import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import { useCallback, useEffect, useState } from "react";
import SimpleModal from "../../components/modal";
import { Tag } from "../../components/tag";
import { useDispatch, useSelector } from "react-redux";
import { deSelectChat, GetAllConvoForDocs, selectChat } from "../../store/doctorReducer";
import { useFocusEffect } from "@react-navigation/native";

export default DoctorInbox = ({ navigation,route }) => {

  console.log("DOCTOR INDBOX");
  // DOCTOR-MAIN-STATES
  const dispatch = useDispatch()
  const state = useSelector(state => state.doctorState.chatScreen);

  // IN-COMPONENT-STATE
  const [modalVisible, setModalVisible] = useState(false);
  const [hasModalBeenShown, setHasModalBeenShown] = useState(false);
  
  const { accessControl } = route.params.data;

  const navigateToChat = (chat) =>{
    dispatch(selectChat(chat))
    navigation.navigate('DoctorStack', {
      screen: 'chat_box',
      params: { convo: chat, accessControl: "doctor" },
    })
  }

  // console.log("APP STATE",state);
  useFocusEffect(useCallback(()=>{
    dispatch(GetAllConvoForDocs());

    return ()=>{
      // dispatch(deSelectChat())
    }
  },[]))

  const showModal = () => {
    if (!hasModalBeenShown) {
      setTimeout(() => {
        setModalVisible(true);
        setHasModalBeenShown(true);
      }, 2000);
    }
  };

  //Uncomment the line below to test the modal
  // showModal();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Chats</Text>
      </View>
      <View style={styles.body}>
        {state.conversations
          .map((chat, ind) => {
            return (
              <View style={styles.chatBox} key={ind}>
                <Pressable
                onPress={() => navigateToChat(chat)}
                // onPress={() => {
                //   routeTo("MessageScreen", { message: chat });
                // }}
                >
                  <ChatCard chat={chat} ></ChatCard>
                </Pressable>
              </View>
            );
          })}
      </View>
      <View>
        <SimpleModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          children={
            <View style={styles.modalView}>
              <Text style={styles.modalHeading}>Chat Review</Text>
              <Text style={styles.modalDesc}>
                How was your chat with Ethan Turner?
              </Text>
              <View style={styles.reviewStars}>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <Image
                    source={require("../../../assets/reviewStar.png")}
                    style={styles.star}
                  ></Image>
                </Pressable>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <Image
                    source={require("../../../assets/reviewStar.png")}
                    style={styles.star}
                  ></Image>
                </Pressable>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <Image
                    source={require("../../../assets/reviewStar.png")}
                    style={styles.star}
                  ></Image>
                </Pressable>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <Image
                    source={require("../../../assets/reviewStar.png")}
                    style={styles.star}
                  ></Image>
                </Pressable>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <Image
                    source={require("../../../assets/reviewStar.png")}
                    style={styles.star}
                  ></Image>
                </Pressable>
              </View>
              {accessControl === "doctor" && (
                <View style={styles.extra}>
                  <View style={styles.actions}>
                    <Pressable
                      onPress={() => {
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Tag customCss={styles.blockBtn} text="Block" />
                    </Pressable>
                    <View style={{ width: 10 }}></View>
                    <Pressable
                      onPress={() => {
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Tag customCss={styles.cancelbtn} text="Cancel" />
                    </Pressable>
                  </View>
                  <View style={styles.blockReason}>
                    <TextInput
                      style={styles.blockTextInput}
                      placeholder="Enter block reason here....."
                    />
                  </View>
                </View>
              )}
            </View>
          }
        />
      </View>
      <StatusBar backgroundColor="#fff"></StatusBar>
    </View>
  );
};

const ChatCard = ({ chat }) => {
  // console.log(chat);
  // const lastMessage = chat.messages[chat.messages.length - 1];
  // const unreadMessagesLength = chat.messages.filter(
  //   (message) => message.status === "unread"
  // ).length;

  

  return (
    <View style={styles.chatContainer}>
      <View style={styles.nameAndMessage}>
        <View>
          <Image
            style={styles.profileImage}
            source={require("../../../assets/doc3.png")}
          ></Image>
        </View>
        <View style={styles.infoBody}>
          <Text style={styles.senderName}>{chat.patient.full_name}</Text>
          <Text
            style={
              styles.message
              // lastMessage.status === "unread"
              //   ? styles.message
              //   : styles.readMessage
            }
          >
            Write first message...
            {/* {lastMessage.message.length > 10
              ? `${lastMessage.message.slice(0, 25)}...`
              : lastMessage.message} */}
          </Text>
        </View>
      </View>
      <View style={styles.timeAndLength}>
        <View>
          <Text
            style={
              styles.time
              // chat.senderInfo.sender === "doctor"
              //   ? styles.time
              //   : styles.timeDoctor
            }
          >
            10:20
            {/* {lastMessage.time.slice(0, -3)} */}
          </Text>
        </View>
        <Text style={styles.messageslength}>{1}</Text>
        {/* {unreadMessagesLength > 0 && (
          <Text style={styles.messageslength}>{unreadMessagesLength}</Text>
        )} */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2", // Change the background color to gray
    padding: 10,
    paddingTop: 30,
  },
  header: {
    marginTop: 40,
    rowGap: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  heading: {
    fontFamily: "Gilroy-SemiBold",
    fontSize: 26,
    textAlign: "left",
    fontWeight: "600",
  },
  body: {
    marginTop: 20,
    padding: 10,
  },
  chatContainer: {
    display: "flex",
    flexDirection: "row",
    rowGap: 10,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#e8e8e8", // Change the background color to gray
  },
  nameAndMessage: {
    display: "flex",
    flexDirection: "row",
    rowGap: 10,
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
  },
  senderName: {
    fontFamily: "Gilroy-SemiBold",
    fontSize: 18,
    textAlign: "left",
  },
  specialization: {
    color: "#A7A6A5",
    fontSize: 16,
    textAlign: "left",
  },
  message: {
    fontFamily: "Gilroy-SemiBold",
    fontSize: 16,
    textAlign: "left",
    paddingTop: 5,
  },
  timeAndLength: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 10,
    right: 10,
    rowGap: 10,
    alignItems: "center",
  },

  time: {
    fontFamily: "Gilroy-SemiBold",
    fontSize: 14,
    textAlign: "left",
    color: "#A7A6A5",
    marginBottom: 23,
  },
  timeDoctor: {
    fontFamily: "Gilroy-SemiBold",
    fontSize: 14,
    textAlign: "left",
    color: "#A7A6A5",
  },
  messageslength: {
    fontFamily: "Gilroy-SemiBold",
    fontSize: 14,
    backgroundColor: "#ff6c52",
    textAlign: "center",
    color: "#fff",
    borderRadius: 50,
    padding: 1,
    height: 20,
    width: 20,
    position: 'absolute',
    top: 26 
  },
  readMessage: {
    fontFamily: "Gilroy-SemiBold",
    fontSize: 16,
    textAlign: "left",
    color: "#A7A6A5",
    paddingTop: 5,
  },
  infoBody: {
    marginLeft: 10,
  },
  chatBox: {
    marginBottom: 10,
  },
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 20,
    width: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeading: {
    fontFamily: "Gilroy-SemiBold",
    fontSize: 22,
    textAlign: "left",
    marginBottom: 15,
  },
  modalDesc: {
    color: "#A7A6A5",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15,
  },
  reviewStars: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  star: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    padding: 10,
    gap: 10,
  },
  blockBtn: {
    color: "#FF5A5F",
    backgroundColor: "#f8d7da",
    width: 100,
    textAlign: "center",
    height: 30,
    borderRadius: 5,
    paddingTop: 5,
  },
  cancelbtn: {
    color: "#808080",
    backgroundColor: "#ededed",
    width: 100,
    textAlign: "center",
    height: 30,
    borderRadius: 5,
    paddingTop: 5,
  },
  blockReason: {
    marginTop: 15,
  },
  blockTextInput: {
    width: 280,
    height: 60,
    borderColor: "#A7A6A5",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});