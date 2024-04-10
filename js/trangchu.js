// slide banner
let list = document.querySelector('.banner .list-banner');
let items = document.querySelectorAll('.banner .item-banner');
let dots = document.querySelectorAll('.banner .dots-banner li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let active = 0;
let lengthItems = items.length - 1;
next.onclick = function () {
    if (active + 1 > lengthItems) {
        active = 0;
    }
    else
        active += 1;
    reloadSlider();

}
prev.onclick = function () {
    if (active - 1 < 0)
        active = lengthItems;
    else
        active -= 1;
    reloadSlider();
}
function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.banner .dots-banner li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {
        next.click();
    }, 3000);
}
dots.forEach((li, key) => {
    li.addEventListener('click', function () {
        active = key;
        reloadSlider();
    })
});
let refreshSlider = setInterval(() => {
    next.click();
}, 3000);


// category
let itemMale = document.querySelector('.item-male');
let itemFemale = document.querySelector('.item-female');
let itemChildren = document.querySelector('.item-children');
let SlideMale = document.querySelector('.slide-content-male');
let SlideFemale = document.querySelector('.slide-content-female');
let SlideChildren = document.querySelector('.slide-content-children');

itemMale.addEventListener('click', () => {
    itemMale.classList.add('cate-active');
    itemFemale.classList.remove('cate-active');
    itemChildren.classList.remove('cate-active');

    SlideMale.classList.remove('none');
    SlideFemale.classList.add('none');
    SlideChildren.classList.add('none');
})
itemFemale.addEventListener('click', () => {
    itemFemale.classList.add('cate-active');
    itemMale.classList.remove('cate-active');
    itemChildren.classList.remove('cate-active');

    SlideFemale.classList.remove('none');
    SlideMale.classList.add('none');
    SlideChildren.classList.add('none');
})
itemChildren.addEventListener('click', () => {
    itemChildren.classList.add('cate-active');
    itemMale.classList.remove('cate-active');
    itemFemale.classList.remove('cate-active');

    SlideChildren.classList.remove('none');
    SlideMale.classList.add('none');
    SlideFemale.classList.add('none');
})


// Slide category
// male
let imageList = document.querySelector('.slide-content-male .list-cate');
let prevCate = document.querySelector('.slide-content-male .cate-prev');
let nextCate = document.querySelector('.slide-content-male .cate-next');
nextCate.addEventListener('click', () => {
    imageList.style.scrollbehavior = "smooth";
    imageList.style.transform = 'translateX(-650px)';
    nextCate.classList.add('disable');
    prevCate.classList.remove('disable');
})
prevCate.addEventListener('click', () => {
    imageList.style.scrollbehavior = "smooth";
    imageList.style.transform = 'translateX(0)';
    prevCate.classList.add('disable');
    nextCate.classList.remove('disable');
})
// children
let imageListChildren = document.querySelector('.slide-content-children .list-cate');
let prevCateChildren = document.querySelector('.slide-content-children .cate-prev');
let nextCateChildren = document.querySelector('.slide-content-children .cate-next');
nextCateChildren.addEventListener('click', () => {
    imageListChildren.style.scrollbehavior = "smooth";
    imageListChildren.style.transform = 'translateX(-112px)';
    nextCateChildren.classList.add('disable');
    prevCateChildren.classList.remove('disable');
})
prevCateChildren.addEventListener('click', () => {
    imageListChildren.style.scrollbehavior = "smooth";
    imageListChildren.style.transform = 'translateX(0)';
    prevCateChildren.classList.add('disable');
    nextCateChildren.classList.remove('disable');
})
// female
let imageListFemale = document.querySelector('.slide-content-female .list-cate');
let prevCateFemale = document.querySelector('.slide-content-female .cate-prev');
let nextCateFemale = document.querySelector('.slide-content-female .cate-next');
nextCateFemale.addEventListener('click', () => {
    imageListFemale.style.scrollbehavior = "smooth";
    imageListFemale.style.transform = 'translateX(-500px)';
    nextCateFemale.classList.add('disable');
    prevCateFemale.classList.remove('disable');
})
prevCateFemale.addEventListener('click', () => {
    imageListFemale.style.scrollbehavior = "smooth";
    imageListFemale.style.transform = 'translateX(0)';
    prevCateFemale.classList.add('disable');
    nextCateFemale.classList.remove('disable');
})

// slide product
// new product
let listNewProduct = document.querySelector('.list-product .row-newproduct');
let prevNewProduct = document.getElementById('prev-product');
let nextNewProduct = document.getElementById('next-product');
let currentPosition = 0;
const moveDistance = -1016; //khoảng cách dịch chuyển
const totalItems = listNewProduct.children.length;
const maxPosition = Math.ceil((totalItems / 4)-1) * moveDistance;
prevNewProduct.classList.add('disable');
nextNewProduct.addEventListener('click', () => {
    prevNewProduct.classList.remove('disable');
    if (currentPosition <= maxPosition-moveDistance) {
        nextNewProduct.classList.add('disable');
    }
    if (currentPosition <= maxPosition) {
        return; 
    }
    currentPosition += moveDistance;
    listNewProduct.style.scrollbehavior = "smooth";
    listNewProduct.style.transform = `translateX(${currentPosition}px)`;
});
prevNewProduct.addEventListener('click', () => {
    nextNewProduct.classList.remove('disable');
    if (currentPosition >= moveDistance) {
        prevNewProduct.classList.add('disable');
    }
    if (currentPosition >= 0) {
        return;
    }
    currentPosition -= moveDistance;
    listNewProduct.style.scrollbehavior = "smooth";
    listNewProduct.style.transform = `translateX(${currentPosition}px)`;
})

// flashsale
let listFlashSale = document.querySelector('.row-flashsale');
let prevFlashSale = document.getElementById('prev-flashsale');
let nextFlashSale = document.getElementById('next-flashsale');
let curPosFlashSale = 0;
const totalItemsFlashSale = listFlashSale.children.length;
const maxPosFlashSale = Math.ceil((totalItemsFlashSale / 4)-1) * moveDistance;
prevFlashSale.classList.add('disable');
nextFlashSale.addEventListener('click', () => {
    prevFlashSale.classList.remove('disable');
    if (curPosFlashSale <= maxPosFlashSale-moveDistance) {
        nextFlashSale.classList.add('disable');
    }
    if (curPosFlashSale <= maxPosFlashSale) {
        return; 
    }
    curPosFlashSale += moveDistance;
    listFlashSale.style.scrollbehavior = "smooth";
    listFlashSale.style.transform = `translateX(${curPosFlashSale}px)`;
});
prevFlashSale.addEventListener('click', () => {
    nextFlashSale.classList.remove('disable');
    if (curPosFlashSale >= moveDistance) {
        prevFlashSale.classList.add('disable');
    }
    if (curPosFlashSale >= 0) {
        return;
    }
    curPosFlashSale -= moveDistance;
    listFlashSale.style.scrollbehavior = "smooth";
    listFlashSale.style.transform = `translateX(${curPosFlashSale}px)`;
})

// bestseller
let listBestSeller = document.querySelector('.row-bestseller');
let prevBestSeler = document.querySelector('.bestseller-prev');
let nextBestSeller = document.querySelector('.bestseller-next');
let curPosBestSeller = 0;
const totalItemsBestSeller = listBestSeller.children.length;
const maxPosBestSeller = Math.ceil((totalItemsBestSeller / 4)-1) * moveDistance;
prevBestSeler.classList.add('disable');
nextBestSeller.addEventListener('click', () => {
    prevBestSeler.classList.remove('disable');
    if (curPosBestSeller <= maxPosBestSeller-moveDistance) {
        nextBestSeller.classList.add('disable');
    }
    if (curPosBestSeller <= maxPosBestSeller) {
        return; 
    }
    curPosBestSeller += moveDistance;
    listBestSeller.style.scrollbehavior = "smooth";
    listBestSeller.style.transform = `translateX(${curPosBestSeller}px)`;
});
prevBestSeler.addEventListener('click', () => {
    nextBestSeller.classList.remove('disable');
    if (curPosBestSeller >= moveDistance) {
        prevBestSeler.classList.add('disable');
    }
    if (curPosBestSeller >= 0) {
        return;
    }
    curPosBestSeller -= moveDistance;
    listBestSeller.style.scrollbehavior = "smooth";
    listBestSeller.style.transform = `translateX(${curPosBestSeller}px)`;
})

// polo
let listPolo = document.querySelector('.row-polo');
let prevPolo = document.getElementById('prev-polo');
let nextPolo = document.getElementById('next-polo');
let curPosPolo = 0;
const totalItemsPolo = listPolo.children.length;
const maxPosPolo = Math.ceil((totalItemsPolo / 4)-1) * moveDistance;
prevPolo.classList.add('disable');
nextPolo.addEventListener('click', () => {
    prevPolo.classList.remove('disable');
    if (curPosPolo <= maxPosPolo-moveDistance) {
        nextPolo.classList.add('disable');
    }
    if (curPosPolo <= maxPosPolo) {
        return; 
    }
    curPosPolo += moveDistance;
    listPolo.style.scrollbehavior = "smooth";
    listPolo.style.transform = `translateX(${curPosPolo}px)`;
});
prevPolo.addEventListener('click', () => {
    nextPolo.classList.remove('disable');
    if (curPosPolo >= moveDistance) {
        prevPolo.classList.add('disable');
    }
    if (curPosPolo >= 0) {
        return;
    }
    curPosPolo -= moveDistance;
    listPolo.style.scrollbehavior = "smooth";
    listPolo.style.transform = `translateX(${curPosPolo}px)`;
})

// sport
let listSport = document.querySelector('.row-sport');
let prevSport = document.getElementById('prev-sport');
let nextSport = document.getElementById('next-sport');
let curPosSport = 0;
const totalItemsSport = listSport.children.length;
const maxPosSport = Math.ceil((totalItemsSport / 4)-1) * moveDistance;
prevSport.classList.add('disable');
nextSport.addEventListener('click', () => {
    prevSport.classList.remove('disable');
    if (curPosSport <= maxPosSport-moveDistance) {
        nextSport.classList.add('disable');
    }
    if (curPosSport <= maxPosSport) {
        return; 
    }
    curPosSport += moveDistance;
    listSport.style.scrollbehavior = "smooth";
    listSport.style.transform = `translateX(${curPosSport}px)`;
});
prevSport.addEventListener('click', () => {
    nextSport.classList.remove('disable');
    if (curPosSport >= moveDistance) {
        prevSport.classList.add('disable');
    }
    if (curPosSport >= 0) {
        return;
    }
    curPosSport -= moveDistance;
    listSport.style.scrollbehavior = "smooth";
    listSport.style.transform = `translateX(${curPosSport}px)`;
})

// T-shirt
let listTShirt = document.querySelector('.row-tshirt');
let prevTShirt = document.getElementById('prev-tshirt');
let nextTShirt = document.getElementById('next-tshirt');
let curPosTShirt = 0;
const totalItemsTShirt = listTShirt.children.length;
const maxPosTShirt = Math.ceil((totalItemsTShirt / 4) - 1) * moveDistance;
prevTShirt.classList.add('disable');
nextTShirt.addEventListener('click', () => {
    prevTShirt.classList.remove('disable');
    if (curPosTShirt <= maxPosTShirt-moveDistance) {
        nextTShirt.classList.add('disable');
    }
    if (curPosTShirt <= maxPosTShirt) {
        return;
    }
    curPosTShirt += moveDistance;
    listTShirt.style.scrollbehavior = "smooth";
    listTShirt.style.transform = `translateX(${curPosTShirt}px)`;
})
prevTShirt.addEventListener('click', () => {
    nextTShirt.classList.remove('disable');
    if (curPosTShirt >= moveDistance) {
        prevTShirt.classList.add('disable');
    }
    if (curPosTShirt >= 0) {
        return;
    }
    curPosTShirt -= moveDistance;
    listTShirt.style.scrollbehavior = "smooth";
    listTShirt.style.transform = `translateX(${curPosTShirt}px)`;
})

// jeans
let listJeans = document.querySelector('.row-jeans');
let nextJeans = document.getElementById('next-jeans');
let prevJeans = document.getElementById('prev-jeans');
let curPosJeans = 0;
const totalItemsJeans = listJeans.children.length;
const maxPosJeans = Math.ceil((totalItemsJeans / 4) - 1) * moveDistance;
prevJeans.classList.add('disable');
nextJeans.addEventListener('click', () => {
    prevJeans.classList.remove('disable');
    if (curPosJeans <= maxPosJeans-moveDistance) {
        nextJeans.classList.add('disable');
    }
    if (curPosJeans <= maxPosJeans) {
        return;
    }
    curPosJeans += moveDistance;
    listJeans.style.scrollbehavior = "smooth";
    listJeans.style.transform = `translateX(${curPosJeans}px)`;
})
prevJeans.addEventListener('click', () => {
    nextJeans.classList.remove('disable');
    if (curPosJeans >= moveDistance) {
        prevJeans.classList.add('disable');
    }
    if (curPosJeans >= 0) {
        return;
    }
    curPosJeans -= moveDistance;
    listJeans.style.scrollbehavior = "smooth";
    listJeans.style.transform = `translateX(${curPosJeans}px)`;
})

// office
let listOffice = document.querySelector('.row-office');
let nextOffice = document.getElementById('next-office');
let prevOffice = document.getElementById('prev-office');
let curPosOffice = 0;
const totalItemsOffice = listOffice.children.length;
const maxPosOffice = Math.ceil((totalItemsOffice / 4) - 1) * moveDistance;
prevOffice.classList.add('disable');
nextOffice.addEventListener('click', () => {
    prevOffice.classList.remove('disable');
    if (curPosOffice <= maxPosOffice-moveDistance) {
        nextOffice.classList.add('disable');
    }
    if (curPosOffice <= maxPosOffice) {
        return;
    }
    curPosOffice += moveDistance;
    listOffice.style.scrollbehavior = "smooth";
    listOffice.style.transform = `translateX(${curPosOffice}px)`;
})
prevOffice.addEventListener('click', () => {
    nextOffice.classList.remove('disable');
    if (curPosOffice >= moveDistance) {
        prevOffice.classList.add('disable');
    }
    if (curPosOffice >= 0) {
        return;
    }
    curPosOffice -= moveDistance;
    listOffice.style.scrollbehavior = "smooth";
    listOffice.style.transform = `translateX(${curPosOffice}px)`;
})

// accessory
let listAccessory = document.querySelector('.row-accessory');
let nextAccessory = document.getElementById('next-accessory');
let prevAccessory = document.getElementById('prev-accessory');
let curPosAccessory = 0;
const totalItemsAccessory = listAccessory.children.length;
const maxPosAccessory = Math.ceil((totalItemsAccessory / 4) - 1) * moveDistance;
prevAccessory.classList.add('disable');
nextAccessory.addEventListener('click', () => {
    prevAccessory.classList.remove('disable');
    if (curPosAccessory <= maxPosAccessory-moveDistance) {
        nextAccessory.classList.add('disable');
    }
    if (curPosAccessory <= maxPosAccessory) {
        return;
    }
    curPosAccessory += moveDistance;
    listAccessory.style.scrollbehavior = "smooth";
    listAccessory.style.transform = `translateX(${curPosAccessory}px)`;
})
prevAccessory.addEventListener('click', () => {
    nextAccessory.classList.remove('disable');
    if (curPosAccessory >= moveDistance) {
        prevAccessory.classList.add('disable');
    }
    if (curPosAccessory >= 0) {
        return;
    }
    curPosAccessory -= moveDistance;
    listAccessory.style.scrollbehavior = "smooth";
    listAccessory.style.transform = `translateX(${curPosAccessory}px)`;
})

// count-down flashsale
let hours = document.querySelector('.hours span');
let minutes = document.querySelector('.minutes span');
let seconds = document.querySelector('.seconds span');

let countDown = new Date('Apr 7 2024 00:00:00');
console.log(countDown);
setInterval(() => {
    let currentTime = new Date();
    let timeDifference = countDown - currentTime;
    let timeHours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let timeMinutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let timeSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    hours.innerText = timeHours;
    minutes.innerText = timeMinutes;
    seconds.innerText = timeSeconds;
}, 1000)