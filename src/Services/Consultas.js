const API_URL = 'https://ergast.com/api/f1'

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

export async function getAllEquiposJson() {
    const respuesta = await fetch('http://localhost:3000/teams')
    const resultado = await respuesta.json()
    console.log(resultado)
    return resultado
}

export async function getEquipoByIdJson(id) {
    const respuesta = await fetch(`${'http://localhost:3000/teams'}?id=${id}`)
    const resultado = await respuesta.json();
    return resultado
}

export async function getChassisJson() {
    const respuesta = await fetch('http://localhost:3000/chassis')
    const resultado = await respuesta.json()
    console.log(resultado)
    return resultado
}
