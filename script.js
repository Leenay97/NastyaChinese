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

    //slider

    let slider = document.querySelector('.main__slider');
    let width = 420;
    let offset = 0;
    let currSlide = 1;

    const slidesInfo = [
        {
            id: 1,
            img: 'sad',
            name: 'Кристина',
            text: 'Очень понравилось, что было много интерактива, все объяснялось в форме игры, ассоциаций. Классно, что в процессе урока всплывали какие-то повседневные прикольные слова и сразу шел их перевод и объяснилось как их применять. Сяочхао - отдельная любовь, все самые распространённые фразы, очень пригодились, диалоги самой собой тоже офигенная тема, теперь можно спокойно пообщаться с китайцами возле их кафешек😁😁'
        },
        {
            id: 2,
            img: 'sad',
            name: 'моля',
            text: 'Привет! Пишу по поводу отзыва о занятиях! Самым важным для меня всегда являлась атмосфера обучения, я бы не смогла научится хоть чем-то, если бы мне было некомфортно в коллективе. Я переживала по поводу того, какой будет учитель или одногруппники, но это было зря, потому что мне было супер комфортно весь год. Мне особенно понравилось то, что наши занятия не были похожи на мою школу, где учителя не были заинтересованны в том, чтобы интересно преподавать ученикам. Здесь я получала различный опыт, когда мы смотрели видео, проводили встречи или просто изучали новый материал. На занятиях мне казалось, что тебе (учителю) был важен мой результат, что ты правда переживала по поводу того, как я и другие ученики усваивают материал. Для меня очень важна поддержка, а на занятиях мне давали ее сполна. В целом, мне все понравилось!'
        },
        {
            id: 3,
            img: 'sad',
            name: 'Леся',
            text: 'Уроки Лилу - это что-то невероятное! Каждый раз приходя на урок, успытываешь уют и дружескую атмосферу🎎У Лилу всегда подготовленно что-то новенькое, что-то эдакое, чтобы урок прошёл быстро, легко, весело, а главное понятно! Лилу всегда готова ответить на любой вопрос, даже самый глупый, если что-то непонятно - всегда вернётся к этой теме снова и разложет всё по полочкам🧧В общем, я очень рада, что учусь именно у Лилу и намерена и дальше посещать уроки китайского 🇨🇳'
        },
        {
            id: 4,
            img: 'sad',
            name: 'Марина',
            text: 'Привет! Нравилась атмосфера на уроках, которая в первую очередь благодаря тебе создавалась) очень круто было всегда видеть тебя заряженной и готовой к любым вопросам, обсуждениям и идеям💘 я уже говорила, что ты еще в прошлом году покорила мое сердечко, и я готова вновь это повторить) Материал, его подача, обилие практики, разговорной речи и аудирования на отличном уровне, ценно понимать, что каждый урок действительно дает результат'
        },
        {
            id: 5,
            img: 'sad',
            name: 'Арина',
            text: 'Привет! Пишу отзыв о занятиях с тобой😁 За свое время (20 лет 😂) мне удалось познакомится и позаниматься с многими учителями и не со всеми я продолжала обучение, а с тобой мне нравится заниматься, слушать тебя, узнавать новое от тебя и отрекаться от тебя я не буду😂🤝🏻 Дойду до конца, обещаю😋 Спасибо за этот год, дальше больше и лучше😘'
        },
        {
            id: 6,
            img: 'sad',
            name: 'Ксения',
            text: '李璐，你好！对不起, я тут закрутилась и забыла про отзыв!(Мне очень понравились занятия с тобой! Ты очень открытый человек, но при этом требовательный. В этом году мы мноооогоооо разговаривали, поэтому мне намного легче сейчас дается беседа с носителями🙏❤️ У меня почти исчез барьер, я перестала бояться сделать ошибку. Сейчас смотрю сколько грамматики и слов мы выучили и не верю!!! И горжусь собой!!!'
        },
        {
            id: 7,
            img: 'sad',
            name: 'Арсений',
            text: 'Лилуу, я совсем забыл написать отзыв, надеюсь все еще актуально. если честно, мне очень понравился твой добрый и супер коммуникабельный вайб. мне с первых занятий стало комфортно, потому что ты выстраиваешь занятия так, словно это не душный школьный урок, а встреча друзей. думаю, мои многочисленные камбеки обусловлены не только интересом к языку, но и харизмой преподавателя, с которым реально клево! в общем, любимой Лилу респект, мне все безумно понравилось, с нетерпением жду следующего года!!'
        }
    ]

    class Slide {
        constructor(id, img, name, text) {
            this.id = id;
            this.img = img;
            this.name = name;
            this.text = text;
        }
        create() {
            let newSlide = document.createElement('div');
            newSlide.classList.add("main__slide");
            newSlide.innerHTML = `<div class="slide__header" id = "${this.id}">${this.name}
                </div>
                <div class="slide__text">${this.text}</div>`;
            slider.append(newSlide)
        }
    }

    // slider.

    const sliderNav = document.querySelector('.slider__nav');

    slidesInfo.forEach((slide) => {
        new Slide(slide.id, slide.img, slide.name, slide.text).create();
        sliderNav.innerHTML += `<div class="slider__dot" id="dot${slide.id}">`
    })

    let prevTouch = 0;
    let swipeOffset = 0

    slider.addEventListener('touchmove', (e) => {
        // nextSlide();
        const touch = e.touches[0]
        // console.log(touch.clientX)
        if (touch.clientX > prevTouch) {
            if (currSlide > 0 && currSlide > 1) {
                swipeOffset += 5;
            }
        } else {
            if (currSlide < slidesInfo.length - 1) {
                swipeOffset -= 5;
            }
        }
        slider.style.left = offset + swipeOffset + 'px'
        prevTouch = touch.clientX;
    })

    slider.addEventListener('touchend', (e) => {
        slider.style.left = offset + 'px';
        if ((swipeOffset) <= -50) {
            nextSlide();
            swipeOffset = 0;
        }
        if ((swipeOffset) >= 50) {
            prevSlide();
            swipeOffset = 0;
        }
        prevTouch = 0;
    })

    slider.addEventListener('touchcancel', (e) => {
        slider.style.left = offset + 'px';
        if ((swipeOffset) <= -100) {
            nextSlide();
            swipeOffset = 0;
        }
        if ((swipeOffset) >= 100) {
            prevSlide();
            swipeOffset = 0;
        }
    })


    function nextSlide() {

        if (currSlide == slidesInfo.length) return;
        currSlide++;
        console.log(currSlide, 'next')
        offset = -width * (currSlide - 1);
        slider.style.left = offset + 'px';
        document.querySelectorAll('.slider__dot').forEach(i => {
            i.classList.remove('active-dot');
        })


    }

    function prevSlide() {

        if (currSlide == 1) return;
        currSlide--;
        console.log(currSlide, 'prev')
        offset = -width * (currSlide - 1);
        slider.style.left = offset + 'px';
    }

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