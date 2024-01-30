const API_URL='https://ergast.com/api/f1'

export async function getAlldata(season){
    try{
        const response = await fetch(`${API_URL}/${season}/drivers/alonso/results.json`);
        const data=await response.json();
        return data.MRData.RaceTable.Races;
    }
    catch(error){
        console.log("Error al cargar datos: "+error)
    }
};