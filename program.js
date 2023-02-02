const form = document.getElementById('contact-form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  fetch('contact.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`
  })
    .then(response => response.text())
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    });
});
