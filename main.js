// About section

// Read more function

document.getElementById("span").addEventListener("click",function(){
  
document.querySelector(".container").classList.toggle("active");
});

document.getElementById("span-2").addEventListener("click",function(){
  
document.querySelector(".container-2").classList.toggle("active-2");
});

document.getElementById("span-3").addEventListener("click",function(){
  
document.querySelector(".container-3").classList.toggle("active-3");
});

document.getElementById("span-4").addEventListener("click",function(){
  
document.querySelector(".container-4").classList.toggle("active-4");
});

document.getElementById("span-5").addEventListener("click",function(){
  
document.querySelector(".container-5").classList.toggle("active-5");
});

document.getElementById("span-6").addEventListener("click",function(){
  
document.querySelector(".container-6").classList.toggle("active-6");
});

// traslate section........

function googleTranslateElementInit(){
    new google.translate.TranslateElement(
        {pageLanguage:'en'},
        'google_translate_element'
    );
}

// pop alert fuction

function show(){
    confirm("Are You Sure You Would Like To Connect With Us");
}

function submit(){
    alert(" Successfuly Submitted");
}
    
