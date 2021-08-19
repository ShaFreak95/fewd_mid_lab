/**
 * Try to manipulate the page
 * 
 * Easiest
 * 1) Get the title for each dog/cat services, and put them into the console using console.log
 * 2) Change the title of the page to "We're the CAT People"
 * 3) Change the main image to be something cat related.
 * 
 * 
 * Harder
 * 1) Replace the call to action button background color with "red"
 * 2) Find another image and replace the header (try unsplash.com, get familiar with searching for images)
 * 3) When someone clicks the "Book your next Rover sitter" button, change the text of the button to say "Thanks"
 * 
 * 
 * Hardest (only if you get the others first)
 * 1) Make the responsive menu work!
 * 2) Implement a modal window - "Sign up now" CTA when someone clicks the 'Sign Up' button
 */ 


//Easy Level Tasks
//1) Get the title for each dog/cat services, and put them into the console using console.log
console.log(document.querySelector(".rover-hero-title").innerText)
console.log(document.querySelector(".rover-123-container-title").innerText)

//2) Change the title of the page to "We're the CAT People"
const textChange = "We are cat person. Sorry doggie"

document.querySelector(".rover-hero-title").innerText = textChange
document.querySelector(".rover-123-container-title").innerText = textChange

//3) Change the main image to be something cat related.
document.querySelector(".rover-hero-container").style.backgroundImage = "url('https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg')"

// ==================================================================================================

//Hard Level Tasks
//1) Replace the call to action button background color with "red"
document.querySelector(".rover-button").style.backgroundColor = "red"
document.querySelector(".rover-cta-mobile").style.backgroundColor = "red"
document.querySelector(".rover-cta-btn").style.backgroundColor = "red"

//2) Find another image and replace the header (try unsplash.com, get familiar with searching for images)
document.querySelector(".rover-header-image").src = "https://cdn.iconscout.com/icon/premium/png-256-thumb/cat-paw-961585.png"
document.querySelector(".rover-header-image").width = 80 

//3) When someone clicks the "Book your next Rover sitter" button, change the text of the button to say "Thanks"
document.querySelector(".rover-cta-btn").addEventListener("click", function() {
    document.querySelector(".rover-cta-btn").innerText = "Thank you"
})

// ==================================================================================================

//Hardest Level Tasks
//1) Make the responsive menu work!
document.querySelector(".rover-header-right-mobile").addEventListener("click", function() {
    document.querySelector(".rover-header-right-mobile-menu").style.display = "block"
    document.querySelector(".rover-header-right-mobile-menu nav").classList.toggle("show-menu", true)
    document.querySelector(".rover-header-right-mobile-menu nav").classList.toggle("hide-menu", false)
    // document.querySelector(".rover-header-right-mobile-menu").classList.add("show-menu")
    
})

document.querySelector(".menu-mobile-close-btn").addEventListener("click", function() {
    document.querySelector(".rover-header-right-mobile-menu nav").classList.toggle("show-menu", false)
    document.querySelector(".rover-header-right-mobile-menu nav").classList.toggle("hide-menu", true)
    setTimeout(function(){
        document.querySelector(".rover-header-right-mobile-menu").style.display = "none"
    }, 200)
})

//2) Implement a modal window - "Sign up now" CTA when someone clicks the 'Sign Up' button
document.querySelector(".rover-header-right > a").addEventListener("click", function() {
    document.querySelector(".modal-box-container").style.display = "flex"
})

//** When viewed in mobile/tablet display
document.querySelectorAll(".rover-header-right-mobile-menu nav a")[3].addEventListener("click", function() {
    document.querySelector(".modal-box-container").style.display = "flex"
})
//** when closing modal box */
document.querySelector(".modal-box-container .modal-box .modal-box-close-button > a").addEventListener("click", function() {
    document.querySelector(".modal-box-container").style.display = "none"
})