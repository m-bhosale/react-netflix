import { useEffect, useState } from 'react'
import { fetchMoviesData } from '../helper/api/tmdb';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../store/movieSlice';

export default function useFetch(endPoint: string) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState('');
    const [error, setError] = useState('null');
    const dispatch = useDispatch();

    useEffect(() => {
        setLoading('Loading...');
        fetchMoviesData(endPoint).then((res) => {
            setData(res)
        }).catch((err: any) => {
            setLoading('false');
            setError(`Something went wrong ${JSON.stringify(err)}`)
        })
    }, [endPoint])
    switch (endPoint) {
        case 'now_playing':
            dispatch(addNowPlayingMovies(data));
            break; // Don't forget to break to exit the switch statement
        default:
            console.log(`Unsupported endPoint: ${endPoint}`);
            break;
    }

    return { data, loading, error }
}