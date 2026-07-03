

function validateDemoForm(){
    

    let studentName =
    document.getElementById("studentName").value.trim();

    let parentName =
    document.getElementById("parentName").value.trim();

    let email =
    document.getElementById("email").value.trim();

    let phone =
    document.getElementById("phone").value.trim();

    let grade =
    document.getElementById("grade").value;

    let subject =
    document.getElementById("subject").value;

    let demoDate =
    document.getElementById("demoDate").value;

    if(studentName === ""){
        alert("Please enter Student Name");
        return false;
    }

    if(parentName === ""){
        alert("Please enter Parent Name");
        return false;
    }

    if(email === ""){
        alert("Please enter Email Address");
        return false;
    }

    if(!email.includes("@")){
        alert("Please enter a valid Email Address");
        return false;
    }

    if(phone === ""){
    alert("Please enter Phone Number");
    return false;
    }

    if(phone.length < 11){
    alert("Please enter a valid Phone Number");
    return false;
    }

    if(grade === ""){
        alert("Please select a Grade");
        return false;
    }

    if(subject === ""){
        alert("Please select a Subject");
        return false;
    }

    if(demoDate === ""){
        alert("Please select a Demo Date");
        return false;
    }

    
    console.log("Sending Demo Data...");
    fetch("http://localhost:3000/demo", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({

        studentName,
        parentName,
        email,
        phone,
        grade,
        subject,
        demoDate

    })

})

.then(response => response.text())

.then(data => {

    alert("Demo Class Booked Successfully!");

});

return false;
}



function validateContactForm(){

    let name =
    document.getElementById("contactName").value.trim();

    let email =
    document.getElementById("contactEmail").value.trim();

    let subject =
    document.getElementById("contactSubject").value.trim();

    let message =
    document.getElementById("contactMessage").value.trim();

    if(name === ""){
        alert("Please enter your Name");
        return false;
    }

    if(email === ""){
        alert("Please enter your Email Address");
        return false;
    }

    if(!email.includes("@")){
        alert("Please enter a valid Email Address");
        return false;
    }

    if(subject === ""){
        alert("Please enter a Subject");
        return false;
    }

    if(message === ""){
        alert("Please enter your Message");
        return false;
    }

    fetch("http://localhost:3000/contact", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name,
            email,
            subject,
            message
        })

    })

    .then(response => response.text())

    .then(data => {

        alert("Message Sent Successfully!");

    });

    return false;
}

function validateFeedbackForm(){

    let name =
    document.getElementById("feedbackName").value.trim();

    let email =
    document.getElementById("feedbackEmail").value.trim();

    let category =
    document.getElementById("feedbackCategory").value;

    let message =
    document.getElementById("feedbackMessage").value.trim();

    if(name === ""){
        alert("Please enter your Name");
        return false;
    }

    if(email === ""){
        alert("Please enter your Email Address");
        return false;
    }

    if(!email.includes("@")){
        alert("Please enter a valid Email Address");
        return false;
    }

    if(category === ""){
        alert("Please select a Category");
        return false;
    }

    if(message === ""){
        alert("Please enter your Feedback");
        return false;
    }

    fetch("http://localhost:3000/feedback", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name,
            email,
            category,
            message
        })

    })

    .then(response => response.text())

    .then(data => {

        alert("Thank you for your feedback!");

    });

    return false;
}