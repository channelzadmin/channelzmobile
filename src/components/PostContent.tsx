import { useWindowDimensions, View, StyleSheet } from "react-native";
import { cld } from "../lib/cloudinary";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage } from "cloudinary-react-native";

interface Post {
  image: string;
  caption: string; // Define other properties of `post` if needed
}

type PostContentProps = {
  post: Post;
};

export default function PostContent({ post }: PostContentProps) {
  const { width } = useWindowDimensions();
  const image = cld.image(post.image);
  image.resize(thumbnail().width(width).height(width));

  return (
    <View style={styles.container}>
      <AdvancedImage cldImg={image} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    aspectRatio: 4 / 3,
  },
  image: {
    width: "100%",
    height: "100%", // Ensures image takes full height based on aspect ratio
  },
});
