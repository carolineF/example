
const startAnimation = () => {
    var timer = setTimeout(function fn() {
      if (parseInt(test.style.width) < 300) {
        test.style.width = parseInt(test.style.width) + 3 + 'px';
        progress.innerHTML = parseInt(test.style.width) / 3 + '%';
        
        timer = setTimeout(fn, 17);
      } else {
        clearTimeout(timer);
      }
    }, 17);
  }

  document.addEventListener('click', startAnimation);
