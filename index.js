
const MOVIE_API = 'http://www.omdbapi.com/?apikey=f5203a41';
(function initialLoad() {
    fetch(`${MOVIE_API}&t=Strange`)
    .then(res => res.json())
    .then(data => extractData(data))
    .catch(error => console.log('error'));
})();




search_item = document.getElementsByClassName('input-box')[0];
window.searchMovie = function () {
    if (search_item.value !== this.undefined) {
        fetch(`${MOVIE_API}&t=${search_item.value}`)
            .then(res => res.json())
            .then(data => extractData(data))
            .catch(error => console.log('error'));
    } else {
        console.log(' nothing');
    }

}

function extractData(data) {
    console.log(data);
    var elm = document.getElementById('img');
    elm.src = data.Poster;
}

