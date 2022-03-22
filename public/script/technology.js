let url = 'https://newsapi.org/v2/top-headlines?' +
          'country=fr&category=technology'+
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
        let str = datas[2].content.substring(0, 200).split(' ').join('').length
        let un = datas[2].content.substring(201).split(' ').join('')
        let deux = un.split('[').join('')
        let trois = deux.split(']').join('')
        let quatre = trois.split('chars').join('')
        let cinq = quatre.split('+').join('')
        console.log(Number(cinq)+Number(str));
        generateArticles(datas);
    })

