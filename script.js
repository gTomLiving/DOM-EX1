function main() {
    console.log('hello');
    const setHeaderInput = document.querySelector('h1')
    const inputName = document.getElementById('name')

    setHeaderInput.innerText = `Welcome, ${inputName.value}!`;
    
}
//adding big to I will grow 
const bigP = document.getElementById('grow-me');
console.log(bigP);
bigP.classList.add('big');

//remove big from shrink me

const shrinkP = document.getElementById('shrink-me');
shrinkP.classList.remove('big');
console.log(shrinkP);

//3 

const listItems = document.querySelectorAll('li');

console.log(listItems);


//4

const link = document.querySelector('.link');
console.log(link);
link.setAttribute('href', "http://example.com", 'Somewhere');
link.innerHTML = 'Somewhere';

//5

const hidden = document.getElementById('hide-me');
hidden.style.display = "none";

//6 

const show = document.getElementById('show-me');
show.style.display = "block";

//7
// const welcomHeader = document.querySelectorAll("h1");
// const button = document.createElement('button');



// button.addEventListener('click', (event) => {
//     console.log(event.target);
//     event.target.innerText = 'helllo';
//     welcomHeader.innerText = 'Did someone click a button?'
//     console.log(welcomHeader);

// })


// const nameFull = document.getElementById('name');
// 

// welcomHeader.innerText = nameFull.onClick();



//find average from an array of numbers 

