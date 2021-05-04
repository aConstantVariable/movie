
const MOVIE_API = 'http://www.omdbapi.com/?apikey=f5203a41';
(function initialLoad() {
    
    document.getElementsByClassName('container')[0].style.display='none';

})();

search_item = document.getElementsByClassName('input-box')[0];
window.searchMovie = function () {
    if (search_item.value !== '') {
        fetch(`${MOVIE_API}&t=${search_item.value}`)
            .then(res => res.json())
            .then(data => extractData(data))
            .catch(Error => console.log('error'));
    } else {
        document.getElementsByClassName('welcome-text')[0].style.display='none';
        document.getElementsByClassName('movie-not-found')[0].style.display='none';
        document.getElementsByClassName('empty-input')[0].style.display='inline';

    }
}

function extractData(data) {
    document.getElementsByClassName('welcome-text')[0].style.display='none';
    document.getElementsByClassName('empty-input')[0].style.display='inline';

    if(data.Response === 'True') {
        document.getElementsByClassName('movie-not-found')[0].style.display='none';
        document.getElementsByClassName('container')[0].style.display='';
        var elm = document.getElementById('img');
        elm.src = data.Poster;
        var info = document.getElementsByClassName('movie-info')[0];
        info.innerHTML = `Title: ${data.Title} <br> 
        Actors: ${data.Actors} <br>
        Awards: ${data.Awards} <br>
        BoxOffice: ${data.BoxOffice} <br>
        Country: ${data.Country} <br>
        DVD: ${data.DVD} <br>
        Director: ${data.Director} <br>
        Genre: ${data.Genre} <br>
        Language: ${data.Language} <br>
        Year: ${data.Year} <br>
        imdbID: ${data.imdbID} <br>
        imdbRating: ${data.imdbRating}
        `
    } else {
        document.getElementsByClassName('container')[0].style.display='none';
        document.getElementsByClassName('empty-input')[0].style.display='none';
        document.getElementsByClassName('movie-not-found')[0].style.display='inline';

    }
   
}

