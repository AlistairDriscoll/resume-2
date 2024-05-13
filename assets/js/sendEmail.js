function sendEmail(contactForm) {
    emailjs.send("gmail", "alistairs_resume_temp", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response)
        },
        function(error) {
            console.log("FAILURE", error)
        }
    )
    return false;
}