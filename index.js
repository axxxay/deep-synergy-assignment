let contactForm = document.getElementById("contactform");
let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let email = document.getElementById("email");
let company = document.getElementById("company");
let job = document.getElementById("job");
let likeTo = document.getElementById("liketo");
let aboutUs = document.getElementById("aboutus");
let anything = document.getElementById("else");
let submitButton = document.getElementById("submitbutton");
let firstError = document.getElementById("firsterror");
let lastError = document.getElementById("lasterror");
let emailtError = document.getElementById("emailterror");
let companyError = document.getElementById("companyerror");
let jobError = document.getElementById("joberror");
let likeError = document.getElementById("likeerror");
let aboutError = document.getElementById("abouterror");
let allError = document.getElementById("allError");
let container = document.getElementById("container");
let contactText = document.getElementById("contactText");
let success = document.getElementById("success");


contactForm.addEventListener('submit', (event)=> {
    event.preventDefault();
    if(firstName.value===""){
        firstError.classList.add("error-block");
    } else {
        firstError.classList.remove("error-block");
    }
    if(lastName.value===""){
        lastError.classList.add("error-block");
    } else {
        lastError.classList.remove("error-block");
    }
    if(email.value===""){
        emailtError.classList.add("error-block");
    } else if(!email.value.endsWith("@gmail.com")) {
        emailtError.classList.add("error-block");
        emailtError.textContent = "Email must be formatted correctly.";
    } else {
        emailtError.classList.remove("error-block");
    }
    if(company.value===""){
        companyError.classList.add("error-block");
    } else {
        companyError.classList.remove("error-block");
    }
    if(job.value===""){
        jobError.classList.add("error-block");
    } else {
        jobError.classList.remove("error-block");
    }
    if(likeTo.value==="Please Select"){
        likeError.classList.add("error-block");
    } else {
        likeError.classList.remove("error-block");
    }
    if(aboutUs.value===""){
        aboutError.classList.add("error-block");
    } else {
        aboutError.classList.remove("error-block");
    }
    
    if(firstName.value!=="" && lastName.value!=="" && email.value!=="" && company.value!=="" && job.value!=="" && likeTo.value!=="Please Select" && aboutUs.value!=="") {
        allError.classList.remove("error-block");
        container.removeChild(contactText);
        container.removeChild(contactForm);
        success.classList.add("error-block");
    } else {
        allError.classList.add("error-block");
        return;
    }
})

firstName.addEventListener("blur", ()=> {
    if(firstName.value===""){
        firstError.classList.add("error-block");
    } else {
        firstError.classList.remove("error-block");
    }
})

lastName.addEventListener("blur", ()=> {
    if(lastName.value===""){
        lastError.classList.add("error-block");
    } else {
        lastError.classList.remove("error-block");
    }
})

email.addEventListener("blur", ()=> {
    if(email.value===""){
        emailtError.classList.add("error-block");
    } else if(!email.value.endsWith("@gmail.com")) {
        emailtError.classList.add("error-block");
        emailtError.textContent = "Email must be formatted correctly.";
    } else {
        emailtError.classList.remove("error-block");
    }
})

company.addEventListener("blur", ()=> {
    if(company.value===""){
        companyError.classList.add("error-block");
    } else {
        companyError.classList.remove("error-block");
    }
})

job.addEventListener("blur", ()=> {
    if(job.value===""){
        jobError.classList.add("error-block");
    } else {
        jobError.classList.remove("error-block");
    }
})

likeTo.addEventListener("click", ()=> {
    if(likeTo.value==="Please Select"){
        likeError.classList.add("error-block");
    } else {
        likeError.classList.remove("error-block");
    }
})

aboutUs.addEventListener("blur", ()=> {
    if(aboutUs.value===""){
        aboutError.classList.add("error-block");
    } else {
        aboutError.classList.remove("error-block");
    }
})