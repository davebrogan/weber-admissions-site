const region = document.getElementsById(this);


function showCard(name) {
    name.style.display = 'flex';
}

function hideCard(name) {
    name.style.display = 'none';
}

function handler(e, el) {
    e = e || window.event;

    var pageX = e.pageX;
    var pageY = e.pageY;

    // IE 8
    if (pageX === undefined) {
        pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    function positionCard(name) {
        name.style.top = (pageX + 20) + "px";
        name.style.left = (pageY + 20) + "px";
    }
    //console.log(pageX, pageY);
    return positionCard(el);
}
function showCard() {
    let cardName = document.getElementById('card-counselor--alejandro');
    cardName.style.display = 'flex';
    handler(cardName);
}
function hideCard() {
    let cardName = document.getElementById('card-counselor--alejandro');
    cardName.style.display = 'none';
}

/************************************************************************************/

let regionList = document.getElementsByClassName('counselor-region');

for (var i = 0; i < regionList.length; i++) {
    regionList[i].addEventListener('mouseover', myFunction(regionList[i]), false);
}

function myFunction(elem) {
    let cardName = elem.dataset.counselor;
    let card = document.getElementById('card-counselor--' + cardName);
    return console.log(card);
}

let cardList = document.getElementsByClassName('card-counselor');

function showCard(el) {
    const counselorName = el.dataset.counselor;
    for (let i = 0; i < cardList.length; i++) {
        if (cardList[i].id === ('card-counselor--' + counselorName)) {
            return cardList[i].style.display = 'flex';
        }
    }
}

function hideCard() {
    for (let i = 0; i < cardList.length; i++) {
        if (cardList[i].style.display === 'flex') {
            return cardList[i].style.display = 'none';
        }
    }
}