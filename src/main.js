import NewsApiService from "./js/pixabay-api";
// import newsApiService from "./js/pixabay-api"
// console.log(getImagesByQuery());




// const btnSubmit = document.querySelector(".form");
// const btnInput = document.querySelector("input[type=text]")

// btnSubmit.addEventListener("click", (evt) => {
//     const valueInpu = evt.target.text;
//     console.log(valueInpu);
    
//     // const valueForm = evt.target.input;
//     // getImagesByQuery(valueForm);
// })

// btnSubmit.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const query = event.element.value.trim();
//     if (!query) {
//         console.log("Error");
        
//     }
    
//     getImagesByQuery(query).then(data => {
//         console.log(data.query);
        
//     }).cach(error => {
//         console.log(error);
//     })
    
    
// })

const newsApiService = new NewsApiService();

const refs = {
    cardConteiner: document.querySelector(".js-card-container"),
    searchForm: document.querySelector(".form"),
    loadMore: document.querySelector("[data-action=load-more]")
};

refs.searchForm.addEventListener("submit", onSearch);
refs.loadMore.addEventListener("click", onLoadMore);



function onSearch(event) {
    event.preventDefault();

    newsApiService.query = event.currentTarget.elements.search.value;    
    newsApiService.resetPage();
    newsApiService.fetchArticles();
};

function onLoadMore() {
    newsApiService.fetchArticles();
}

// function onSearch(e) {
//     e.preventDefault();
//     const form = e.currentTarget;
//     // console.log(form.elements);
    
//     const searchName = form.elements.search.value;
//     fetchpokemon(searchName)
//         .then(renderPokemon)
//         .catch(onError)
//         .finally(() => { form.reset() });
// };



// function fetchpokemon(pokemonId) {
//     return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(response => {
//         if (!response.ok) {
//             throw new Error(response.status);
//           }
//         return response.json()
//     });
// };

//

// function onError(error) {
//     alert("УПС ПИЗДА")
// }



// f3323d46655a4e019902ab3323a334f1

// https://newsapi.org/v2/everything?q=tesla

// const options = {
//     headers: {
//         Autorization: "f3323d46655a4e019902ab3323a334f1",
//     }
// };
// const url = "https://newsapi.org/v2/everything?q=tesla&pageSize=10&page=1";

// fetch(url, options)
//     .then(r => r.json())
//     .then(console.log) 

