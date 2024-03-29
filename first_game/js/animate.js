class Animate{

    animateCSS(element, animationName, callback) {

       const node = document.getElementById(element);
    
       node.classList.add('animated', animationName)
        
       function handleAnimationEnd() {
           node.classList.remove('animated', animationName)
           node.removeEventListener('animationend', handleAnimationEnd)
   
           if (typeof callback === 'function') callback()
       }
   
       node.addEventListener('animationend', handleAnimationEnd)
       
   }
}


