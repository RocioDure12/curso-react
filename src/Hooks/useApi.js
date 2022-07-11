const useApi = (url, api_key) => {

    const list = (type,language) => {
        return fetch(`${url}/${type}?api_key=${api_key}&language=${language}`)
            .then(res => res.json());
    }

    const listPopular = (language) => {
        return list("popular",language);
    }

    const listNowPlaying = (language) => {
        return list("now_playing",language);
    }

    return {
        listPopular,
        listNowPlaying
    }
};

export default useApi;