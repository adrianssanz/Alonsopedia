import data from '../db.json'
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
        console.log("Buscando equipo con id:", id); // Debugging
        const resultado = data.teams.find(team => team.id === Number(id));
        console.log("Resultado encontrado:", resultado); // Debugging
        return resultado || null;
    } catch (error) {
        console.log("Error al cargar equipo: " + error);
        return null;
    }
}


export async function getChassisJson() {
    try {
        const resultado = data.chassis;
        console.log(resultado);
        return resultado;
    } catch (error) {
        console.log("Error al cargar resultados: " + error);
    }
}

