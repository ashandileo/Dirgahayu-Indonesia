import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

import {
  useFonts as useNorican,
  Norican_400Regular,
} from "@expo-google-fonts/norican";

import {
  useFonts as useBebasNeue,
  BebasNeue_400Regular,
} from "@expo-google-fonts/bebas-neue";

export default function App() {
  const [noricanLoaded] = useNorican({ Norican_400Regular });
  const [bebasNeueLoaded] = useBebasNeue({ BebasNeue_400Regular });

  if (!noricanLoaded || !bebasNeueLoaded) {
    return;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textOne}>Dirgahayu</Text>
      <Text style={styles.textTwo}>INDONESIA</Text>
      <View style={styles.textThreeContainer}>
        <Image source={require("./assets/flag.png")} />
        <Text style={styles.textThree}>17 Agustus</Text>
        <Image source={require("./assets/flag2.png")} />
      </View>

      <View style={styles.textFourContainer}>
        <Text style={styles.textFour}>@ashandi.techie</Text>
      </View>

      <Image
        source={require("./assets/bottomImage.png")}
        style={styles.bottomImage}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF6DB",
    alignItems: "center",
    paddingTop: 150,
  },
  textOne: {
    fontFamily: "Norican_400Regular",
    color: "#07415D",
    fontSize: 40,
  },
  textTwo: {
    fontFamily: "BebasNeue_400Regular",
    color: "#FD0A53",
    fontSize: 60,
  },
  textThree: {
    fontFamily: "BebasNeue_400Regular",
    color: "#07415D",
    fontSize: 30,
  },
  textThreeContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  textFour: {
    color: "#FFF",
    fontWeight: "bold",
  },
  textFourContainer: {
    backgroundColor: "#E3E0CD",
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 50,
    marginTop: 90,
  },
  bottomImage: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
});
