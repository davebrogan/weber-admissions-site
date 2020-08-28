
let cardList = document.getElementsByClassName('card-counselor');
let mainCardList = document.getElementsByClassName('card-admissions-counselor');
let mapField = document.getElementById('map-wrap');

function showCard(el) {
    const counselorName = el.dataset.counselor;
    for (let i = 0; i < cardList.length; i++) {
        if (cardList[i].id === ('card-counselor--' + counselorName)) {
            cardList[i].style.display = 'flex';
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

function scrollToCard(el) {
    const counselorName = el.dataset.counselor;
    for (let i = 0; i < mainCardList.length; i++) {
        if (mainCardList[i].id === ('main-counselor-card--' + counselorName)) {
            mainCardList[i].scrollIntoView();
            addShadow(mainCardList[i]);
        }
    }
}

function addShadow(el) {
    for (let i = 0; i < mainCardList.length; i++) {
        if (mainCardList[i].classList.contains('-shadow')) {
            removeShadow(mainCardList[i]);
        }
    }
    el.classList.add('-shadow');
}
function removeShadow(el) {
    el.classList.remove('-shadow');
}

function findObjectCoords(mouseEvent) {
    let obj = document.getElementById("map-wrap");
    let deckHolder = document.getElementById('deck-holder');
    let mapHeight = window.getComputedStyle(obj).getPropertyValue('height');
    let obj_left = 0;
    let obj_top = 0;
    let xpos;
    let ypos;

    while (obj.offsetParent)
    {
        obj_left += obj.offsetLeft;
        obj_top += obj.offsetTop;
        obj = obj.offsetParent;
    }
    if (mouseEvent)
    {
        //FireFox
        xpos = mouseEvent.pageX;
        ypos = mouseEvent.pageY;
    }

    xpos -= obj_left;
    ypos -= obj_top;


    if (xpos < (obj.offsetWidth - 300) / 2) {
        deckHolder.style.left = xpos + 300 + 'px';
    } else {
        deckHolder.style.left = xpos - 150 + 'px';
    }
    deckHolder.style.top = ypos - 250 + 'px';

    return console.log({
        x: xpos,
        y: ypos,
        obj: obj,
        objWidth: obj.offsetWidth,
        objHeight: mapHeight
    })
}

mapField.onmousemove = findObjectCoords;
