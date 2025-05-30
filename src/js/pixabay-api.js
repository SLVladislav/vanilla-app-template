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
        
       return fetch(url, options)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                
                this.incrementPage();
                return data.articles;
                
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
