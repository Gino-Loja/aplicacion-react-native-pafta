import { Prediction } from "../domain/Prediccion";
import { PrediccionRepository } from "../domain/PrediccionRepository";

export function createApiCourseRepository(): PrediccionRepository {
  return {
    get,
  };
}

async function get(fruto: number, severidad: number) {

  const prediccion = await global
    .fetch(`http://192.168.0.109:8000/predict`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fruto,
        severidad,
      }),
    })
    .then((response) => {
      
      return response.json() as Promise<Prediction>;
    })
    .catch(function (error) {
      console.log(
        "There has been a problem with your fetch operation: " + error.message
      );
      // ADD THIS THROW error
      throw error;
    });

  return prediccion;
}
