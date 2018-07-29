import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" 
const KEY = "43e306bae471445189ea8ce5824257cd"

// var startDate = "01/01/2018";
// var endDate = Date.now();
// function yyyymmdd() {
//     var x = new Date();
//     var y = x.getFullYear().toString();
//     var m = (x.getMonth() + 1).toString();
//     var d = x.getDate().toString();
//     (d.length === 1) && (d = '0' + d);
//     (m.length === 1) && (m = '0' + m);
//     var yyyymmdd = y + m + d;
//     return yyyymmdd;
// }

// Export an object with a "search" method that searches the NYT API for passed query (search words)
export default {
    getArticles(search, startDate, endDate) {

        // startDate = "20180101";
        // endDate = yyyymmdd(Date.now());

        return axios.get(`${BASEURL}?q=${search}&begin_date=${startDate}&end_date=${endDate}&api_key=${KEY}`);
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
