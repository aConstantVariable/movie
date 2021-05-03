const MOVIE_API = 'http://www.omdbapi.com/?apikey=f5203a41';

export class ApiService {

    static searchByName(name) {
        return fetch(`${MOVIE_API}&t=titanic`)
        .then(res =>res.json())
        .then(data => console.log(data));
    }
}