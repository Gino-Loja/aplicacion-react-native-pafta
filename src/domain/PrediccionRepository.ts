import { Prediction } from "./Prediccion";

export interface PrediccionRepository {
  get: (fruto: number, severidad: number) => Promise<Prediction | null>;
}
