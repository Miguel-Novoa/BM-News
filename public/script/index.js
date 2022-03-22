let urlTechnology = 'https://newsapi.org/v2/top-headlines?' +
          'country=fr&category=technology' +
          '&sortBy=publishedAt'+
          '&apiKey=671c4f751d7b4b0a948e367e8869da21';

let urlSciences = 'https://newsapi.org/v2/top-headlines?' +
        'country=fr&category=science'+
        '&sortBy=publishedAt'+
        '&apiKey=671c4f751d7b4b0a948e367e8869da21';

let reqTech = new Request(urlTechnology);
let reqSciences = new Request(urlSciences);

let datasTech;
let datasSciences;
let scienceArt = [];
let techArt = [];

let latestArticle = document.querySelector('#latestArticle');
let oldestArticles = document.querySelector('#newArticlesArticles');

const fetchTech = fetch(urlTechnology)
    .then(function(response) {
        return response.json()
    }).then(function(json) {
        datasTech = json.articles;
        techArt.push(datasTech[0], datasTech[1]);
        return techArt;
    });

const fetchSciences = fetch(urlSciences)
    .then(function(response) {
        return response.json()
    }).then(function(json) {
        datasSciences = json.articles;
        let content = datasSciences[0].content
        scienceArt.push(datasSciences[0], datasSciences[1]);
        return scienceArt;
    });

const sortAllArticles = (case1, case2, case3, case4) =>{
    let newest;
    let oldest = [];
    let allArticles = [case1, case2, case3, case4];
    
    for(let i=0; i<allArticles.length; i++){
        if(newest == null){
            newest = allArticles[i];
        }else{
            if(allArticles[i].publishedAt.substring(8,10) > newest.publishedAt.substring(8,10)){
                oldest.push(newest);
                newest = allArticles[i];    
            }else if(allArticles[i].publishedAt.substring(8,10) < newest.publishedAt.substring(8,10)){
                oldest.push(allArticles[i]);
            }else if(allArticles[i].publishedAt.substring(8,10) == newest.publishedAt.substring(8,10)){
                if(allArticles[i].publishedAt.substring(11,13) > newest.publishedAt.substring(11,13)){
                    oldest.push(newest);
                    newest = allArticles[i];
                }else if(allArticles[i].publishedAt.substring(11,13) < newest.publishedAt.substring(11,13)){
                    oldest.push(allArticles[i]);
                }else if(allArticles[i].publishedAt.substring(11,13) == newest.publishedAt.substring(11,13)){
                    if(allArticles[i].publishedAt.substring(14,16) > newest.publishedAt.substring(14,16)){
                        oldest.push(newest);
                        newest = allArticles[i];
                    }else if(allArticles[i].publishedAt.substring(14,16) < newest.publishedAt.substring(14,16)){
                        oldest.push(allArticles[i]);
                    }else if(allArticles[i].publishedAt.substring(14,16) == newest.publishedAt.substring(14,16)){
                        if(allArticles[i].publishedAt.substring(17,19) > newest.publishedAt.substring(17,19)){
                            oldest.push(newest);
                            newest = allArticles[i];
                        }else if(allArticles[i].publishedAt.substring(17,19) < newest.publishedAt.substring(17,19)){
                            oldest.push(allArticles[i]);
                        }else if(allArticles[i].publishedAt.substring(17,19) == newest.publishedAt.substring(17,19)){
                            oldest.push(newest);
                            newest = allArticles[i];
                        };
                    };
                };
            };
        };
    };
    
    displayNewestArticle(newest);
    displayOldestArticles(oldest);
};

Promise.all([fetchTech, fetchSciences])
        .then((values)=>{
            sortAllArticles(values[0][0], values[0][1], values[1][0], values[1][1])
        })


const displayNewestArticle = (newest) =>{
    latestArticle.innerHTML += `
    <div id="latestArticleImg">
        <img src="${newest.urlToImage}" alt="article image">
    </div>
    <p class="date">${convertDate(newest.publishedAt)}</p>
    <h2>${newest.title}</h2>
    <div id="articleFooter">
        <p>Lire l'article ${checkIfAuthorNull(newest.author)}</p>
        <div id="readingTime">
            <img src="./images/clock.png" alt="clock">
            <p>${determineReadingTime(determineCharsNumber(newest.content))}</p>
        </div>
    </div>
    `;

    latestArticle.addEventListener('click', ()=>{
        sessionStorage.setItem('articleClicked', JSON.stringify(newest));
        window.location = './pages/article.html'
    });
};

const displayOldestArticles = (oldest) =>{
    for(let i=0; i<oldest.length; i++){
        oldestArticles.innerHTML += `
        <article class='oldestArticle'>
            <div class="newArticleImg">
            <img src="${oldest[i].urlToImage}" alt="article image"> 
            </div>
            <div class="newArticleContent">
                <div class="newArticleTime">
                    <img class="clock" src="./images/clock.png" alt="clock">
                    <p>${determineReadingTime(determineCharsNumber(oldest[i].content))}</p>
                </div>
                <h3>${oldest[i].title}</h3>
                <p>Lire l'article ${checkIfAuthorNull(oldest[i].author)}</p>
            </div>
        </article>
        `;

        let article = document.querySelectorAll('.oldestArticle');

        for(let i=0; i<article.length; i++){
            article[i].addEventListener('click', ()=>{
                sessionStorage.setItem('articleClicked', JSON.stringify(oldest[i]));
                window.location = './pages/article.html';
            });
        };
    };
};

const checkIfAuthorNull = (author) =>{
    if(author == null){
        return '';
    }else{
        return 'de ' + author;
    };
};