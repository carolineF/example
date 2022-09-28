const startAnimation = () => {
    var timer = requestAnimationFrame(function fn() {
      if (parseInt(test.style.width) < 300) {
        test.style.width = parseInt(test.style.width) + 3 + 'px';
        progress.innerHTML = parseInt(test.style.width) / 3 + '%';
        timer = requestAnimationFrame(fn);
      } else {
        cancelAnimationFrame(timer);
      }
    });
  }

  document.addEventListener('click', startAnimation);
  