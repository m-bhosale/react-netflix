import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3"; // Remove the extra 'http://'
const apiToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjcyNzg4MWM5NWIxMDRhMGY0MmNjMmM5ODRjY2Q2MiIsInN1YiI6IjY0ZTdhNjE5NTI1OGFlMDEyY2E0OWU0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NdxI8skaAWpQ3oVXdfXBj6BmK6KFuo5secFhZexPGa0";

const headers = {
    Authorization: 'bearer ' + apiToken,
};

export const fetchMoviesData = async (endPoint: string, params?: any) => {
    try {
        const { data } = await axios.get(`${BASE_URL}${endPoint}`, {
            headers,
            params,
        });
        console.log('fetched Movie data',data)
        return data;
    } catch (error) {
        console.log(`Error fetching movies ${JSON.stringify(error)}`);
        throw new Error(`Error fetching movies ${JSON.stringify(error)}`);
    }
};
