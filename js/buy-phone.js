let choice = document.querySelector('#choice');
let price = document.querySelector('#price-choice');
let color = document.querySelector('#color-choice');
let capacity = document.querySelector('#capacity-choice');
let picture = document.querySelector('#choice-image');


choice.addEventListener('click', (e) => {
    let target = e.target;
    // let img = [
    //     { '1': 'images/iphone-12-mini-select-2020.png' },
    //     { '2': 'images/iphone-12-select-2020.png' },

    //     { '3': 'images/iphone-12-mini-white-select-2020.png' },
    //     { '4': 'images/iphone-12-mini-black-select-2020.png' },
    //     { '5': 'images/iphone-12-mini-blue-select-2020.png' },
    //     { '6': 'images/iphone-12-mini-green-select-2020.png' },
    //     { '7': 'images/iphone-12-mini-red-select-2020.png' },

    //     { '8': 'images/iphone-12-white-select-2020.png' },
    //     { '9': 'images/iphone-12-black-select-2020.png' },
    //     { '10': 'images/iphone-12-blue-select-2020.png' },
    //     { '11': 'images/iphone-12-green-select-2020.png' },
    //     { '12': 'images/iphone-12-red-select-2020.png' },

    //     { '13': 'images/iphone-12-white-witb-2020.png' },
    //     { '14': 'images/iphone-12-black-witb-2020.png' },
    //     { '15': 'images/iphone-12-blue-witb-2020.png' },
    //     { '16': 'images/iphone-12-green-witb-2020.png' },
    //     { '17': 'images/iphone-12-red-witb-2020.png' },
    // ]
    if (isPriceItem(target)) {
        clearPriceItemActice();
        target.classList.add('active');
        color.classList.remove('color-choice');
        // img.forEach(e => {
        //     console.log(e);
        // })
        picture.src = target.dataset.img;

    }

    if (isColorItem(target)) {
        clearColorItemActice();
        target.classList.add('active');
        capacity.classList.remove('capacity-choice');
        picture.src = target.dataset.img;


    }

    if (isCapacityItem(target)) {
        clearCapacityItemActice();
        target.classList.add('active');
        document.querySelectorAll('.more-content').forEach((e) => {
            e.classList.remove('more-content')
        })
        document.querySelectorAll('.add-item').forEach((e) => {
            e.classList.remove('add-item')
        })
    }

})

//---------------------------------------------------------------------

function isPriceItem(dom) {
    if (dom && dom.classList) {
        let len = dom.classList.length;
        for (let i = 0; i < len; i++) {
            if (dom.classList[i] == 'price-item') {
                color.disable = true;
                return true;
            }
        }
    }
    return false;
}

function clearPriceItemActice() {
    document.querySelectorAll('.price-item').forEach((item) => {
        item.classList.remove('active');
    })
}

//---------------------------------------------------------------------


function isColorItem(dom) {
    if (dom && dom.classList) {
        let len = dom.classList.length;
        for (let i = 0; i < len; i++) {
            if (dom.classList[i] == 'color-item') {
                return true;
            }
        }
    }
    return false;
}

function clearColorItemActice() {
    document.querySelectorAll('.color-item').forEach((item) => {
        item.classList.remove('active');
    })
}

//------------------------------------------------------------------------



function isCapacityItem(dom) {
    if (dom && dom.classList) {
        let len = dom.classList.length;
        for (let i = 0; i < len; i++) {
            if (dom.classList[i] == 'capacity-item') {
                return true;
            }
        }
    }
    return false;
}

function clearCapacityItemActice() {
    document.querySelectorAll('.capacity-item').forEach((item) => {
        item.classList.remove('active');
    })
}
