let url = 'https://newsapi.org/v2/top-headlines?' +
          'country=fr&category=science'+
          '&sortBy=publishedAt'+
          '&apiKey=671c4f751d7b4b0a948e367e8869da21';

let req = new Request(url);
const articlesSection = document.querySelector('#articlesSection');

let datas;

fetch(req)
    .then(function(response) {
        return response.json()
    }).then(function(json) {
        datas = json.articles;
        generateArticles(datas);
    })

