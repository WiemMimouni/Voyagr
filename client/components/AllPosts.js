// AllPosts.js (Corrected with key prop)

import * as React from "react";
import { Box, HStack, Center, Heading, ScrollView, VStack } from "native-base";
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, Platform } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Footer from "./Footer";
import { UserContext } from "../UserContext";
import { useContext, useState } from "react";
import Alert from "./Alert";
import { useToast } from "native-base";

export default function AllPosts({ navigation }) {
  const toast = useToast();
  const Ale = (status, title, description) => {
    toast.show({
      render: ({ id }) => (
        <Alert
          id={id}
          status={status}
          variant={"left-accent"}
          title={title}
          description={description}
          isClosable={true}
        />
      ),
    });
  };

  const convertTime = (pa) => {
    return pa.slice(0, pa.length - 6) + " UTC " + pa.slice(pa.length - 6);
  };

  const { setOneUser } = useContext(UserContext);
  const [posts, setPosts] = useState([
    {
      poster_id: 1,
      poster_name: "John Doe",
      poster_image: "https://example.com/john.jpg",
      weight: 150,
      departTime: "2023-09-15T10:00:00Z",
      depart: "spain",
      phone: "123-456-7890",
      content: "Looking for a travel buddy!",
    },
    {
      poster_id: 2,
      poster_name: "Alice Smith",
      poster_image:
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      weight: 130,
      departTime: "2023-09-20T08:30:00Z",
      depart: "tunis",
      phone: "987-654-3210",
      content: "Planning a hiking trip.",
    },
  ]);

  const dialCall = (number) => {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }
    Linking.openURL(phoneNumber);
  };

  return (
    <View>
      <Box backgroundColor={"#FFC8CE"}>
        <Box style={styles.Header}>
          <HStack>
            <Center>
              <Heading style={styles.logo}>Delivair</Heading>
            </Center>
          </HStack>
        </Box>
      </Box>

      <ScrollView>
        {posts &&
          posts.map((e) => (
            <VStack key={e.poster_id} style={styles.friendItem}>
              <HStack>
                <TouchableOpacity
                  onPress={() => navigation.navigate("otherprofile")}
                >
                  <Image source={{ uri: e.poster_image }} style={styles.profileImage} />
                </TouchableOpacity>
                <Text style={styles.friendName}>{e.poster_name}</Text>
                <TouchableOpacity
                  style={styles.callIconContainer}
                  onPress={() => dialCall(e.phone)}
                >
                  <AntDesign name="phone" color={"#5FC8C0"} size={25} />
                </TouchableOpacity>
              </HStack>

              <VStack style={styles.friendInfo}>
                <Text style={styles.friendEmail}>
                  <MaterialCommunityIcons name="weight-kilogram" size={20} color="#FFC8CE" /> :
                  <Text style={{ color: "#5FC8C0", fontWeight: "bold" }}>{e.weight}</Text> KG
                </Text>
                <Text style={styles.friendPhone}>
                  <MaterialCommunityIcons name="clock-time-eight-outline" size={20} color="#FFC8CE" />
                  {convertTime(e.departTime)}
                </Text>
                <Text style={styles.friendCountry}>
                  <MaterialCommunityIcons name="airplane-marker" size={20} color="#FFC8CE" /> :{e.depart}
                </Text>
                <Text>
                  <MaterialCommunityIcons name="message" size={20} color="#FFC8CE" /> : {e.content}
                </Text>
              </VStack>
            </VStack>
          ))}
      </ScrollView>

      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor: "#FFC8CE",
    paddingTop: 80,
    width: 500,
    height: 100,
    top: -33,
  },
  logo: {
    color: "white",
    fontSize: 30,
    left: 20,
    top: 10,
  },
  friendItem: {
    alignItems: "center",
    margin: 20,
    borderRadius: 30,
    padding: 20,
    backgroundColor: "white",
  },
  profileImage: {
    width: "35%",
    aspectRatio: 1,
    borderRadius: 25,
    right: 35,
    marginBottom: 15,
  },
  friendInfo: {
    right: 35,
  },
  callIconContainer: {
    left: 30,
  },
  friendName: {
    fontSize: 20,
    right: 95,
    top: 7,
    fontWeight: "bold",
  },
});
