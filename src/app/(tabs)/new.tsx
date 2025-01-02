import {
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";

export default function CreatePost() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (!image) {
      pickImage();
    }
  }, [image]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      {/* Image picker */}
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <View style={styles.placeholder} />
      )}

      <Text onPress={pickImage} style={styles.changeText}>
        Change
      </Text>

      {/* TextInput for caption */}
      <TextInput
        value={caption}
        onChangeText={(newValue) => setCaption(newValue)}
        placeholder="Write Caption"
        style={styles.captionInput}
      />

      {/* Button */}
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Share</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2196F3", // Represents bg-blur-500 (grayish color)
    width: "100%",
    padding: 12,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#ffffff", // Text color white
    fontWeight: "600", // Font weight semi-bold
  },
  container: {
    padding: 12,
    alignItems: "center",
    flex: 1,
  },
  placeholder: {
    width: 208,
    aspectRatio: 3 / 4,
    borderRadius: 8,
    backgroundColor: "#e2e2e2", // Light gray placeholder color
  },
  image: {
    width: 208,
    aspectRatio: 3 / 4,
    borderRadius: 8,
    backgroundColor: "#e2e2e2", // Image background color
  },
  changeText: {
    color: "#1d4ed8", // Blue color
    fontWeight: "600", // Semi-bold font
    marginTop: 20,
    marginBottom: 20,
  },
  captionInput: {
    width: "100%",
    padding: 12,
    marginBottom: 20, // Added some margin to the bottom for spacing
  },
  buttonContainer: {
    marginTop: "auto",
    width: "100%",
  },
});
