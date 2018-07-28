import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" 
const KEY = "43e306bae471445189ea8ce5824257cd"

// Export an object with a "search" method that searches the NYT API for passed query (search words)
export default {
    getArticles(search) {
        return axios.get(`${BASEURL}?q=${search}&api_key=${KEY}`);
    },
    getSavedArticles() {
        return axios.get("/api/articles");
    },
    saveArticle(article) {
        return axios.post("/api/articles", article);
    },
    deleteArticle(id) {
        return axios.delete("/api/articles/" + id);
    }
};
