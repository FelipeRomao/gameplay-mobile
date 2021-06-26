import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

export default function GuildIcon() {
  const uri =
    "https://www.pngitem.com/pimgs/m/529-5297554_transparent-background-discord-logo-transparent-hd-png-download.png";
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}
