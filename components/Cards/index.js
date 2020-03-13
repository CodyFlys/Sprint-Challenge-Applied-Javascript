// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


function cardMaker(item) {
    console.log(item)
    let newCard = document.createElement('div')
    let headline = document.createElement('div')
    let author = document.createElement('div')
    //IN AUTHOR
    let imageContainer = document.createElement('div')
    // IN IMAGE CONTAINER
    let img = document.createElement('img')

    let authorName = document.createElement('span')

    newCard.append(headline, author)
    author.append(imageContainer, authorName)
    imageContainer.append(img)
    document.querySelector('.cards-container').append(newCard)

    newCard.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imageContainer.classList.add('img-container')

    headline.textContent = item.headline
    img.src = item.authorPhoto
    authorName.textContent = `by, ${item.authorName}`

    
    return newCard;
}



axios.get('https://lambda-times-backend.herokuapp.com/articles')

.then(response => {
    console.log(response);
    Object.values(response.data.articles).forEach(function (item){
        item.forEach(function (item2){
            cardMaker(item2)
        })
    })
})