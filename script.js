const navUl = document.querySelector('.navbar-collapse')
let body = document.querySelector('body')

const toggleNavUl = () => {

    navUl.classList.toggle('toggle-ul')

    if (navUl.classList.contains('toggle-ul')) {
        body.classList.add('hide-content')
    }
    else {
        setTimeout(() => {
            body.classList.remove('hide-content')
        }, 500)
    }
}

const navLinks = document.querySelectorAll('.nav-item');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        setTimeout(() => {
            navUl.classList.remove('toggle-ul')
            setTimeout(() => {
                body.classList.remove('hide-content')
            }, 500);
        }, 500)
    })
})


const navItems = document.querySelectorAll('.nav-link');
const containerDivs = document.querySelectorAll('.container-div')

let totalHeight = []
let currentHeight = 0

containerDivs.forEach(containerDiv => {
    let containerHeight = containerDiv.getBoundingClientRect().height
    currentHeight += containerHeight
    totalHeight = [...totalHeight, currentHeight]
})

const scroll = window.onscroll = (e) => {
    const nav = document.querySelector('.navbar')
    const navHeight = nav.getBoundingClientRect().height;
    const scrollheight = window.scrollY;

    if (scrollheight > 10) {
        nav.style.background = 'white'
        nav.style.boxShadow = '0 0 5px 0 rgba(0,0,0,0.5)'
    }
    else {
        nav.style.background = 'none'
        nav.style.boxShadow = ''
    }

    let screenHeight = window.scrollY
    totalHeight.forEach((height, index) => {
        if ((screenHeight+85) >= (totalHeight[index - 1] || 0) && (screenHeight+85) < totalHeight[index]) {
            navItems[index].classList.add('active')
        }
        else {
            navItems[index].classList.remove('active')
        }
    })
}

navItems.forEach((item) => {

    item.addEventListener('click', (e) => {
        setTimeout(() => {
            e.target.classList.add('active')
        })
        navItems.forEach((anchor) => {
            anchor.classList.remove('active')
        })
    })

})
