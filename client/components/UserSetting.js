import { useState } from "react";
import { StyleSheet, Image, View, Button, Text, TouchableOpacity } from "react-native";
import {
  Box,
  Flex,
  Divider,
  Avatar,
  Input,
  HStack,
  VStack,
  ScrollView,
} from "native-base";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
/* 
// Firebase imports (fixed path!)
import { storage } from "../../firebase/index"; 
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; */

import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCVBbACohSkuUr0FntAmt9BvMUK-RkpY-E",
  authDomain: "delivair-959e9.firebaseapp.com",
  projectId: "delivair-959e9",
  storageBucket: "delivair-959e9.appspot.com",
  messagingSenderId: "1084409904306",
  appId: "1:1084409904306:web:03f5e420eb889f115d1dab",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const app = initializeApp(firebaseConfig);



const PersonalInformationForm = () => {
  const [selected, setSelected] = useState("settings");
  const [settings, setSettings] = useState("settings");
  const [posts, setPosts] = useState(null);
  const [image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const changed = (pressed) => {
    setSettings(pressed === "settings" ? "settings" : null);
    setPosts(pressed === "posts" ? "posts" : null);
  };

  return (
    <Box backgroundColor={"#FFFFFF"} height={2000}>
      {settings && (
        <TouchableOpacity onPress={pickImage}>
          <Avatar
            top={120}
            size="2xl"
            borderRadius={100}
            source={{ uri: image }}
            alt="Profile Picture"
            alignSelf="center"
          />
        </TouchableOpacity>
      )}

      <Box top={200} alignItems="center">
        <Flex direction="row" h="58" p="4">
          <TouchableOpacity onPress={() => changed("settings")}>
            <Text style={{ color: settings ? "#5FC8C0" : "#000000", fontWeight: "bold", fontSize: 16 }}>
              Settings
            </Text>
          </TouchableOpacity>
          <Divider bg="#FFC8CE" thickness="2" mx="2" orientation="vertical" />
          <TouchableOpacity onPress={() => changed("posts")}>
            <Text style={{ color: posts ? "#5FC8C0" : "#000000", fontWeight: "bold", fontSize: 16 }}>
              Posts
            </Text>
          </TouchableOpacity>
        </Flex>
      </Box>

      {settings && (
        <View style={styles.card}>
          <View style={styles.cardBody}>
            <View style={styles.row}>
              <Text style={styles.labelText}>Full Name</Text>
              <Input variant="rounded" placeholder="John Doe" />
            </View>
            <View style={styles.row}>
              <Text style={styles.labelText}>Email</Text>
              <Input variant="rounded" placeholder="john@example.com" />
            </View>
            <View style={styles.row}>
              <Text style={styles.labelText}>Phone</Text>
              <Input variant="rounded" placeholder="(239) 816-9029" />
            </View>
            <View style={styles.row}>
              <Text style={styles.labelText}>Address</Text>
              <Input variant="rounded" placeholder="San Francisco, CA" />
            </View>
            <Button title="Save Changes" color="#5FC8C0" />
          </View>
        </View>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
  },
  cardBody: {
    padding: 10,
  },
  row: {
    flexDirection: "column",
    marginBottom: 15,
  },
  labelText: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 5,
  },
});

export default PersonalInformationForm;
