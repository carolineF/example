const startAnimation = () => {
    var timer = setInterval(function () {
      if (parseInt(test.style.width) < 300) {
        test.style.width = parseInt(test.style.width) + 3 + 'px';
        progress.innerHTML = parseInt(test.style.width) / 3 + '%';
      } else {
        clearInterval(timer);
      }
    }, 17);
  }

document.addEventListener('click', startAnimation);