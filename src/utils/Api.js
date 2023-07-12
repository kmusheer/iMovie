import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_API_TMDB_TOKEN;


export const fetchDataFromApi = async(Url, params)=>{
    try {
        const {data} = await axios.get(BASE_URL + Url, {
            headers : {
                Authorization : "bearer " + TMDB_TOKEN,
            },
            params
        })
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}