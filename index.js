import { ApiService } from './src/apiService.js';

export class movieApp {
    constructor(){}

    search_item = document.getElementsByClassName('input-box');
    search_button = document.getElementsByClassName('search');
    
    // search_button.addEventListener('click', function(event) {
    //     ApiService.searchByName(search_item);
    // });


    
    searchMovie() {
        console.log('hi');
        ApiService.searchByName()
    }

    // searchMovie() {

    // }
}