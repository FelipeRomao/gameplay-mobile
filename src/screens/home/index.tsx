import React from "react";
import { View } from "react-native";

import Profile from "../../components/profile";
import ButtonAdd from "../../components/button-add";
import CategorySelect from "../../components/category-select";
import { styles } from "./styles";

export default function Home() {
  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <View>
        <CategorySelect />
      </View>
    </View>
  );
}
