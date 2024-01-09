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
import { RecomendacionCard } from "./recomendacion";
import { useState } from "react";
import { Formik } from "formik";

export default function Prediccion() {
  const [incidencia, setIncidencia] = useState(null);
  const [recomendacion, setRecomendacion] = useState(null);
  const repository: PrediccionRepository = createApiCourseRepository();
  const fetchGetPrediccion = async (fruto: number, severidad: number) => {
    const response = await getPrediccion(repository, fruto, severidad).then(
      (data) => {
        if (data.incidencia == 1) {
          setRecomendacion(
            "Asegúrate de tomar las precauciones necesarias porque tus cultivos están en riesgo"
          );
        } else {
          setRecomendacion("Las plantaciones que posees se encuentran en un estado seguro");
        }
        setIncidencia(data.incidencia);
      }
    );
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ fruto: "", severidad: "" }}
        onSubmit={(values) =>
          fetchGetPrediccion(parseInt(values.fruto), parseInt(values.severidad))
        }
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <Form onSubmit={() => {}} space w={"80%"}>
            <YStack space>
              <YStack>
                <XStack alignItems="center" space="$4">
                  <Label theme="light_pink" htmlFor="fruto">
                    <H5>Numero de Fruto</H5>
                  </Label>
                  <Input
                    onChangeText={handleChange("fruto")}
                    //value={values.fruto.toString()}
                    keyboardType="numeric"
                    theme="light_pink_Input"
                    flex={1}
                    id="Fruto"
                  />
                </XStack>
              </YStack>
              <YStack>
                <XStack alignItems="center" space="$4">
                  <Label theme="light_pink" htmlFor="severidad">
                    <H5>Numero de Severidad</H5>
                  </Label>
                  <Input
                    theme="light_pink_Input"
                    onChangeText={handleChange("severidad")}
                    //value={values.severidad.toString()}
                    keyboardType="numeric"
                    flex={1}
                    id="severidad"
                  />
                </XStack>
              </YStack>

              <YStack>
                <Form.Trigger asChild>
                  <Button
                    theme="active"
                    m={"auto"}
                    w={"60%"}
                    onPress={() => handleSubmit()}
                  >
                    Calcular Incidencia
                  </Button>
                </Form.Trigger>
              </YStack>

              <YStack>
                <XStack alignItems="center" space="$4">
                  {incidencia != null ? (
                    <RecomendacionCard
                      incidencia={incidencia}
                      recomendacion={recomendacion}
                    ></RecomendacionCard>
                  ) : null}
                </XStack>
              </YStack>
            </YStack>
          </Form>
        )}
      </Formik>
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
    backgroundColor: "#ECADD4",
  },
});
