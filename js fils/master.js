// check If Thre`s local Storage Color Option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
    document.documentElement.style.setProperty("--main-color", localStorage.getItem("color_option"))

    document.querySelectorAll(".colors-list li").forEach(el => {
        el.classList.remove("active");

        if (el.dataset.color === mainColors) {
            el.classList.add("active");
        }
    })


}

//Check If There`s Local Storage Random Background

document.querySelector(".toggle-setting .icon").onclick = function () {
    //Toggle Class Fa-spin For Rotaion On Self
    this.classList.toggle("fa-spin");

    //Toggle Class Open On Main Setting Box
    document.querySelector(".settings-box").classList.toggle("open");
};

//Random Background Option
let backgroundOption = true;

//Varible To Control Local Storage Random Background'
let backgroundInterval;

let backgroundLocalItem = localStorage.getItem("background-option")

if (backgroundLocalItem !== null) {

    if (backgroundLocalItem === 'true') {
        backgroundOption = true;
    } else {
        backgroundOption = false;
    }

    // Remove Active Class
    document.querySelectorAll(".random-background button").forEach(e => {
        e.classList.remove("active");
    })

    if (backgroundLocalItem === 'true') {
        document.querySelector(".random-background .yes").classList.add("active")
    } else {
        document.querySelector(".random-background .no").classList.add("active")
    }
};

//Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

colorsLi.forEach(li => {
    li.addEventListener("click", (e) => {
        //Set Color On Root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        //Set Color On Local Storage
        localStorage.setItem("color_option", e.target.dataset.color);

        handleActive(e);
    });
});

//Switch Random Background Option
const randomBkEl = document.querySelectorAll(".random-background button ");

randomBkEl.forEach(function (button) {
    button.addEventListener("click", (e) => {

        handleActive(e)

        if (e.target.dataset.background === "yes") {
            backgroundOption = true;

            localStorage.setItem("background-option", true)
        } else {
            backgroundOption = false;

            clearInterval(backgroundInterval);

            localStorage.setItem("background-option", false)

        }
    });

});

// Select Langind Page Element
let langindPage = document.querySelector(".landing");

// Get Array Of Imgs 
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];



if (backgroundOption === true) {

    backgroundInterval = setInterval(() => {
        // Get Random Number
        let randomNumber = Math.floor(Math.random() * imgsArray.length);

        //Change Background Image Url
        langindPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")'
    }, 8000);
}

let ourSkills = document.querySelector(".our-skills");

window.onscroll = function () {

    let skillsOffsetTop = ourSkills.offsetTop;


    let skillsOuterHeight = ourSkills.offsetHeight;


    let windowHeight = this.innerHeight;


    let windowScrollTop = this.pageYOffset;


    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {


        let allSkills = document.querySelectorAll(".skills-box .skill-progress span");

        allSkills.forEach(e => {
            e.style.width = e.dataset.progress;
        })
    };

};


let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {
    img.addEventListener('click', (e) => {
        let overlay = document.createElement('div');

        overlay.className = 'popup-overlay';

        document.body.appendChild(overlay);

        let popupBox = document.createElement("div");

        popupBox.className = 'popup-box';

        let imgeHeading = document.createElement("h3");

        let imgText = document.createTextNode(img.alt);

        imgeHeading.appendChild(imgText);

        popupBox.appendChild(imgeHeading);

        let popupImge = document.createElement("img");

        popupImge.src = img.src;

        popupBox.appendChild(popupImge);

        document.body.appendChild(popupBox);

        let closeButton = document.createElement("span");

        let closeButtonText = document.createTextNode("X");

        closeButton.appendChild(closeButtonText);

        popupBox.appendChild(closeButton);

        closeButton.className = 'close-botton';
    })
})

document.addEventListener('click', function (e) {
    if (e.target.className == 'close-botton') {

        e.target.parentNode.remove();

        document.querySelector(".popup-overlay").remove();
    }
})

const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// allBullets.forEach(bullet => {

//     bullet.addEventListener("click", (e) => {

//         document.querySelector(e.target.dataset.section).scrollIntoView({

//             behavior: 'smooth'
//         })

//     })
// })

const allLinks = document.querySelectorAll(".links a");

// allLinks.forEach(link => {

//     link.addEventListener("click", (e) => {

//         e.preventDefault();

//         document.querySelector(e.target.dataset.section).scrollIntoView({

//             behavior: 'smooth'
//         })

//     })
// })

function scrollToSomewhere(elements) {
    elements.forEach(ele => {

        ele.addEventListener("click", (e) => {

            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({

                behavior: 'smooth'
            });

        });
    });
};

scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);

function handleActive(ev) {

    ev.target.parentElement.querySelectorAll(".active").forEach(element => {

        element.classList.remove("active");

    });

    ev.target.classList.add("active")
}

let bulletsBtn = document.querySelectorAll(".bullets-option button");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets-option");

if (bulletLocalItem !== null) {

    bulletsBtn.forEach(btn => {

        btn.classList.remove("active");

    })

    if (bulletLocalItem === 'block') {

        bulletsContainer.style.display = 'block'

        document.querySelector(".bullets-option .yes").classList.add("active");

    } else {

        bulletsContainer.style.display = 'none'

        document.querySelector(".bullets-option .no").classList.add("active");

    }
}

bulletsBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {

        if (btn.dataset.display === 'show') {

            bulletsContainer.style.display = 'block'

            localStorage.setItem("bullets-option", 'block')
        } else {

            bulletsContainer.style.display = 'none'

            localStorage.setItem("bullets-option", 'none')

        }

        handleActive(e);
    })
})

document.querySelector(".resset-options").onclick = function () {

    // localStorage.clear();
    localStorage.removeItem("bullets-option");
    localStorage.removeItem("background-option");
    localStorage.removeItem("color_option");

    window.location.reload();
}

let activeLinks = document.querySelectorAll(".links li a");

activeLinks.forEach(ele => {


    ele.addEventListener("click", (e) => {



        activeLinks.forEach(element => {

            element.classList.remove("active");

        });


        e.target.classList.add("active")
    })
})


let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

    e.stopPropagation();

    this.classList.toggle("menu-active");

    tLinks.classList.toggle("open")
}

document.addEventListener("click", (e) => {

    if (e.target !== toggleBtn && e.target !== tLinks) {


        if (tLinks.classList.contains("open")) {

            toggleBtn.classList.toggle("menu-active");

            tLinks.classList.toggle("open")
        }
    }
})

tLinks.onclick = function (e) {

    e.stopPropagation();

}

// var typed = new typed('.element', {
//     strings: ["First sentence.", "Second sentence."],
//     typeSpeed: 30
// });

// $("body").niceScroll({

//     cursorcolor: "#424242",
//     cursoropacitymin: "0.3",
//     cursorwidth: "10px",
//     scrollspeed: "60",
//     mousescrollstep: "40",
//     emulatetouch: false,
//     background: "transparent",
//     smoothscroll: false,
// }
// );