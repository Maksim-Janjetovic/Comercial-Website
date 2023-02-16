function sendEmail() {
    Email.send({
        SecureToken: "15dc4e8b-6c01-4664-b58f-dcd9445b158c",
        To : "maksimjanjetovic.de@gmail.com",
        From : document.getElementById("email").value ,
        Subject : "NEW CONTACT ENQUIRY!",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
