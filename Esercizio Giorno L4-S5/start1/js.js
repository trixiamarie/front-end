document.addEventListener('DOMContentLoaded', function() {
    var yellow = document.querySelectorAll('.yellow');
    var green = document.querySelectorAll('.green');
    var purple = document.querySelectorAll('.purple');
  yellow.classList.add('animated-element');
    yellow.addEventListener('animationend', function() {
        green.forEach(element => {
        element.style.opacity = 1;
        element.style.visibility = 'visible'; 
        });
    });

    green.addEventListener('animationend', function() {
        
        purple.forEach(element => {
            element.style.opacity = 1;
       element.style.visibility = 'visible'; 
         });
      });

    
  });
  