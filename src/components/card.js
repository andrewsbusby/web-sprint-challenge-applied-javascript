import axios from 'axios';

const Card = (article) => {

  
  // CREATE ELEMENTS  
  const cards = document.createElement('div');
  const headLines = document.createElement('div');
  const authors = document.createElement('div');
  const imgCon = document.createElement('div');
  const image = document.createElement('img');
  const authorsName = document.createElement('span');

  // CLASSES
  cards.classList.add('card');
  headLines.classList.add('headline');
  authors.classList.add('author');
  imgCon.classList.add('img-container');

  // APPENDING
  cards.append(headLines);
  cards.append(authors);
  authors.append(imgCon);
  imgCon.append(image);
  authors.append(authorsName);

  // TEXT CONTENT
  headLines.textContent = `${article.headline}`;
  image.src = `${article.authorPhoto}`;
  authorsName.textContent = `${article.authorName}`

  cards.addEventListener('click', ()=>{
    console.log(headLines);
  })

  return cards;
}
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

const cardAppender = (selector) => {

  axios.get('https://lambda-times-api.herokuapp.com/articles')
  .then((res)=>{
    console.log(res.data.articles);
    const entry = document.querySelector(selector);
    const data = res.data.articles;

    data.javascript.forEach(element =>{
      entry.append(Card(element))

    })
      data.bootstrap.forEach(element =>{
        entry.append(Card(element))
        
      })
      data.jquery.forEach(element =>{
        entry.append(Card(element))
      })
      data.technology.forEach(element =>{
        entry.append(Card(element))
      })
      data.node.forEach(element =>{
        entry.append(Card(element))
      })
  })
  .catch((err)=>{
    console.log(err);
  }, [])

}
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

export { Card, cardAppender }
