const generateArticles = (articlesDatas) =>{
    for(let i=0; i<articlesDatas.length; i++){
        articlesSection.innerHTML += `
        <section class="articles">
            <article>
                <div class="articleImg">
                    <img src="${articlesDatas[i].urlToImage}" alt="article image">
                </div>
                <p class="date">${convertDate(articlesDatas[i].publishedAt)}</p>
                <h2>${articlesDatas[i].title}</h2>
                <div class="articleFooter">
                    <p>Lire l'article ${checkIfAuthorNull(articlesDatas[i].author)}</p>
                    <div class="readingTime">
                        <img src="../images/clock.png" alt="clock">
                        <p>${determineReadingTime(determineCharsNumber(articlesDatas[i].content))}</p>
                    </div>
                </div>
            </article>
            <article>
                <div class="articleImg">
                    <img src="${articlesDatas[i+1].urlToImage}" alt="article image">
                </div>
                <p class="date">${convertDate(articlesDatas[i+1].publishedAt)}</p>
                <h2>${articlesDatas[i+1].title}</h2>
                <div class="articleFooter">
                    <p>Lire l'article ${checkIfAuthorNull(articlesDatas[i+1].author)}</p>
                    <div class="readingTime">
                        <img src="../images/clock.png" alt="clock">
                        <p>${determineReadingTime(determineCharsNumber(articlesDatas[i+1].content))}</p>
                    </div>
                </div>
            </article>
        </section>
        `
        i++
    };

    let articles = document.querySelectorAll('article');
    for(let i=0; i<articles.length; i++){
        articles[i].addEventListener('click', ()=>{
            sessionStorage.setItem('articleClicked', JSON.stringify(articlesDatas[i]));
            window.location = './article.html'
        })
    }
};

const checkIfAuthorNull = (author) =>{
    if(author == null){
        return '';
    }else{
        return 'de ' + author;
    };
};