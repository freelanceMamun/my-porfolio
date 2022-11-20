let Loadtime = 3000;
window.onload = () => {
  setTimeout(preLoader, Loadtime);
};
window.onscroll = () => {
  navScroling();
};

function preLoader() {
  const loader = document.querySelector('#preloader');
  loader.style.display = 'none';
}

//  Dark Function

// navbar  Toggle function
const myFunction = (change) => {
  change.classList.toggle('change');
};

//  navbar _ Scrolling

let navScroling = () => {
  const nav = document.querySelector('.menu-headerMain');
  if (this.scrollY >= 120) nav.classList.add('scrolling-navbar');
  else nav.classList.remove('scrolling-navbar');
};

///   Claint  Swiper
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/// Contact From Validtion

let timeing = 5000;

const from = document.querySelector('.From form'),
  userName = document.querySelector('.userName'),
  userEmail = document.querySelector('.userEmail'),
  UserTextArea = document.querySelector('.userMessaages'),
  userPhone = document.querySelector('.userNumber'),
  userSelceted = document.querySelector('.selected');

userName.addEventListener('input', OnchangeEventHandler);
function OnchangeEventHandler(e) {
  const icone = document.querySelector('.UserName-section i');
  if (e.target.value === '') {
    icone.classList.remove('fa-circle-check');
    userName.style.borderColor = '#dc3545';
    icone.style.color = '#dc3545';
  } else if (e.target.value) {
    userName.style.borderColor = '#0a980a';
    icone.classList.add('fa-circle-check');
    icone.style.color = '#0a980a';
  }
}

userEmail.addEventListener('input', (e) => {
  let emailValidPattran = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const icone = document.querySelector('.UserEmail-section i');
  if (!e.target.value.match(emailValidPattran)) {
    userEmail.style.borderColor = '#dc3545';
    icone.classList.remove('fa-circle-check');
    icone.style.color = '#dc3545';
  } else {
    userEmail.style.borderColor = '#0a980a';
    icone.classList.add('fa-circle-check');
    icone.style.color = '#0a980a';
  }
});

userPhone.addEventListener('input', (e) => {
  var numbers = /^[0-9]+$/;
  const icone = document.querySelector('.userNumber-section i');
  if (!e.target.value.match(numbers)) {
    userPhone.style.borderColor = '#dc3545';
    icone.classList.remove('fa-circle-check');
    icone.style.color = '#dc3545';
  } else {
    userPhone.style.borderColor = '#0a980a';
    icone.classList.add('fa-circle-check');
    icone.style.color = '#0a980a';
  }
});

UserTextArea.addEventListener('input', (e) => {
  const icone = document.querySelector('.TextAreaSection i');
  if (e.target.value === '') {
    UserTextArea.style.borderColor = '#dc3545';
    icone.classList.remove('fa-circle-check');
    icone.style.color = '#dc3545';
  } else if (e.target.value) {
    UserTextArea.style.borderColor = '#0a980a';
    icone.classList.add('fa-circle-check');
    icone.style.color = '#0a980a';
  }
});

from.addEventListener('submit', (e) => {
  e.preventDefault();
  let emailValidPattran = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  var numbers = /^[0-9]+$/;
  if (
    !userName.value ||
    !userEmail.value ||
    !UserTextArea.value ||
    !userPhone.value
  ) {
    userName.style.borderColor = '#dc3545';
    userEmail.style.borderColor = '#dc3545';
    UserTextArea.style.borderColor = '#dc3545';
    userPhone.style.borderColor = '#dc3545';
    from.classList.add('ErrorForm');
  } else if (!userEmail.value.match(emailValidPattran)) {
    userEmail.style.borderColor = '#dc3545';
    from.classList.add('ErrorForm');
  } else if (!userPhone.value.match(numbers)) {
    from.classList.add('ErrorForm');
    userPhone.style.borderColor = '#dc3545';
  } else if (userName.value === '') {
    userName.style.borderColor = '#dc3545';
  } else {
    const ChecekBox = document.querySelector('.chekBoxInner');
    document.querySelector('html').style.overflow = 'hidden';
    ChecekBox.classList.add('removeChekBox');
    setTimeout(endCheckBox, timeing);
    userName.style.borderColor = '#ccc';
    userEmail.style.borderColor = '#ccc';
    UserTextArea.style.borderColor = '#ccc';
    userPhone.style.borderColor = '#ccc';
    from.classList.replace('ErrorForm', 'ValidForm');
  }
});

function endCheckBox() {
  const ChecekBox = document.querySelector('.chekBoxInner');
  document.querySelector('html').style.overflow = 'scroll';
  ChecekBox.classList.remove('removeChekBox');
}

// Preview Image

const previewBox = document.querySelector('.Preview');
const PrevEyeLink = document.querySelectorAll('.over-view .fa-eye');
const closeBtnPreviewBox = document.querySelector('#back-fun');
function mypreviewImage() {
  let PrevImgSrc = document.querySelector('.Preview img');
  PrevEyeLink.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      previewBox.classList.add('Show-Preview');
      document.querySelector('html').style.overflow = 'hidden';
      let image =
        e.target.parentElement.parentElement.parentElement.querySelector('img');
      PrevImgSrc.src = image.src;
    });

    // Close preview image
    closeBtnPreviewBox.addEventListener('click', (e) => {
      e.preventDefault();
      previewBox.classList.remove('Show-Preview');
      document.querySelector('html').style.overflow = 'scroll';
    });
  });
}
mypreviewImage();
// *  Filter Image function

const listItemall = document.querySelectorAll('.item_gallerylist');

const ImgBox = document.querySelectorAll('.AllImage_Filter');

for (let i = 0; i < listItemall.length; i++) {
  listItemall[i].addEventListener('click', function (e) {
    e.preventDefault();
    for (let J = 0; J < listItemall.length; J++) {
      listItemall[J].classList.remove('ShowAll');
    }
    listItemall[i].classList.add('ShowAll');
    let imageFilterName = listItemall[i].getAttribute('data-item');
    ImgBox.forEach((image) => {
      let GalleryFilterName = image.getAttribute('data-filter');
      if (GalleryFilterName === imageFilterName || imageFilterName == 'All') {
        image.classList.remove('hide');
        image.classList.add('Show');
      } else {
        image.classList.remove('Show');
        image.classList.add('hide');
      }
    });
  });
}

//?  animate number counter
const worlsection = document.querySelector('.expriences_section');
const workObserver = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    //?  animate number counter
    const counterNum = document.querySelectorAll('.counter-number');
    const speed = 50;
    counterNum.forEach((curElm) => {
      const updateNumber = () => {
        const targetNumber = parseInt(curElm.dataset.number);
        //  console.log(targetNumber);
        const intialNum = parseInt(curElm.innerText);
        // console.log(intialNum);

        const inrementNumber = Math.trunc(targetNumber / speed);
        // console.log(inrementNumber);
        if (intialNum < targetNumber) {
          curElm.innerText = intialNum + inrementNumber;

          setTimeout(updateNumber, 50);
        }
      };
      updateNumber();
    });
    observer.unobserve(worlsection);
  },
  {
    root: null,
    threshold: 0,
  }
);
workObserver.observe(worlsection);
// ! Skill Counter  number
var i = 0;
function move() {
  let Persent = document.querySelectorAll('.skill_percentage');
  if (i == 0) {
    const elemt = document.querySelectorAll('.FontEnd_skill .skill_number');
    elemt.forEach(function (elemet) {
      i = 1;
      const targetNumber = parseInt(elemet.dataset.number);
      var width = 5;
      var id = setInterval(frame, 20);
      function frame() {
        if (width >= targetNumber) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elemet.innerHTML = width + '%';
        }
      }
    });
  }
}
move();

// skill Toggle
const skillHeader = document.querySelectorAll('.Front-head');
const skillContent = document.getElementsByClassName('FontEnd_skill');
function ToggleSkilShow() {
  let parentNode = this.parentNode.className;
  for (let i = 0; i < skillContent.length; i++) {
    skillContent[i].className = 'FontEnd_skill skills__Colse';
  }
  if (parentNode === 'FontEnd_skill skills__Colse') {
    this.parentNode.className = 'FontEnd_skill skills__open';
  }
}
skillHeader.forEach((element) => {
  element.addEventListener('click', ToggleSkilShow);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', function () {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabcontent) => {
      tabcontent.classList.remove('qualification__active');
    });
    target.classList.add('qualification__active');
    tabs.forEach((tab) => {
      tab.classList.remove('qualification__active');
    });
    tab.classList.add('qualification__active');
  });
});
