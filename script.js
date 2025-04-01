document.addEventListener('DOMContentLoaded', () => {
    const messages = document.querySelectorAll('.header__message');

    const header = document.querySelector('.header')

    const headerBottom = document.querySelector('.header__bottom')

    const messageList = ['来我们公司工作吧 你将赚得盆满钵满，一个月就能买一架飞机。', 'Каво? Пиши по-русски)))', '你还是不懂中文？😔', 'Хочу знать китайский!']

    const messageListRu = ['Приходите работать в нашу компанию. Вы заработаете столько денег, что сможете купить самолет за месяц.', 'Каво? Пиши по-русски)))', 'Все еще не знаешь китайский?😔', 'Хочу знать китайский!']

    const input = document.querySelector('.header__input');

    const headerBtn = document.querySelector('.header__button')
    let btnActive = false


    // // on load

    setTimeout(() => {
        messages[0].classList.remove('hide');
        messages[0].classList.add('big__message');
        setTimeout(() => {
            messages[0].classList.remove('big__message');
        }, 100)
    }, 300)

    setTimeout(() => {
        messages[1].classList.remove('hide');
        messages[1].classList.add('big__message');
        setTimeout(() => {
            messages[1].classList.remove('big__message');
        }, 100)
    }, 800)
    setTimeout(() => {
        messages[2].classList.remove('hide');
        messages[2].classList.add('big__message');
        setTimeout(() => {
            messages[2].classList.remove('big__message');
        }, 100)
    }, 1300)

    setTimeout(() => {
        messages[3].classList.remove('hide');
        messages[3].classList.add('big__message');
        setTimeout(() => {
            messages[3].classList.remove('big__message');
            input.innerHTML = '';
            input.classList.add('display-none')
            headerBtn.classList.add('header__button-fullscreen')
        }, 100)

    }, 1800)

    setTimeout(() => {
        headerBtnActive = setInterval(() => {
            headerBtn.classList.toggle('big');
        }, 500)
        headerBottom.classList.add('header__bottom-open')

    }, 2100)

    headerBtn.addEventListener('click', () => {
        header.classList.add('hide-header')
        document.querySelector('body').classList.remove('noscroll');


    })


    messages.forEach((item, index) => {
        if (index !== 1 && index !== 3) {
            item.addEventListener('mouseover', () => {
                item.innerHTML = messageListRu[index] + `<div class="message-from-corner"></div>`;
            })
            item.addEventListener('mouseout', () => {
                item.innerHTML = messageList[index] + `<div class="message-from-corner"></div>`;
            })
        }

    })


    // let k = 0;

    // messages[0].classList.remove('hide');
    // let interval = setInterval(() => {
    //     messages[0].innerHTML += '.'
    //     k++;
    //     if (k == 4) {
    //         messages[0].innerHTML = messageList[0] + `<div class="message-from-corner"></div>`
    //         clearInterval(interval);
    //     }
    // }, 300)

    // setTimeout(() => {

    //     messages[1].classList.remove('hide');
    //     let strArr = messageList[1].split('');
    //     interval = setInterval(() => {
    //         if (strArr[0]) {
    //             input.textContent += strArr[0]
    //             messages[1].innerHTML += strArr[0]
    //             strArr.shift()
    //         } else {
    //             input.textContent = '';
    //             clearInterval(interval)
    //             k = 0;
    //         }
    //     }, 70)

    // }, 1500)

    // setTimeout(() => {

    //     k = 0;
    //     messages[2].classList.remove('hide');
    //     let interval = setInterval(() => {
    //         messages[2].innerHTML += '.'
    //         k++;
    //         if (k == 4) {
    //             messages[2].innerHTML = messageList[2] + `<div class="message-from-corner"></div>`
    //             clearInterval(interval);
    //         }
    //     }, 300)

    // }, 3000)

    // setTimeout(() => {
    //     let strArr = messageList[3].split('');
    //     interval = setInterval(() => {
    //         if (strArr[0]) {
    //             input.textContent += strArr[0]
    //             strArr.shift()
    //         } else {
    //             clearInterval(interval)
    //         }
    //     }, 40)
    // }, 4500)

    // const headerBtn = document.querySelector('.header__button')

    // let headerBtnActive;

    // setTimeout(() => {

    //     headerBtn.innerHTML = 'Учить!'
    //     headerBtnActive = setInterval(() => {
    //         headerBtn.classList.toggle('big');
    //     }, 500)

    // }, 5500)

    // //Translation

    // messages.forEach((item, index) => {
    //     if (index !== 1) {
    //         item.addEventListener('mouseover', () => {
    //             item.innerHTML = messageListRu[index] + `<div class="message-from-corner"></div>`;
    //         })
    //         item.addEventListener('mouseout', () => {
    //             item.innerHTML = messageList[index] + `<div class="message-from-corner"></div>`;
    //         })
    //     }

    // })



})