/**
 * Mobile Nav Logic
 */
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavCloseButton = document.querySelector('.mobile-nav__close-button');
const mobileNavOpenButton = document.querySelector('.nav__mobile-nav__icon');

mobileNavOpenButton.addEventListener('click', (e) => {
  mobileNav.style.right = '0';
});
mobileNavCloseButton.addEventListener('click', (e) => {
  mobileNav.style.right = '-100%';
});
/**
 * Mobile Nav Logic End
 */

/**
 * Footer Always on bottom
 * */

/**
 * Footer Always on bottom
 */

/** =============
 * ALUMNI PAGE
 * =============
 */
// -------------- Show Filters in header --------------
const alumniFilterGroups = document.querySelectorAll('.alumni__header__filters__group');

// Adding Event Listener
alumniFilterGroups.forEach((element) => {
  element.addEventListener('click', (e) => {
    if (e.target.classList.contains('alumni__header__filters__group__option')) {
      e.target.nextElementSibling.classList.toggle('display--none');
    }
  });
});
// -------------- Show Alumni Popup --------------
const alumniPopup = document.querySelector('.alumni__alumni-info-popup');
const alumniResults = document.querySelectorAll('.alumni__main__searchResults__result');
const alumniPopupHeaderName = document.querySelector(
  '.alumni__alumni-info-popup__header__user-info__name'
);
const alumniPopupHeaderCurrentJob = document.querySelector(
  '.alumni__alumni-info-popup__header__user-info__current-job'
);
const alumniPopupHeaderQualification = document.querySelector(
  'alumni__alumni-info-popup__header__user-info__qualification'
);
const alumniPopupHeaderImg = document.querySelector('.alumni__alumni-info-popup__header__img');
// Adding Event Listener
alumniResults.forEach((element) => {
  element.addEventListener('click', (e) => {
    const result = e.target.closest('.alumni__main__searchResults__result');
    console.log(result.id);
    alumniPopup.classList.remove('display--none');
  });
});

// -------------- Close Alumni popup --------------
const alumniPopupCloseButton = document.querySelector('.alumni__alumni-info-popup__close-button');
alumniPopupCloseButton.addEventListener('click', (e) => {
  alumniPopup.classList.add('display--none');
});
/** =============
 * ALUMNI PAGE END
 * =============
 */
