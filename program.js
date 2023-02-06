function sendEmail() {
    Email.send({
        SecureToken : "27edce95-c310-4a76-96f7-f72376a9c498",
        To : 'bond007fake2@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
