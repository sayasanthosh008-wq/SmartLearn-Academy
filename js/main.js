fetch("data/data.json")
.then(response => response.json())
.then(data => {

    // ABOUT PAGE
    if(document.getElementById("history")){

        document.getElementById("history").innerHTML =
        data.academy.history;

        document.getElementById("mission").innerHTML =
        data.academy.mission;

        document.getElementById("vision").innerHTML =
        data.academy.vision;

        let awardsContainer =
        document.getElementById("awards");

        data.academy.awards.forEach(function(award){

            awardsContainer.innerHTML +=
            `<div class="award-card">${award}</div>`;

        });

    }

    // FACULTY PAGE
    if(document.getElementById("faculty-container")){

        let container =
        document.getElementById("faculty-container");

        data.academy.faculty.forEach(function(member){

            container.innerHTML +=
`
<div class="faculty-card">

    <img src="${member.image}" alt="${member.name}">

    <h3>${member.name}</h3>

    <p><strong>Subject:</strong> ${member.subject}</p>

    <p><strong>Experience:</strong> ${member.experience}</p>

    <p><strong>Qualification:</strong> ${member.qualification}</p>

</div>
`;

        });

    }

       // COURSES PAGE

if(document.getElementById("grade9-title")){

    for(let i = 0; i < data.academy.courses.length; i++){

        let course =
        data.academy.courses[i];

        let gradeNumber =
        i + 9;

        document.getElementById(
        "grade" + gradeNumber + "-title")
        .innerHTML = course.title;

        document.getElementById(
        "grade" + gradeNumber + "-description")
        .innerHTML = course.description;

        let subjectsContainer =
        document.getElementById(
        "grade" + gradeNumber + "-subjects");

        course.subjects.forEach(function(subject){

            subjectsContainer.innerHTML +=
            `<li>${subject}</li>`;

        });

        let highlightsContainer =
        document.getElementById(
        "grade" + gradeNumber + "-highlights");

        course.highlights.forEach(function(item){

            highlightsContainer.innerHTML +=
            `<li>${item}</li>`;

        });

    }

}

// TESTIMONIALS PAGE

if(document.getElementById("student-testimonials")){

    let studentContainer =
    document.getElementById("student-testimonials");

    let parentContainer =
    document.getElementById("parent-testimonials");

    data.academy.testimonials.forEach(function(testimonial){

        let card =

        `
        <div class="testimonial-card">

            <h3>⭐⭐⭐⭐⭐</h3>

            <p>"${testimonial.comment}"</p>

            <h4>- ${testimonial.name}</h4>

        </div>
        `;

        if(testimonial.type === "Student"){

            studentContainer.innerHTML += card;

        }

        else{

            parentContainer.innerHTML += card;

        }

    });

}

});