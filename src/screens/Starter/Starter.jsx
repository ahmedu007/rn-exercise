import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, SafeAreaView, Button } from "react-native";

import styles from "./Starter.style.js";

const Starter = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.bold}>Welcome to the quiz</Text>
      <Button title="Start Quiz" onPress={() => navigation.navigate("Quiz")} />
    </SafeAreaView>
  );
};

export default Starter;
