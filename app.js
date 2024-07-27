// variables

const count = document.querySelector('.count');
const addBtn = document.querySelector('.add-btn');
const subBtn = document.querySelector('.sub-btn');
const refresh = document.querySelector('.refresh-btn');
let countNum = 0;

// event listeners

addBtn.addEventListener('click', add);

subBtn.addEventListener('click', sub);

refresh.addEventListener('click', reUp);

// functions

function add(e) {
    e.preventDefault()
    countNum += 1;
    count.textContent = countNum;
}

function sub(e){
    e.preventDefault()
    countNum -= 1;
    count.textContent = countNum;
}

function reUp(e){
    e.preventDefault()
    countNum = 0;
    count.textContent = countNum;
}