// Get all the navigation links
var navLinks = document.querySelectorAll(" nav a");

const eboard_page = document.querySelector('#ebd_btn');
eboard_page.addEventListener('click', function(){
location.href = 'eboard.html';
});

// const instagram = document.querySelector('#ig');
// instagram.addEventListener('click', function(){
// location.href = 'https://instagram.com/bu_nsa?igshid=YmMyMTA2M2Y=';
// });

navLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the target element's id from the link's href
    var targetId = this.getAttribute("href");
    var targetEl = document.querySelector(targetId);

    if (window.scrollY > 50) {
        document.body.classList.add("scrolled");
    } else {
    document.body.classList.remove("scrolled");
    }
    // Animate the scroll behavior using window.scrollTo
    // To be smooth scroll add this function
    function smoothScrollTo(endX, endY, duration) {
        const startX = window.scrollX || window.pageXOffset;
        const startY = window.scrollY || window.pageYOffset;
        const distanceX = endX - startX;
        const distanceY = endY - startY;
        const startTime = new Date().getTime();
    
        duration = typeof duration !== 'undefined' ? duration : 400;
    
        // Easing function
        const easeInOutQuart = (time, from, distance, duration) => {
            if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
            return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
        };
    
        const timer = setInterval(() => {
            const time = new Date().getTime() - startTime;
            const newX = easeInOutQuart(time, startX, distanceX, duration);
            const newY = easeInOutQuart(time, startY, distanceY, duration);
            if (time >= duration) {
                clearInterval(timer);
            }
            window.scroll(newX, newY);
        }, 1000 / 60); // 60 fps
    };
    // call the smooth scroll function
    smoothScrollTo(0, targetEl.offsetTop, 1000);
  });
});


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
      });
      });
