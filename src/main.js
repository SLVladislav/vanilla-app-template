import NewsApiService from "./js/pixabay-api";
import {appenedArticlesMarkup, clearArticlesContainer} from "./js/render-functions";
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";

const newsApiService = new NewsApiService();


const refs = {    
    searchForm: document.querySelector(".form"),
    loadMore: document.querySelector("[data-action=load-more]")
};

refs.searchForm.addEventListener("submit", onSearch);
refs.loadMore.addEventListener("click", onLoadMore);



function onSearch(event) {
    event.preventDefault();
   
    newsApiService.query = event.currentTarget.elements.search.value;    
    newsApiService.resetPage();
    newsApiService.fetchArticles().then(articles => {
        clearArticlesContainer();
        appenedArticlesMarkup(articles); 

    });
};

function onLoadMore() {
    newsApiService.fetchArticles().then(appenedArticlesMarkup);
};


