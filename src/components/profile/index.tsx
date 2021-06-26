import React from "react";
import { View, Text } from "react-native";

import Avatar from "../../components/avatar";
import { styles } from "./styles";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/FelipeRomao.png" />

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>

          <Text style={styles.username}>Felipe</Text>
        </View>

        <Text style={styles.message}>Hoje é dia de vitória!</Text>
      </View>
    </View>
  );
}
