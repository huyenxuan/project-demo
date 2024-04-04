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
nextNewProduct.addEventListener('click', () => {
    if (currentPosition <= maxPosition) {
        return; 
    }
    currentPosition += moveDistance;
    listNewProduct.style.scrollbehavior = "smooth";
    listNewProduct.style.transform = `translateX(${currentPosition}px)`;
});
prevNewProduct.addEventListener('click', () => {
    if (currentPosition >= 0) {
        return;
    }
    currentPosition -= moveDistance;
    listNewProduct.style.scrollbehavior = "smooth";
    listNewProduct.style.transform = `translateX(${currentPosition}px)`;
})

// bestseller
let listBestSeller = document.querySelector('.row-bestseller');
let prevBestSeler = document.querySelector('.bestseller-prev');
let nextBestSeller = document.querySelector('.bestseller-next');

let curPosBestSeller = 0;
const totalItemsBestSeller = listBestSeller.children.length;
console.log(totalItemsBestSeller);
const maxPosBestSeller = Math.ceil((totalItemsBestSeller / 4)-1) * moveDistance;
nextBestSeller.addEventListener('click', () => {
    if (curPosBestSeller <= maxPosBestSeller) {
        return; 
    }
    curPosBestSeller += moveDistance;
    listBestSeller.style.scrollbehavior = "smooth";
    listBestSeller.style.transform = `translateX(${curPosBestSeller}px)`;
});
prevBestSeler.addEventListener('click', () => {
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

nextPolo.addEventListener('click', () => {
    if (curPosPolo <= maxPosPolo) {
        return; 
    }
    curPosPolo += moveDistance;
    listPolo.style.scrollbehavior = "smooth";
    listPolo.style.transform = `translateX(${curPosPolo}px)`;
});
prevPolo.addEventListener('click', () => {
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

nextSport.addEventListener('click', () => {
    if (curPosSport <= maxPosSport) {
        return; 
    }
    curPosSport += moveDistance;
    listSport.style.scrollbehavior = "smooth";
    listSport.style.transform = `translateX(${curPosSport}px)`;
});
prevSport.addEventListener('click', () => {
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

nextTShirt.addEventListener('click', () => {
    if (curPosTShirt <= maxPosTShirt) {
        return;
    }
    curPosTShirt += moveDistance;
    listTShirt.style.scrollbehavior = "smooth";
    listTShirt.style.transform = `translateX(${curPosTShirt}px)`;
})
prevTShirt.addEventListener('click', () => {
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

nextJeans.addEventListener('click', () => {
    if (curPosJeans <= maxPosJeans) {
        return;
    }
    curPosJeans += moveDistance;
    listJeans.style.scrollbehavior = "smooth";
    listJeans.style.transform = `translateX(${curPosJeans}px)`;
})
prevJeans.addEventListener('click', () => {
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

nextOffice.addEventListener('click', () => {
    if (curPosOffice <= maxPosOffice) {
        return;
    }
    curPosOffice += moveDistance;
    listOffice.style.scrollbehavior = "smooth";
    listOffice.style.transform = `translateX(${curPosOffice}px)`;
})
prevOffice.addEventListener('click', () => {
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

nextAccessory.addEventListener('click', () => {
    if (curPosAccessory <= maxPosAccessory) {
        return;
    }
    curPosAccessory += moveDistance;
    listAccessory.style.scrollbehavior = "smooth";
    listAccessory.style.transform = `translateX(${curPosAccessory}px)`;
})
prevAccessory.addEventListener('click', () => {
    if (curPosAccessory >= 0) {
        return;
    }
    curPosAccessory -= moveDistance;
    listAccessory.style.scrollbehavior = "smooth";
    listAccessory.style.transform = `translateX(${curPosAccessory}px)`;
})