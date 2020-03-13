// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get('https://lambda-times-backend.herokuapp.com/topics')

.then(response => {
console.log(response)

response.data.topics.forEach(function (item){
    let topicContainer = document.createElement('div')
    topicContainer.classList.add('tab')

    let topics = document.querySelector('.topics')

    topics.append(topicContainer)

    topicContainer.append(item)
    })
})

.catch(error => {
    console.log("ERROR FOUND!", error)
})