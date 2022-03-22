let articleDatas = JSON.parse(sessionStorage.getItem('articleClicked'));
let main = document.querySelector('main');

const checkIfAuthorNull =(authorName, sourceName)=>{
    if(authorName == null){
        return sourceName;
    }else{
        return authorName;
    };
};

main.innerHTML += `
    <h2>${articleDatas.title}</h2>
    <p id="author">Par ${checkIfAuthorNull(articleDatas.author, articleDatas.source.name)}</p>
    <div id="dateAndTime">
        <p class="date">Publié le ${convertDate(articleDatas.publishedAt)} • </p>
        <div id="readingTime">
            <img src="../images/clock.png" alt="clock">
            <p>${determineReadingTime(determineCharsNumber(articleDatas.content))}</p>
        </div>
    </div>
    <img id="articleImg" src="${articleDatas.urlToImage}" alt="article image">
    <p id="resume">${articleDatas.description}</p>
    <a href='${articleDatas.url}' id='articleLink'><button>Lire la suite de l'article</button></a>
`;