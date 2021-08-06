import axios from "axios";

const Card = (article) => {
  //instantiating the elements
  const the_article = document.createElement('div');
  const the_headline = document.createElement('div');
  const the_author = document.createElement('div');
  const the_image_container = document.createElement('div');
  const the_image = document.createElement('img');
  const the_byauthorname = document.createElement('span');
  //setting class names, attributes, and txt
  the_article.classList.add('card');
  the_headline.classList.add('headline');
  the_author.classList.add('author');
  the_image_container.classList.add('img-container');
  the_headline.textContent = ` ${article.headline} `;
  the_image.src = ` ${article.authorPhoto} `;
  the_byauthorname.textContent = ` ${article.authorName} `;
  //creating the hierarchy
  the_article.appendChild(the_headline);
  the_article.appendChild(the_author);
  the_author.appendChild(the_image_container);
  the_author.appendChild(the_byauthorname);
  the_image_container.appendChild(the_image);

  return the_article;

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  //article is the object, {headline: xxx, authorPhoto: xxx, authorName: xxx}
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card"> 1 the_article
  //   <div class="headline">{ headline }</div> 2 the_headline
  //   <div class="author"> 3 the_author
  //     <div class="img-container"> 4 the_image_container
  //       <img src={ authorPhoto }> 5 the_image
  //     </div>
  //     <span>By { authorName }</span> 6 the_byauthorname
  //   </div>
  // </div>
  //
}

const articles_title = ['javascript', 'bootstrap', 'technology', 'jquery', 'node.js'];
articles_title.forEach(item => {
  
})


// axios.get('http://localhost:5000/api/articles')
//   .then(res => {
//     console.log(res.data.articles);
//     console.log(res.data.articles.javascript);
    
//   }).catch(err => console.error(err));

const cardAppender = (selector) => {
  axios.get('http://localhost:5000/api/articles')
    .then(res => {
      //console.log(res);
      res.data.articles['javascript'].forEach(item => {
        document.querySelector(selector).appendChild(Card(item));
      })
      res.data.articles['bootstrap'].forEach(item => {
        document.querySelector(selector).appendChild(Card(item));
      })
      res.data.articles['technology'].forEach(item => {
        document.querySelector(selector).appendChild(Card(item));
      })
      res.data.articles['jquery'].forEach(item => {
        document.querySelector(selector).appendChild(Card(item));
      })
      res.data.articles["node"].forEach(item => {
        document.querySelector(selector).appendChild(Card(item));
      })
    }).catch(err => console.error(err));
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
