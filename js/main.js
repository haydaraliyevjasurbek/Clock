let s = document.querySelector('.s')
let m = document.querySelector('.m')
let h = document.querySelector('.h')

let downH = document.querySelector('.hours')
let downM = document.querySelector('.minutes')

let tabs = document.querySelectorAll('.tabsItem')
let tabsContent = document.querySelectorAll('.tabsContentItem')

let btn = document.querySelector('.stopwatch__btn')

let sekund = document.querySelector('.stopwatch__seconds')
let minut = document.querySelector('.stopwatch__minutes')
let soat = document.querySelector('.stopwatch__hours')

let tochka = document.querySelector('.tabsLink__span')


for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function () {
        for (let j = 0; j < tabs.length; j++) {
            const el = tabs[j];
            el.classList.remove('active')
            tabsContent[j].classList.remove('active')
        }

        this.classList.add("active");
        tabsContent[i].classList.add('active')
    })
}


let timer

btn.addEventListener('click', function () {

    if (btn.innerHTML === 'start') {
        btn.innerHTML = 'stop'
        tochka.classList.add('active')
        time()
    }
    else if (btn.innerHTML === 'stop') {
        btn.innerHTML = 'reset'
        tochka.classList.remove('active')
        tochka.classList.add('active_clear')
        clearTimeout(timer)

    }
    else if (btn.innerHTML === 'reset') {
        btn.innerHTML = 'start'
        sekund.innerHTML = '0'
        minut.innerHTML = '0'
        soat.innerHTML = '0'
        tochka.classList.remove('active_clear')
        clearTimeout(timer)
    }
})

function time() {
    sekund.innerHTML++

    timer = setTimeout(() => {
        time()
        if (sekund.innerHTML === '60') {
            sekund.innerHTML = 0
            minut.innerHTML++
            if (minut.innerHTML === '60') {
                minut.innerHTML = 0
                soat.innerHTML++
            }
        }
    }, 1000)
}





// console.log(s,  m, h)
function clock() {
    let seconds = new Date().getSeconds()
    let minutes = new Date().getMinutes()
    let hour = new Date().getHours()
    s.style.transform = `rotate(${seconds * 6}deg)`
    m.style.transform = `rotate(${minutes * 6}deg)`
    h.style.transform = `rotate(${hour * 30}deg)`
    downH.innerHTML = hour > 10 ? hour : '0' + hour
    downM.innerHTML = minutes > 10 ? minutes : '0' + minutes

    setTimeout(() => {
        clock()
    })
}

clock()

