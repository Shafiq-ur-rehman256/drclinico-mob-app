import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
} from "react-native";

export default Inbox = ({ prop }) => {
  const { accessControl } = prop.data;
  const data = [
    {
      id: 1,
      senderInfo: {
        sender: "doctor",
        name: "Dr. John Doe",
        profileImage: require("../../assets/doc2.png"),
        specialization: "Cardiologist",
      },
      messages: [
        {
          id: 1,
          sender: "doctor",
          message: "Hello, how are you today?",
          time: "10:00 AM",
          status: "read",
        },
        {
          id: 2,
          sender: "patient",
          message: "I'm good, thank you!",
          time: "10:10 AM",
          status: "read",
        },
        {
          id: 3,
          sender: "doctor",
          message: "Did you take your medication today?",
          time: "10:20 AM",
          status: "unread",
        },
      ],
    },
    {
      id: 2,
      senderInfo: {
        sender: "doctor",
        name: "Dr. Aly Williams",
        profileImage: require("../../assets/doc1.png"),
        specialization: "Pediatrician",
      },
      messages: [
        {
          id: 1,
          sender: "doctor",
          message: "Hello, how are you today?",
          time: "10:00 AM",
          status: "read",
        },
        {
          id: 2,
          sender: "patient",
          message: "I'm good, thank you!",
          time: "10:10 AM",
          status: "unread",
        },
        {
          id: 3,
          sender: "doctor",
          message: "Did you take your medication today?",
          time: "10:20 AM",
          status: "unread",
        },
        {
          id: 4,
          sender: "doctor",
          message: "Make sure to visit me next week",
          time: "10:20 AM",
          status: "unread",
        },
      ],
    },
    {
      id: 3,
      senderInfo: {
        sender: "doctor",
        name: "Dr. Jane Smith",
        profileImage: require("../../assets/doc3.png"),
        specialization: "Dermatologist",
      },
      messages: [
        {
          id: 1,
          sender: "doctor",
          message: "Hello, how are you today?",
          time: "10:00 AM",
          status: "read",
        },
        {
          id: 2,
          sender: "patient",
          message: "I'm good, thank you for asking!",
          time: "10:10 AM",
          status: "read",
        },
      ],
    },
    {
      id: 4,
      senderInfo: {
        sender: "patient",
        name: "Ethan Turner",
        profileImage: require("../../assets/doc3.png"),
        specialization: null,
      },
      messages: [
        {
          id: 1,
          sender: "doctor",
          message: "Hello, how are you today?",
          time: "10:00 AM",
          status: "read",
        },
        {
          id: 2,
          sender: "patient",
          message: "I'm good, thank you for asking!",
          time: "10:10 AM",
          status: "unread",
        },
      ],
    },
    {
      id: 5,
      senderInfo: {
        sender: "patient",
        name: "Caleb Rodriguez",
        profileImage: require("../../assets/doc3.png"),
        specialization: null,
      },
      messages: [
        {
          id: 1,
          sender: "doctor",
          message: "Hello, how are you today?",
          time: "10:00 AM",
          status: "read",
        },
        {
          id: 2,
          sender: "patient",
          message: "I'm good, thank you for asking!",
          time: "10:10 AM",
          status: "read",
        },
        {
          id: 3,
          sender: "doctor",
          message: "Did you take your medication today?",
          time: "10:20 AM",
          status: "read",
        },
        {
          id: 4,
          sender: "patient",
          message: "Yes, I did!",
          time: "10:20 AM",
          status: "read",
        },
        {
          id: 5,
          sender: "patient",
          message: "But I'm feeling a bit dizzy",
          time: "10:20 AM",
          status: "read",
        },
      ],
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Chats</Text>
      </View>
      <View style={styles.body}>
        {data
          .filter((chat) => chat.senderInfo.sender !== accessControl)
          .map((chat) => {
            return (
              <View style={styles.chatBox}>
                <Pressable
                  onPress={() => {
                    routeTo("MessageScreen", { message: chat });
                  }}
                >
                  <ChatCard chat={chat}></ChatCard>
                </Pressable>
              </View>
            );
          })}
      </View>
      <StatusBar backgroundColor="#fff"></StatusBar>
    </View>
  );
};

export const ChatCard = ({ chat }) => {
  const lastMessage = chat.messages[chat.messages.length - 1];
  const unreadMessagesLength = chat.messages.filter(
    (message) => message.status === "unread"
  ).length;
  return (
    <View style={styles.chatContainer}>
      <View style={styles.nameAndMessage}>
        <View>
          <Image
            style={styles.profileImage}
            source={chat.senderInfo.profileImage}
          ></Image>
        </View>
        <View style={styles.infoBody}>
          <Text style={styles.senderName}>{chat.senderInfo.name}</Text>
          {chat.senderInfo.specialization !== null && (
            <Text style={styles.specialization}>
              {chat.senderInfo.specialization}
            </Text>
          )}
          <Text
            style={
              lastMessage.status === "unread"
                ? styles.message
                : styles.readMessage
            }
          >
            {lastMessage.message.length > 10
              ? `${lastMessage.message.slice(0, 25)}...`
              : lastMessage.message}
          </Text>
        </View>
      </View>
      <View style={styles.timeAndLength}>
        <View>
          <Text
            style={
              chat.senderInfo.sender === "doctor"
                ? styles.time
                : styles.timeDoctor
            }
          >
            {lastMessage.time.slice(0, -3)}
          </Text>
        </View>
        {unreadMessagesLength > 0 && (
          <Text style={styles.messageslength}>{unreadMessagesLength}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    backgroundColor: "#fcfafa",
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
});
