/* eslint-disable import/no-anonymous-default-export */
const API_KEY = '1e199411182ffaea924f9fa20e0533c5';
const API_BASE = 'https://api.themoviedb.org/3';
const API_NETWORK_OPTION = 'language=pt-BR';

const basicFetch = async (endpoint) => {
    const request = await fetch(`${API_BASE}${endpoint}`);
    const json = await request.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&${API_NETWORK_OPTION}&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?${API_NETWORK_OPTION}&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?${API_NETWORK_OPTION}&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&${API_NETWORK_OPTION}&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comedia',
                items: await basicFetch(`/discover/movie?with_genres=35&${API_NETWORK_OPTION}&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&${API_NETWORK_OPTION}&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&${API_NETWORK_OPTION}&api_key=${API_KEY}`)
            }
        ]
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};
        if(movieId && type) {
            info = await basicFetch(`/${type}/${movieId}?language=pt-BR&api_key=${API_KEY}`);
        }
        return info;
    }
}