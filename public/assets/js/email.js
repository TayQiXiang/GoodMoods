function sendEmail(email) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "goodmoodswix2002@gmail.com",
    Password: "BP@sq4Jt2K%WbFk&",
    To: email,
    From: "goodmoodswix2002@gmail.com",
    Subject: "Welcome to GoodMoods",
    Body: "Welcome!!!<br>You have successfully registered with GoodMoods. <br>We will update you with all the latest news and updates. <br>Thank you for being a part of GoodMoods.",
    // Attachments: [
    //   {
    //     name: "File_Name_with_Extension",
    //     path: "Full Path of the file"
    //   }]
  }).then(function (message) {
    alert("Mail has been sent successfully");
  });
}

function getInputValue() {
    // Selecting the input element and get its value
    var inputVal = document.getElementById("myInput").value;

    // Displaying the value
    //alert(validateEmail(inputVal));

    if(validateEmail(inputVal)) {
        sendEmail(inputVal);
    }
    else {
        alert("Invalid Email Address");
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
