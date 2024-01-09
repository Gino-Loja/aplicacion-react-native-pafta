import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button, Card, H2, H4, XStack, YStack ,Circle} from "tamagui";

export default function Otra() {
  return (
    <View style={styles.container}>
      <YStack space w={'80%'}>
        <YStack >
        <Circle  size="$4" />
          <Card >
            
            <Card.Header >
              <H4 >
                !Hola esta app sirve para la consulta de la incidencia de la
                Escoba bruja en plantaciones de cacao
              </H4>
            </Card.Header>
          </Card>
        </YStack>
        <YStack>
          <Card>
            <Card.Header>
              <H4>
                Deberas ingresar el numero de fruto y la severidad del fruto
              </H4>
            </Card.Header>
          </Card>
        </YStack>
        <YStack>
          <Card>
            <Card.Header>
              <H4>Comienza dandole al boton de siguiente</H4>
            </Card.Header>
          </Card>
        </YStack>
        <YStack>
          <Button
           theme="active"
            m={"auto"}
            w={"50%"}
            onPress={() => console.log("Botón presionado")}
          >
            Siguiente
          </Button>
        </YStack>
      </YStack>
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
