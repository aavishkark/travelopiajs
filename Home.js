document.addEventListener("DOMContentLoaded", function() {
    const settled = true;
    const header = document.querySelector('header')
    const navbar = document.getElementById('navbar')
    navbar.classList.add('animated', settled ? 'settled' : '')

    const alertDiv = document.getElementById('alert')
    const titleDiv = document.getElementById('title')
    const clickBtn = document.getElementById('clickBtn')
    const okBtn = document.getElementById('okBtn')

    clickBtn.addEventListener('click', function() {
      alertDiv.classList.add('open')
      titleDiv.classList.add('titleOpen')
    });

    okBtn.addEventListener('click', function() {
      alertDiv.classList.remove('open')
      titleDiv.classList.remove('titleOpen')
    });
  });