import { Prediction } from "../domain/Prediccion";
import { PrediccionRepository } from "../domain/PrediccionRepository";

export async function getPrediccion(
  prediccionRepository: PrediccionRepository,
  fruto: number,
  severidad: number
): Promise<Prediction | null> {
  return prediccionRepository.get(fruto, severidad);
}
