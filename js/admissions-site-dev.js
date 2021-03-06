
let mapCardsList = document.getElementsByClassName('card-counselor');
let mainCardList = document.getElementsByClassName('card-admissions-counselor');
let mapField = document.getElementById('map-wrap');

for (const card of mainCardList) {
    card.addEventListener('focus', function(e) {
        this.style.outline = 'none';
    });
}

function showCard(el) {
    if (el === 'utah') {
        el = document.getElementById('ut');
    }
    const counselorName = el.dataset.counselor;
    for (let i = 0; i < mapCardsList.length; i++) {
        if (mapCardsList[i].id === ('card-counselor--' + counselorName)) {
            mapCardsList[i].style.visibility = 'visible';
            mapCardsList[i].style.opacity = '1';
        }
    }
}

function hideCard() {
    for (let i = 0; i < mapCardsList.length; i++) {
        if (mapCardsList[i].style.visibility === 'visible') {
            mapCardsList[i].style.visibility = 'hidden';
            mapCardsList[i].style.opacity = '0';
        }
    }
}

function scrollToCard(el) {
    if (el.dataset.counselor === 'utah') {
        document.getElementById('main-counselor-card--alejandro').scrollIntoView();
        for (let i = 0; i < mainCardList.length; i++) {
            if (mainCardList[i].classList.contains('-shadow')) {
                removeShadow(mainCardList[i]);
            }
        }
        return false;
    } else {
        const counselorName = el.dataset.counselor;
        for (let i = 0; i < mainCardList.length; i++) {
            if (mainCardList[i].id === ('main-counselor-card--' + counselorName)) {
                mainCardList[i].scrollIntoView();
                addShadow(mainCardList[i]);
            }
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
    let obj_left = 0;
    let obj_top = 0;
    let xpos;
    let ypos;

    while (obj.offsetParent) {
        obj_left += obj.offsetLeft;
        obj_top += obj.offsetTop;
        obj = obj.offsetParent;
    }
    if (mouseEvent) {
        xpos = mouseEvent.pageX;
        ypos = mouseEvent.pageY;
    }

    xpos -= obj_left;
    ypos -= obj_top;

    if (xpos < (obj.offsetWidth - 300) / 2) {
        deckHolder.style.left = xpos + 400 + 'px';
    } else {
        deckHolder.style.left = xpos - 50 + 'px';
    }
    deckHolder.style.top = ypos - 100 + 'px';
}

mapField.onmousemove = findObjectCoords;
