const API_URL = 'https://ergast.com/api/f1'
const JSON_URL = 'http://localhost:3000'

export async function getAlldata(season) {
    try {
        const response = await fetch(`${API_URL}/${season}/drivers/alonso/results.json`);
        const data = await response.json();
        return data.MRData.RaceTable;
    }
    catch (error) {
        console.log("Error al cargar datos: " + error)
    }
}

export async function getAllCarreras() {
    try {
        const response = await fetch(`${API_URL}/drivers/alonso/results.json?limit=500`);
        const data = await response.json();
        return data.MRData.RaceTable.Races;
    }
    catch (error) {
        console.log("Error al cargar resultados: " + error)
    }
}

export async function getEquipoByIdJson(id) {
    try {
        const respuesta = await fetch(`${JSON_URL}/teams?id=${id}`);
        const resultado = await respuesta.json();
        return resultado
    } catch (error) {
        console.log("Error al cargar resultados: " + error)
    }
}

export async function getChassisJson() {
    try {
        const respuesta = await fetch(`${JSON_URL}/chassis`);
        const resultado = await respuesta.json()
        console.log(resultado)
        return resultado
    }
    catch (error) {
        console.log("Error al cargar resultados: " + error)
    }
}
