let about = document.querySelector("#about-main");
let experience = document.querySelector("#experience-main");
let skills = document.querySelector("#skill-main");
let education = document.querySelector("#education-main");
let project = document.querySelector("#project-main");
let award = document.querySelector("#award-main");
let contact = document.querySelector("#contact-main");


window.addEventListener("scroll", () => {
    var windo = window.pageYOffset;

    let str = "windo " + windo + " about " + about.offsetTop + " experience " + experience.offsetTop + " skills " + skills.offsetTop + " education " + education.offsetTop + " project " + project.offsetTop + " award " + award.offsetTop + " contact " + contact.offsetTop;
    console.log(str);
    if (about.offsetTop <= windo && experience.offsetTop > windo) {
        document.querySelector("#about-icon").setAttribute("id", "active");
        document.querySelector("#experience-icon").removeAttribute("id", "active");
        document.querySelector("#skill-icon").removeAttribute("id", "active");
        document.querySelector("#education-icon").removeAttribute("id", "active");
        document.querySelector("#project-icon").removeAttribute("id", "active");
        document.querySelector("#award-icon").removeAttribute("id", "active");
        document.querySelector("#contact-icon").removeAttribute("id", "active");
    }
    else if (experience.offsetTop <= windo && skills.offsetTop > windo) {
        document.querySelector("#experience-icon").setAttribute("id", "active");
        document.querySelector("#about-icon").removeAttribute("id", "active");
        document.querySelector("#skill-icon").removeAttribute("id", "active");
        document.querySelector("#education-icon").removeAttribute("id", "active");
        document.querySelector("#project-icon").removeAttribute("id", "active");
        document.querySelector("#award-icon").removeAttribute("id", "active");
        document.querySelector("#contact-icon").removeAttribute("id", "active");
    }
    else if (skills.offsetTop <= windo && education.offsetTop > windo) {
        document.querySelector("#skill-icon").setAttribute("id", "active");
        document.querySelector("#experience-icon").removeAttribute("id", "active");
        document.querySelector("#skill-icon").removeAttribute("id", "active");
        document.querySelector("#about-icon").removeAttribute("id", "active");
        document.querySelector("#project-icon").removeAttribute("id", "active");
        document.querySelector("#award-icon").removeAttribute("id", "active");
        document.querySelector("#contact-icon").removeAttribute("id", "active");
    }
    else if (education.offsetTop <= windo && project.offsetTop > windo) {
        document.querySelector("#education-icon").setAttribute("id", "active");
        document.querySelector("#experience-icon").removeAttribute("id", "active");
        document.querySelector("#skill-icon").removeAttribute("id", "active");
        document.querySelector("#about-icon").removeAttribute("id", "active");
        document.querySelector("#project-icon").removeAttribute("id", "active");
        document.querySelector("#award-icon").removeAttribute("id", "active");
        document.querySelector("#contact-icon").removeAttribute("id", "active");
    }
    else if (project.offsetTop <= windo && award.offsetTop > windo) {
        document.querySelector("#project-icon").setAttribute("id", "active");
        document.querySelector("#experience-icon").removeAttribute("id", "active");
        document.querySelector("#skill-icon").removeAttribute("id", "active");
        document.querySelector("#education-icon").removeAttribute("id", "active");
        document.querySelector("#about-icon").removeAttribute("id", "active");
        document.querySelector("#award-icon").removeAttribute("id", "active");
        document.querySelector("#contact-icon").removeAttribute("id", "active");
    }
    else if (award.offsetTop <= windo && contact.offsetTop > windo) {
        document.querySelector("#award-icon").setAttribute("id", "active");
        document.querySelector("#experience-icon").removeAttribute("id", "active");
        document.querySelector("#skill-icon").removeAttribute("id", "active");
        document.querySelector("#education-icon").removeAttribute("id", "active");
        document.querySelector("#project-icon").removeAttribute("id", "active");
        document.querySelector("#about-icon").removeAttribute("id", "active");
        document.querySelector("#contact-icon").removeAttribute("id", "active");
    }
    else if (contact.offsetTop <= windo) {
        document.querySelector("#contact-icon").setAttribute("id", "active");
        document.querySelector("#experience-icon").removeAttribute("id", "active");
        document.querySelector("#skill-icon").removeAttribute("id", "active");
        document.querySelector("#education-icon").removeAttribute("id", "active");
        document.querySelector("#project-icon").removeAttribute("id", "active");
        document.querySelector("#award-icon").removeAttribute("id", "active");
        document.querySelector("#about-icon").removeAttribute("id", "active");
    }
});