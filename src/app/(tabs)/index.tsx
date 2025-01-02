import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Text,
} from "react-native";
import { supabase } from "~/src/lib/supabase";
import PostListItem from "../../components/PostListItem";

interface Post {
  id: number;
  caption: string;
  created_at: string;
  image: string;
  // Add other fields based on your actual Post schema
}

export default function FeedScreen() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      Alert.alert("Something went wrong", error.message);
    } else {
      setPosts(data || []); // In case data is null or undefined
    }
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
      ) : (
        <FlatList
          data={posts}
          contentContainerStyle={styles.contentContainer}
          renderItem={({ item }) => <PostListItem post={item} />}
          keyExtractor={(item) => item.id.toString()} // Assumes 'id' is unique
          showsVerticalScrollIndicator={false}
        />
      )}
      {!loading && posts.length === 0 && (
        <Text style={styles.noPostsText}>No posts available</Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    gap: 10,
    maxWidth: 512,
    width: "100%",
    alignSelf: "center",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  noPostsText: {
    textAlign: "center",
    fontSize: 16,
    color: "gray",
    marginTop: 20,
  },
});
