//TypeWrite Effect
let myText = document.querySelector('#subtitle');
let words = ['web designer', 'developer', 'freelancer', 'Computer Science Student'];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function () {
        if (word.length > 0) {
            myText.innerHTML += word.shift();
        } else {
            deletingEffect();
            return false;
        }
        timer = setTimeout(loopTyping, 100);
    }
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function () {
        if (word.length > 0) {
            word.pop();
            myText.innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            }
            typingEffect();
            return false;
        }
        timer = setTimeout(loopDeleting, 200);
    }
    loopDeleting();
}

typingEffect();

//Progress Bar
const spans = document.querySelectorAll('.skill-box .progress span');
spans.forEach((span) => {
    span.style.width = span.dataset.progress;
});

//Circular Progress Bar
let numbers = document.querySelectorAll('.progress .num'),
    progressBar = document.querySelectorAll('.progress .progress-bar'),
    startValue = Array(numbers.length),
    intervals = Array(numbers.length),
    speed = 75;
startValue.fill(0);

numbers.forEach((num, i) => {
    intervals[i] = setInterval(() => {
        if (startValue[i] === parseInt(num.dataset.num)) {
            clearInterval(intervals[i]);
        } else {
            startValue[i] += 1;
            num.innerHTML = `${startValue[i]}%`;
            progressBar[i].style.background = `conic-gradient(
                #952121 ${startValue[i] * 3.6}deg,
                #eeeeee ${startValue[i] * 3.6}deg
            )`;
        }
    }, speed);
});

//Put active class for the li and the target section
let btns = document.querySelectorAll('.top-menu ul li');
sections = document.querySelectorAll('section');

btns.forEach((btn) => {
    let current = '';
    btn.addEventListener('click', () => {
        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');
        current = btn.dataset.menu;
        sections.forEach((sec) => {
            sec.classList.remove('active');
        });
        document.querySelector('#' + current).classList.add('active');
    });
});

// //contact btn put active class for the contact li and the contact section
// let contactMe = document.querySelector('#contact-me');

// contactMe.addEventListener('click', () => {
//     sections.forEach((section) => {
//         section.classList.remove('active');
//     });
//     btns.forEach((btn) => {
//         btn.classList.remove('active');
//         document.querySelector('[data-menu~="contact"]').classList.add('active');
//     });
//     document.querySelector('#contact').classList.add('active');
// });

//ScrollSpy
window.addEventListener('scroll', ScrollSpy);

function ScrollSpy() {
    let currentSection = '';
    sections.forEach((section) => {
        let sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 65) {
            currentSection = section.getAttribute('id');
        }
    });
    if (currentSection != "") {
        btns.forEach(li => {
            li.classList.remove('active');
            document.querySelector(`[data-menu~="${currentSection}"]`).classList.add('active');
        });
    }
}

// window.addEventListener('load', function() {
//     document.querySelector('.loader-wrapper').style.display = 'none';
//     document.querySelector('.contact-me').style.display = 'block';
//   });

//   // Show submit loader on form submit
//   document.getElementById('contact-form').addEventListener('submit', function(event) {
//     var button = event.target.querySelector('button');
//     var loader = event.target.querySelector('#submit-loader');
    
//     // Show loader and hide button
//     loader.style.display = 'inline-block';
//     button.style.display = 'none';
//   });