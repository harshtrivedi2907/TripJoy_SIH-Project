const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('a'); // Assuming your menu items have the class 'menu-item'
mobileMenuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});
menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
        menu.classList.remove('active'); // Close the menu when a menu item is clicked
    });
});
function toggleMenu() {
    const menu = document.getElementById("menu");
    const bars = document.querySelectorAll(".bar");

    menu.classList.toggle("active");

    // Toggle the hamburger icon animation
    bars[0].classList.toggle("active1");
    bars[1].classList.toggle("active2");
    bars[2].classList.toggle("active3");
}



window.addEventListener('scroll', function() {
    if (window.scrollY >= 725) {
      document.getElementById("myNav").classList.add("scrolled");
    } else {
      document.getElementById("myNav").classList.remove("scrolled");
    }
  });
