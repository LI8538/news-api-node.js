const newsList = document.getElementById('news-list');

async function fetchNews() {
    try {
        const response = await fetch('/news');
        const news = await response.json();

        news.forEach(article => {
            //crée le li et déclaré en varaible 
            const li = document.createElement('li');
            //affihce crée et affiche image 
            const img = document.createElement('img');
            img.src = article.image;
            img.alt = article.title;
            li.appendChild(img);
            //crée balisa h2 et affiche le title
            const title = document.createElement('h2');
            title.textContent = article.title;
            li.appendChild(title);
            //date
            const publishedAt = document.createElement('p');
            publishedAt.textContent = 'date de publication : '+ new Date(article.published_at).toLocaleDateString();
            li.appendChild(publishedAt);
            //description
            const description = document.createElement('p');
            description.textContent = article.description;
            li.appendChild(description);
            //author
            const author = document.createElement('p');
            author.textContent = 'Author : ' + article.author;
            li.appendChild(author);
            //category
            const category = document.createElement('p');
            category.textContent = 'category : ' + article.category;
            li.appendChild(category);


            newsList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

fetchNews();
