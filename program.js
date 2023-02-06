function sendEmail() {
    Email.send({
        SecureToken: "b8132835-72c8-43b2-8c2c-ab8b31c3ae30",
        To : "maksimjanjetovic.de@gmail.com",
        From : document.getElementById("email").value ,
        Subject : "NEW CONTACT ENQUIRY!",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
