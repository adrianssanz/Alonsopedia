const API_URL='https://ergast.com/api/f1'

export async function getAlldata(season){
    try{
        const response = await fetch(`${API_URL}/${season}/drivers/alonso/results.json`);
        const data=await response.json();
        return data.MRData.RaceTable;
    }
    catch(error){
        console.log("Error al cargar datos: "+error)
    }
};




const API_URL_ergast='https://ergast.com/api/f1'
const API_URL_sports='https://v1.formula-1.api-sports.io'

export async function getAllCarreras(){
    try{
        const response = await fetch(`${API_URL_ergast}/drivers/alonso/results.json?limit=500`);
        const data=await response.json();
        return data.MRData.RaceTable.Races;
    }
    catch(error){
        console.log("Error al cargar resultados: "+error)
    }
}

export async function getCarrerasBySeason(season){
    try{
        const response = await fetch(`${API_URL_ergast}/${season}/drivers/alonso/results.json`);
        const data=await response.json();
        return data.MRData.RaceTable.Races;
    }
    catch(error){
        console.log("Error al cargar resultados: "+error)
    }
}

export async function getAllEquipos(){
    try{
        const response = await fetch(`${API_URL_sports}/drivers?search=alonso`, {
            method: "GET",
            headers: {
              "x-rapidapi-host": "v1.formula-1.api-sports.io",
              "x-rapidapi-key": "9d9531dc54bfaabe458eb69203ff29d2"
            }
          });
        const data=await response.json();
        return data.response[0].teams;
    }
    catch(error){
        console.log("Error al cargar equipos: "+error)
    }
}

export async function getEquipoById(id){
    try{
        const response = await fetch(`${API_URL_sports}/teams?id=${id}`, {
            method: "GET",
            headers: {
              "x-rapidapi-host": "v1.formula-1.api-sports.io",
              "x-rapidapi-key": "9d9531dc54bfaabe458eb69203ff29d2"
            }
          });
        const data=await response.json();
        return data.response[0];
    }
    catch(error){
        console.log("Error al cargar equipos: "+error)
    }
}

export async function getAllEquiposJson(){
    const respuesta=await fetch('http://localhost:3000/teams')
    const resultado=await respuesta.json()
    console.log(resultado)
    return resultado
}

export async function getEquipoByIdJson(id) {
    const respuesta = await fetch(`${'http://localhost:3000/teams'}?id=${id}`)
    const resultado = await respuesta.json();
    return resultado
}

export async function getChassisJson(){
    const respuesta=await fetch('http://localhost:3000/chassis')
    const resultado=await respuesta.json()
    console.log(resultado)
    return resultado
}