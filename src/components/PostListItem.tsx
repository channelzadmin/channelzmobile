import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

// Define types
interface Post {
  image: string;
  caption: string; // Optional field, add more properties as needed
}

interface PostListItemProps {
  post: Post;
}

export default function PostListItem({ post }: PostListItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* You can add user details or other information here */}
        <Text>{post.caption}</Text>
      </View>

      <Image source={{ uri: post.image }} style={styles.image} />

      <View style={styles.footer}>
        <Feather name="send" size={20} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff", // Equivalent to bg-white
  },
  header: {
    padding: 12, // Equivalent to p-3
    flexDirection: "row", // Equivalent to flex-row
    alignItems: "center", // Equivalent to items-center
    gap: 8, // Equivalent to gap-2
  },
  image: {
    width: "100%", // Full width image
    aspectRatio: 4 / 3, // Aspect ratio 4:3
  },
  footer: {
    flexDirection: "row", // Equivalent to flex-row
    gap: 12, // Equivalent to gap-3
    padding: 12, // Equivalent to p-3
  },
});
