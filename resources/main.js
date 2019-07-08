// Mobile Menu Mechanism

// hide on clicking outside the menu element
document.getElementsByTagName('body')[0].addEventListener('click', () => {
  hideMobileMenu();
})

// toggle the menu visibility while clicking on the menu button
document.getElementById('ims-sidebar-trigger').addEventListener('click', (event) => {
  event.stopPropagation();  // to not trigger the body click listener
  event.preventDefault();   // to not change the URI of the page
  toggleMobileMenu();
})

// stop propagation while just clicking on the mobile menu itself
document.getElementById('ims-sidebar-mobile').addEventListener('click', (event) => {
  event.stopPropagation();  // to not trigger the body click listener
})

// hide on device rotation in case the width is bigger than the first breaking point
document.defaultView.addEventListener('resize', () => {
  if (document.defaultView.innerWidth >= 900) {  // consult the variables.less for the value of the breaking point
    hideMobileMenu();
  }
})

function toggleMobileMenu() {
  document.getElementById('ims-sidebar-mobile').classList.toggle('active');
  for (var el of document.getElementsByClassName('main-wrapper')) {
    el.classList.toggle('fixed');
  }
}

function hideMobileMenu() {
  document.getElementById('ims-sidebar-mobile').classList.remove('active');
  for (var el of document.getElementsByClassName('main-wrapper')) {
    el.classList.remove('fixed');
  }
}

function showMobileMenu() {
  document.getElementById('ims-sidebar-mobile').classList.add('active');
  for (var el of document.getElementsByClassName('main-wrapper')) {
    el.classList.add('fixed');
  }
}
