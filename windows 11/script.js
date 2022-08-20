let taskbar=document.getElementsByClassName("taskbar")[0];
let task = document.getElementsByClassName("taskbar");
let startmenu=document.getElementsByClassName("startmenu")[0];
taskbar.addEventListener("click",()=>{
        console.log("clicked");
        console.log({task});

        if(startmenu.style.bottom=="50px"){
            startmenu.style.bottom ="-700px";
        }
        else {
            startmenu.style.bottom ="50px";
        }
})