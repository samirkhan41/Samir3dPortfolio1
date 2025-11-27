const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')


const hoverSign = document.querySelector('.hover-sign');

const videoList =[video1, video2, video3];

videoList.forEach (function(video){
    video.addEventListener("mouseover", function(){
        video.play()
        hoverSign.classList.add("active")
    })
    video.addEventListener("mouseout", function(){
    video.pause();
    hoverSign.classList.remove("active")
})
})

// Sidebar elements //
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
    
})


//for succes submit problem 


window.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("contactForm");

    if (form) {  // Prevents errors on success.html
        form.addEventListener("submit", function(e){
            e.preventDefault();

            fetch("https://sheetdb.io/api/v1/fmexnwbr209ei", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    data: {
                        NAME: document.getElementById("Text").value,
                        EMAIL: document.getElementById("Email").value,
                        PHONE: document.getElementById("Phone").value,
                        MESSAGE: document.getElementById("Mess").value
                    }
                })
            })
            .then(res => res.json())
            .then(data => {
                window.location.href = "success.html";  // Redirect works now!
            })
            .catch(err => {
                alert("Something went wrong!");
            });
        });
    }

});
let buttonf =document.querySelector("#button-form")
buttonf.addEventListener("click",function()
{
    buttonf.textContent="Wait 3sec...";
})

//downlaod resume button

let resume = document.querySelector("#download-resume");
resume.addEventListener("click",function()
{
    let link =document.createElement("a");
    link.href="resumesam.pdf";
    link.download="resumesam.pdf";
    link.click();
    resume.textContent="Downloaded";
    setTimeout(function()
{
     resume.textContent="⬇ Resume";
},800)
});

//  for Dropping soon section 
