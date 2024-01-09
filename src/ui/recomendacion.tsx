import { Card, H4 } from "tamagui"; // or '@tamagui/card'
import { Recomendacion } from "../domain/Recomendacion";

export function RecomendacionCard({
  incidencia,
  recomendacion,
}: Recomendacion) {
  return (
    <Card p={10} alignContent="center" bg={incidencia == 1 ? "red" : "green"}>
      <Card.Header>
        <H4>{"Su incidencia es de: " + incidencia}</H4>
      </Card.Header>

      <H4>{recomendacion}</H4>
    </Card>
  );
}
