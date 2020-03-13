// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
let container = document.createElement('div')
container.classList.add('header')

let date = document.createElement('span')
date.classList.add('date')
date.textContent = "March 28, 2019"


let headline = document.createElement('h1')
headline.textContent = "Lambda Times"

let temp = document.createElement('span')
temp.classList.add('temp')
temp.textContent = "98°"


container.append(date, headline, temp);
document.querySelector('.header-container').append(container)
return container;
}
Header()