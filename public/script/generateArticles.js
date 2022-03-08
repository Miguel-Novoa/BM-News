const generateArticles = (articlesDatas) =>{
    for(let i=0; i<articlesDatas.length; i++){
        articlesSection.innerHTML += `
        <section class="articles">
            <article>
                <div class="articleImg">
                    <img src="${articlesDatas[i].urlToImage}" alt="article image">
                </div>
                <p class="date">${convertTime(articlesDatas[i].publishedAt)}</p>
                <h2>${articlesDatas[i].title}</h2>
                <div class="articleFooter">
                    <p>Lire l'article de ${articlesDatas[i].author}</p>
                    <div class="readingTime">
                        <img src="../images/clock.png" alt="clock">
                        <p>05:00</p>
                    </div>
                </div>
            </article>
            <article>
                <div class="articleImg">
                    <img src="${articlesDatas[i+1].urlToImage}" alt="article image">
                </div>
                <p class="date">${convertTime(articlesDatas[i+1].publishedAt)}</p>
                <h2>${articlesDatas[i+1].title}</h2>
                <div class="articleFooter">
                    <p>Lire l'article de ${articlesDatas[i+1].author}</p>
                    <div class="readingTime">
                        <img src="../images/clock.png" alt="clock">
                        <p>05:00</p>
                    </div>
                </div>
            </article>
        </section>
        `
        i++
    };
};

const convertTime = (time) =>{
    let convertedTime = time.substring(8,10) + '/' + time.substring(5,7) + '/' + time.substring(0,4);
    return convertedTime;
}