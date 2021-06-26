import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";

import Profile from "../../components/profile";
import ButtonAdd from "../../components/button-add";
import CategorySelect from "../../components/category-select";
import ListHeader from "../../components/list-header";
import Appointment from "../../components/appointment";
import ListDivider from "../../components/list-divider";
import { styles } from "./styles";

export default function Home() {
  const [category, setCategory] = useState("");

  const appointments = [
    {
      id: "1",
      guild: { id: "1", name: "Lendários", icon: null, owner: true },
      category: "1",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: "2",
      guild: { id: "1", name: "Lendários", icon: null, owner: true },
      category: "1",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <View style={styles.content}>
        <ListHeader title="Partidas agendadas" subtitle="Total 6" />

        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
          renderItem={({ item }) => <Appointment data={item} />}
        />
      </View>
    </View>
  );
}
