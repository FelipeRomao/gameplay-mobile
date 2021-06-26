import React from "react";
import { View, ScrollView } from "react-native";

import { styles } from "./styles";
import { categories } from "../../utils/categories";
import Category from "../category";

type CategorySelectProps = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
};

export default function CategorySelect({
  categorySelected,
  setCategory,
}: CategorySelectProps) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map(category => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </ScrollView>
  );
}
