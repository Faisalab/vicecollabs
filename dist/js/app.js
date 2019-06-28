const navItems = document.querySelectorAll('.nav-item');

window.onload = function(){    
    navItems.forEach(item => item.classList.add('show'));
};

