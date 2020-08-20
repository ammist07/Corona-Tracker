import axios from "axios"

const url='https://covid19.mathdro.id/api';

 export const fetchData =  async () =>{
    try{
        const {data} = await axios.get(url);
        const basic = {
            confirmed:data.confirmed,
            recovered:data.recovered,
            deaths:data.deaths,
            latestdate:data.lastUpdate,
        }
        return basic
    }catch (error){

    }
}

export const dailydata = async () =>{
    try{
        const {data} = await axios.get(`${url}/daily`);
        return data
    } catch (errors){

    }
}