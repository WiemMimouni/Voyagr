// UserSetting.js

// React & React Native imports
import { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Button,
  Text,
  TouchableOpacity,
} from "react-native";
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

// Firebase imports (Clean and Correct!)
import { storage } from "../../firebase"; // Adjust path correctly according to your directory
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const PersonalInformationForm = () => {
  const [selected, setSelected] = useState("settings");
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

  return (
    <Box backgroundColor="#FFFFFF" height={2000}>
      <TouchableOpacity onPress={pickImage}>
        <Avatar
          top={120}
          size="2xl"
          borderRadius={100}
          source={{ uri: image }}
          alignSelf="center"
        />
      </TouchableOpacity>

      <Box top={200} alignItems="center">
        <Flex direction="row" h="58" p="4">
          <HStack>
            <TouchableOpacity onPress={() => setSelected("settings")}>
              <Text
                style={{
                  color: selected === "settings" ? "#5FC8C0" : "#000000",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Settings
              </Text>
            </TouchableOpacity>
          </HStack>
          <Divider bg="#FFC8CE" thickness="2" mx="2" orientation="vertical" />
          <HStack>
            <TouchableOpacity onPress={() => setSelected("posts")}>
              <Text
                style={{
                  color: selected === "posts" ? "#5FC8C0" : "#000000",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Posts
              </Text>
            </TouchableOpacity>
          </HStack>
        </Flex>
      </Box>

      {selected === "settings" && (
        <View style={styles.card}>
          <View style={styles.cardBody}>
            {["Full Name", "Email", "Phone", "Mobile", "Address"].map(
              (label) => (
                <View style={styles.row} key={label}>
                  <View style={styles.labelColumn}>
                    <Text style={styles.labelText}>{label}</Text>
                  </View>
                  <View style={styles.inputColumn}>
                    <Input
                      variant="rounded"
                      borderColor="#000000"
                      placeholderTextColor="#000000"
                      size="l"
                      style={styles.input}
                      placeholder={label}
                    />
                  </View>
                </View>
              )
            )}
            <View style={styles.row}>
              <View style={styles.emptyColumn} />
              <View style={styles.buttonColumn}>
                <Button
                  title="Save Changes"
                  color="#000000"
                  onPress={() => {}}
                />
              </View>
            </View>
          </View>
        </View>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  card: {
    top: 200,
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    marginBottom: 1.5,
  },
  cardBody: {
    padding: 70,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  labelColumn: {
    width: 80,
    right: 30,
  },
  labelText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#000000",
  },
  inputColumn: {
    flex: 1,
  },
  emptyColumn: {
    width: 80,
  },
  buttonColumn: {
    backgroundColor: "#5FC8C0",
    left: 80,
    top: 20,
    borderRadius: 10,
  },
});

export default PersonalInformationForm;
