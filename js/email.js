function sendEmail(){
    Email.send({
        SecureToken : "efd89f44-fd68-48a5-ada4-779d72e64d5e",
        To : 'bond007fake2@gmail.com',
        From : "maksimjanjetovic.de@gmail.com",
        Subject : "New Person in line!",
        Body : "Client is waiting! " + document.getElementById("email-value").value
    }).then(
      alert("You have been added to the waiting list!")
    );
}