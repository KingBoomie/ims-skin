// R U N

initMobileMenu();
initUserProfile();
initSecureLinks();
//initColorScheme();

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

// Changing color of the sidebar depending on the time

function initColorScheme() {
  $.ajax({
    url: "https://api.sunrise-sunset.org/json?lat=58.366052&lng=26.694626&formatted=0",
    dataType:'jsonp',
    type: 'get',
    success: function(response){
      var now, sunrise, sunset;
      
      { // now
	var now = new Date();
	// converting to minutes
	now = now.getHours() * 60 + now.getMinutes();
      }
      
      { // sunrise
	var arr = parseTime(response['results']['sunrise']);
	// converting to minutes
	sunrise = arr[0] * 60 + arr[1];
      }
      
      { // sunset
	var arr = parseTime(response['results']['sunset']);
	// converting to minutes
	sunset = arr[0] * 60 + arr[1];
      }

      // comparison
      setColorScheme(!(now > sunrise && now < sunset))
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      console.log(XMLHttpRequest, textStatus, errorThrown)
    }
  });
}

// Parses time in the format of '2019-08-02T02:07:07+00:00'. According
// to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
// Date.parse() is discouraged until ES5.
function parseTime(datetime) {
  if (datetime) {
    var timeAndZone = datetime.split('T')[1]; // in UTC
    var time = timeAndZone.split('+')[0];
    var timeArr = time.split(':');
    var hours = parseInt(timeArr[0]) + 3; // current zone
    var mins = parseInt(timeArr[1]);
    return [hours, mins];
  }  
}

function setColorScheme(isNight) {
  var sidebarMobile = document.getElementById('ims-sidebar-mobile');
  var sidebar = document.getElementById('ims-sidebar');
  var cards = document.querySelectorAll('.research-group-card');
  if (isNight) {
    sidebar.classList.add('night');    
    sidebarMobile.classList.add('night');
    for (var card of cards) {
      card.classList.add('night');
    }
  } else {
    sidebar.classList.remove('night');
    sidebarMobile.classList.remove('night');
    for (var card of cards) {
      card.classList.remove('night');
    }
  }
}
