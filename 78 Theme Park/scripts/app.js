const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () =>{
        faq.classList.toggle("active");
    });
});

//SHOP.HTML slideshow / tab scripts
var slideIndices = {
    'restaurantSlides': 1,
    'shopSlides': 1
};

function openTab(evt, Tabname) { 
    //Tabname = id restaurantSlides or shopSlides
    //evt = event which is the tab button
    var tablinks;
    var tabcontent = document.getElementsByClassName("slideshow-container");

    //Removes any active tabs first
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    //Add the "active" class to the tabcontent that matches the tabName
    document.getElementById(Tabname).classList.add("active");

    //Add the "active" class to the clicked tab
    evt.currentTarget.classList.add("active");

    //Show slides for the selected tab by calling showDivs function
    showDivs(slideIndices[Tabname], Tabname);
}

//opens the restuarantSlide tab with id = "defaultOpen" by default
document.getElementById("defaultOpen").click();

function plusDivs(n, slideshowId) { //based on button click n will be either +1 or -1 
    showDivs(slideIndices[slideshowId] += n, slideshowId);
}

function showDivs(n, slideshowId) {
    var slides = document.querySelectorAll("#" + slideshowId + " .mySlides");

    //If index is greater than length, go back to first slide
    if (n > slides.length) {slideIndices[slideshowId] = 1;}

    //If index is less than 1, go to last slide
    if (n < 1) {slideIndices[slideshowId] = slides.length;}

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    //Only displays the current selected slide based on index
    slides[slideIndices[slideshowId] - 1].style.display = "block";
}