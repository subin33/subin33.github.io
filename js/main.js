function toggleMenu() {
  const navMenuEl = document.getElementById('nav__menu');
  navMenuEl.classList.toggle('show');
}
function handleFloatingButton() {
  const floatingButtonEl = document.getElementById('floating-button');
  floatingButtonEl.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth',
    });
  });
}

function init() {
  const navToggleEl = document.getElementById('nav-toggle');
  navToggleEl.addEventListener('click', () => {
    toggleMenu();
  });

  const navLinkListEl = document.querySelectorAll('.nav__link');
  navLinkListEl.forEach((el) => el.addEventListener('click', toggleMenu));

  handleFloatingButton();
}
init();

const options = {
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const sectionId = entry.target.id;
    if (entry.isIntersecting) {
      document.querySelector(`.nav__link[href*=${sectionId}]`).classList.add('active-link');

      const itemsEl = document.querySelectorAll(`.nav__link:not([href*=${sectionId}])`);
      itemsEl.forEach((el) => el.classList.remove('active-link'));
    }
  });
}, options);

const sectionListEl = document.querySelectorAll('.section');
sectionListEl.forEach((el) => observer.observe(el));
// observer.observe(workSectionEl);

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 1400,
  delay: 200,
});
scrollReveal.reveal('.home__data, .about__img, .skills__text');
scrollReveal.reveal('.home__img, .about__data, .skills__img', { delay: 400 });
scrollReveal.reveal('.skills__data, .project__link', {
  interval: 150,
});

const typeit = new TypeIt('#typeit', {
  speed: 70,
  startDelay: 1500,
  waitUntilVisible: true,
});

typeit
  .type('안녕하세요!<br/>')
  // .type('<strong class="home__title-color">Frontend Developer </strong>', { delay: 300 })
  // .delete(19, { delay: 300 })
  .type('<strong class="home__title-color">프론트엔드 개발자</strong><br/>')
  .type('<strong class="home__title-color">NOH SU BIN </strong>', { delay: 300 })
  .delete(11, { delay: 300 })
  .type('<strong class="home__title-color"> 노수빈 </strong>입니다!')
  .go();
