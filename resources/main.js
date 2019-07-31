// R U N

initMobileMenu();
initUserProfile();
initSecureLinks();

// L I B R A R Y

// Mobile Menu Mechanism

// initialization function of the mobile menu
function initMobileMenu () {
  // hide on clicking outside the menu element
  document.getElementsByTagName('body')[0].addEventListener('click', () => {
    hideMobileMenu();
  })
  // // hide on touching for old browsers or smartphones and tablets
  // document.getElementsByTagName('body')[0].addEventListener('touchend', () => {
  //   hideMobileMenu();
  // })

  // toggle the menu visibility while clicking on the menu button
  document.getElementById('ims-sidebar-trigger').addEventListener('click', (event) => {
    event.stopPropagation();  // to not trigger the body click listener
    event.preventDefault();   // to not change the URI of the page
    toggleMobileMenu();
  })

  // stop propagation while just clicking on the mobile menu itself
  // document.getElementById('ims-sidebar-mobile').addEventListener('click', (event) => {
  //   event.stopPropagation();  // to not trigger the body click listener
  // })


  // hide on device rotation in case the width is bigger than the first breaking point
  document.defaultView.addEventListener('resize', () => {
    if (document.defaultView.innerWidth >= 900) {  // consult the variables.less for the value of the breaking point
      hideMobileMenu();
    }
  })  
}

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

// UserProfile, expandable items

function initUserProfile() {
  var content_boxes = document.querySelectorAll('.user-profile-list-item-expandable > .user-profile-list-expandable-title');
  for (var box of content_boxes) {
    box.addEventListener('click', (event) => {
      event.target.classList.toggle('active');
      event.target.nextSibling.classList.toggle('active');
    })
  }
}

// Placing an icon on "Secure:" pages

function initSecureLinks() {
  var links = document.querySelectorAll('a');
  for (var link of links) {
    if (link.href.indexOf('/Secure:') >= 0) {
      link.classList.toggle('secure');
    }
  }
}
