import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const refs = {
    cardConteiner: document.querySelector(".js-card-container"),
}



 function appenedArticlesMarkup(articles) {
    const marcupList = articles.map(({ url, urlToImage, title, author, description }) =>
        `
        <li>
        <a href="${urlToImage}" target="_blank" rel="noopener noreferrer">
        <article>
        <img src="${urlToImage}" alt="" width="480">
        <h2>"${title}"</h2>
        <p>Posted by: "${author}"</p>
        <p>"${description}"</p>  
        </article>
        </li>
       `).join("");


     refs.cardConteiner.insertAdjacentHTML("beforeend", marcupList);
    
     new SimpleLightbox(".js-card-container a", {
        captionsData: 'alt',
        captionDelay: 250,
        loop: true,
        animationSpeed: 300,
        enableKeyboard: true
    });    
    
}

 function clearArticlesContainer() {
    refs.cardConteiner.innerHTML = "";
}
export { appenedArticlesMarkup, clearArticlesContainer };