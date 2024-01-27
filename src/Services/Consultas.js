const API_URL='https://ergast.com/api/f1/drivers/alonso/results.json?limit=500'

export async function getAlldata(){
    try{
        const response = await fetch(`${API_URL}`);
        const data=await response.json();
        return data.MRData.RaceTable.Races;
    }
    catch(error){
        console.log("Error al cargar datos: "+error)
    }
}