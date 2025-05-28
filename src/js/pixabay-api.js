// import axios from "axios";

// const API_KEY = "33675030-cc14eed331d6d92ff5641cad6";
// const URL_API = "https://pixabay.com/api/";

// export function getImagesByQuery(query) {
//   return  axios.get(`${URL_API}`, {
//         params: {
//             key: API_KEY,
//             q: query,
//             image_type: 'photo',
//             orientation: 'horizontal',
//             safesearch: true,
//         }
//     }).then(response => {
//        return response.data;
//     })
// };

        
       



  
//  function fetchpokemon(pokemonId) {
//     return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(response => {
//         if (!response.ok) {
//             throw new Error(response.status);
//           }
//         return response.json()
//     });
// };
// export default { fetchpokemon };

export default class NewsApiService{
    constructor() {
        this.searchQuery = "";
        this.page = 1;
    }
    fetchArticles() {      
        
        const options = {
            headers: {
                Authorization: "f3323d46655a4e019902ab3323a334f1",
            }
        };
        const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&pageSize=10&page=${this.page}`;
        
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                this.incrementPage();
                
            });
            
    }
    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}
