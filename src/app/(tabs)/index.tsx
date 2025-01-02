import React from "react";
import { FlatList, StyleSheet } from "react-native";
import posts from "~/assets/data/posts.json";
import PostListItem from "../../components/PostListItem";

export default function FeedScreen() {
  return (
    <FlatList
      data={posts}
      contentContainerStyle={styles.contentContainer}
      renderItem={({ item }) => <PostListItem post={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    gap: 10,
    maxWidth: 512,
    width: "100%",
    alignSelf: "center",
  },
});
