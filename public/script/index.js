var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=fr&category=technology' +
          '&apiKey=671c4f751d7b4b0a948e367e8869da21';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })