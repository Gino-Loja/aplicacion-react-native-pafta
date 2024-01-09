import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import {
  Button,
  Card,
  H5,
  H4,
  XStack,
  YStack,
  Form,
  Label,
  Input,
} from "tamagui";
import { createApiCourseRepository } from "../infrastructure/ApiPrediccionRepository";
import { PrediccionRepository } from "../domain/PrediccionRepository";
import { getPrediccion } from "../application/getPrediccion";

export default function Prediccion() {
  const repository: PrediccionRepository = createApiCourseRepository();
  const fetchGetPrediccion = async () => {
    const response = await getPrediccion(repository, 3, 20).then((data) => {
      console.log(data);
    });
  };

  return (
    <View style={styles.container}>
      <Form
        onSubmit={() => {
          fetchGetPrediccion();
        }}
        space
        w={"80%"}
      >
        <YStack space>
          <YStack>
            <XStack alignItems="center" space="$4">
              <Label theme="light_green" w={"70%"} htmlFor="fruto">
                <H5>Numero de Fruto</H5>
              </Label>
              <Input keyboardType="numeric" flex={1} id="Fruto" />
            </XStack>
          </YStack>
          <YStack>
            <XStack alignItems="center" space="$4">
              <Label theme="light_green" w={"70%"} htmlFor="severidad">
                <H5>Numero de Severidad</H5>
              </Label>
              <Input keyboardType="numeric" flex={1} id="severidad" />
            </XStack>
          </YStack>
          <YStack>
            <XStack alignItems="center" space="$4">
              <H5></H5>
            </XStack>
          </YStack>
          <YStack>
            <Form.Trigger asChild>
              <Button
                theme="active"
                m={"auto"}
                w={"60%"}
                onPress={() => console.log("Botón presionado")}
              >
                Calcular Incidencia
              </Button>
            </Form.Trigger>
          </YStack>
        </YStack>
      </Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
