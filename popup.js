document.getElementById('send').addEventListener('click', function (e) {
  const elem = document.getElementById('input');
  fetch('http://localhost:3000').then(e => alert('good'))
});

