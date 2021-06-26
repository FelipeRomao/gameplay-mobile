import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

export default function GuildIcon() {
  const uri = "https://upload.wikimedia.org/wikipedia/pt/5/5f/COD_Warzone.jpg";
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}
