// $(document).ready(function(){

//     $(".main").onepage_scroll({
//         sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
//         easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
//                                          // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
//         animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
//         pagination: false,                // You can either show or hide the pagination. Toggle true for show, false for hide.
//         updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
//         beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
//         afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
//         loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
//         keyboard: true,                  // You can activate the keyboard controls
//         responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
//                                          // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
//                                          // the browser's width is less than 600, the fallback will kick in.
//         direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
//      }); 
//  });

 $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

var arrowLeft = document.getElementById('left-arrow')
var arrowRight = document.getElementById('right-arrow')
var text = document.getElementById('phrase-text')
arrowLeft.addEventListener('click', minus1)
arrowRight.addEventListener('click', plus1)

var phraseArray = ["the force that guides the stars <br> <span>guides you too</span>", "\“Look at that tree,\” he said, \“how straight and tall it is. How it points to the sky, as if it were pointing to the Infinite, reminding you of the presence of God.\”", "<span>The firmness of a person’s resolve makes him great.</span> <br> However lowly a person may be, he can become great by his determination.", "Dharma is an all-round effort <span>to become familiar with the state of Oneness</span>", "<span>Dharma is the cultivation of benevolent intellect</span> <br>for the all-round welfare of all the created beings in the universe"]


function phrasePicker(indx){
    text.innerHTML = phraseArray[indx]
}
phraseIndex = 0
phrasePicker(phraseIndex)

function plus1(){
    phraseIndex += 1
    if (phraseIndex<0){
        phraseIndex = phraseArray.length-1
        phrasePicker(phraseIndex)
    } else if (phraseIndex>phraseArray.length-1){
        phraseIndex = 0
        phrasePicker(phraseIndex)
    } else {
        phrasePicker(phraseIndex)
    }
    console.log(phraseIndex)
}
function minus1(){
    phraseIndex = phraseIndex-1
    if (phraseIndex<0){
        phraseIndex = phraseArray.length-1
        phrasePicker(phraseIndex)
    } else if (phraseIndex>phraseArray.length-1){
        phraseIndex = 0
        phrasePicker(phraseIndex)
    } else {
        phrasePicker(phraseIndex)
    }
    console.log(phraseIndex)
}

var stickyLogo = document.getElementById('sticky-logo')
stickyLogo.classList.add("animated")
var waypoint = new Waypoint({
element: document.getElementById('about-section'),
handler: function(direction) {
    if (direction=='down'){
        stickyLogo.style.display = 'block'        
        stickyLogo.classList.add("fadeIn")
        console.log(stickyLogo.classList)
    }
    }
})
var waypoint2 = new Waypoint({
element: document.getElementById('about-section'),
handler: function(direction) {
    if (direction=='up'){
        stickyLogo.style.display = 'none'
        // stickyLogo.classList.add("fadeOut")
    }
    },
    offset: 30
})


var yogaButton = document.getElementById('yogaButton')
var serviceButton = document.getElementById('serviceButton')
var cultureButton = document.getElementById('cultureButton')
var meditationButton = document.getElementById('meditationButton')
var animalsButton = document.getElementById('animalsButton')
var sportsButton = document.getElementById('sportsButton')
var educationButton = document.getElementById('educationButton')

yogaButton.addEventListener('click', yogaText)
serviceButton.addEventListener('click', serviceText)
cultureButton.addEventListener('click', cultureText)
meditationButton.addEventListener('click', spiritualityText)
animalsButton.addEventListener('click', animalsText)
sportsButton.addEventListener('click', sportsText)
educationButton.addEventListener('click', educationText)

var p1 = document.getElementById("p1")
var title1 = document.getElementById("title1")
var branchImage = document.getElementById('branch-image')

p1.classList.add('animated')
title1.classList.add('animated')
branchImage.classList.add('animated')

function classRemoval(){
    setTimeout(() => {
    p1.classList.remove('fadeIn')
    title1.classList.remove('fadeIn')
    branchImage.classList.remove('pulse')
    }, 600);
}

var serviceLink = document.getElementById('service-link')
var meditationLink = document.getElementById('meditation-link')

serviceLink.addEventListener('click', function(){
    setTimeout(() => {
    serviceButton.click()
    }, 500);
})
meditationLink.addEventListener('click', function(){
setTimeout(() => {
    meditationButton.click()    
}, 500);
})

function animateTexts(){
    p1.classList.add('fadeIn')
    title1.classList.add('fadeIn')
    branchImage.classList.add('pulse')
    classRemoval()
}

function yogaText () {
    animateTexts();
    p1.innerHTML = "A lot of people think of physical contorsions, spandex or superstitious beliefs when talking about yoga.<br><br> Asanas (yoga postures) are important because they facilitate meditation, they promote that state of Union which we call \"yoga\". How?  <br><br> Our approach is scientific. Asanas work at a glandular level. Our glands (pituitary, thymus, thyroid, etc.) secrete hormones which make us feel happy, angry, sad, etc. <br><br> Asanas work with these glands to regulate hormone production. When practicing asanas we use the physical postures to regulate our state of mind, to be calmer and happier. Such a state of mind is conductive to meditation."
    title1.innerHTML = "Asanas is just the tip of the iceberg."
    branchImage.src = "resources/img/branch-imgs/yogic-help.jpg"
}
function serviceText() {
    animateTexts();
    p1.innerHTML = "A philosophy that only encourages self-realization will leave room for selfishness. A true good person will always have the desire to help others. <br><br> Furthermore, if a person doesn't do service, his or her life might loose meaning and a depressive outlook on life might come. <br><br> Our service helps others and it also makes us happy."
    title1.innerHTML = "Selflessness"
    branchImage.src = "resources/img/branch-imgs/service.jpg"
}
function cultureText() {
    animateTexts();
    p1.innerHTML = "Have you noticed how music changes your mood? Arts have this capacity to change our mental state. So we should ask ourselves, what is the best mental state? The yogis say it is inner happiness or bliss. <br><br> True art and culture is that which will elevate our minds and this is where art connects with spirituality. <br><br> The spiritual path can be seen as the search for supreme beauty. When art becomes a channel for elevated beauty then we can say we go from the field of aesthetics to the field of supra-aesthetics. It is in meditation also, where we can find supra-aesthetics, this supreme beauty."
    title1.innerHTML = "Supra-Aesthetics"
    branchImage.src = "resources/img/branch-imgs/kiirtan.jpg"
}
function spiritualityText() {
    animateTexts();
    p1.innerHTML = "The world of matter is limitted while human thirst is infinite. <br><br> Our inherent infinite thirst will take us on a journey to look for mental expansion, to look for interesting ideas. <br><br> But this mental world is also limited, so our infinite thirst cannot be quenched by the mental world either. <br><br> Infinite thirst can only be quenched by something infinite. This limitlessness is what we find in meditation."
    title1.innerHTML = "Spirituality"
    branchImage.src = "resources/img/branch-imgs/meditation.jpg"
}
function animalsText() {
    animateTexts();
    p1.innerHTML = "Humanity is finally realizing that we must not care only for our fellow human beings, but we must care about all living beings. <br><br> If we develop empathy for plants and animals, then their welfare becomes essential for our happiness also."
    title1.innerHTML = "Plants and Animals Welfare"
    branchImage.src = "resources/img/branch-imgs/bear.jpg"
}
function sportsText() {
    animateTexts();
    p1.innerHTML = "Phisical health is essential for any undertaking, even spiritual. Therefore we encourage excercise as a means to live a healthy and happy life.<br><br> Other important aspects are that sports give you the chance to be social and to stay in touch with nature!"
    title1.innerHTML = "Sports and Adventures"
    branchImage.src = "resources/img/branch-imgs/lake.jpg"
}
function educationText() {
    animateTexts();
    p1.innerHTML = "We believe in an education system where all living beings are taken into account and where inner happiness is the goal of life. <br><br> We currently have schools in Finland, Norway, Ghana, Australia, India, Thailand, Haiti and many other countries around the world."
    title1.innerHTML = "Education"
    branchImage.src = "resources/img/branch-imgs/iceland-school1.jpg"
}

var summerRetreat = document.getElementById('summer-retreat')
var easterRetreat = document.getElementById('easter-retreat')
var weeklyMeditation = document.getElementById('weekly-meditation')
var philosophyClass = document.getElementById('philosophy-class')
var yogaClass = document.getElementById('yoga-class')
var webinar = document.getElementById('webinar')
var berlinale = document.getElementById('berlinale')
var sports = document.getElementById('sports')
var inviteUs = document.getElementById('invite-us')

summerRetreat.addEventListener('mouseover', bgSummerRetreat)
easterRetreat.addEventListener('mouseover', bgEasterRetreat)
weeklyMeditation.addEventListener('mouseover', bgWeeklyMeditation)
philosophyClass.addEventListener('mouseover', bgPhilosophyClass)
yogaClass.addEventListener('mouseover', bgYogaClass)
webinar.addEventListener('mouseover', bgWebinar)
berlinale.addEventListener('mouseover', bgBerlinale)
sports.addEventListener('mouseover', bgSports)
inviteUs.addEventListener('mouseover', bgInvite)


var elementFront = document.getElementById("events-section-bgFront")
var elementMain = document.getElementById("events-section")
elementFront.classList.add('animated')

function bgSummerRetreat() {
    
    elementMain.style.backgroundImage = "url('resources/img/events-pics/event1.jpg')"

    elementFront.classList.add('fadeOut')
    
    setTimeout(() => {
        elementFront.style.backgroundImage = "url('resources/img/events-pics/event1.jpg')";
        elementFront.classList.remove('fadeOut')
    }, 600);
    
}
function bgEasterRetreat() {
    elementMain.style.backgroundImage = "url('resources/img/events-pics/event2.jpg')"

    elementFront.classList.add('fadeOut')

    setTimeout(function(){ 
        elementFront.style.backgroundImage = "url('resources/img/events-pics/event2.jpg')";
        elementFront.classList.remove('fadeOut')
    }, 600); 
}
function bgWeeklyMeditation() {
    elementMain.style.backgroundImage = "url('resources/img/events-pics/event3.jpg')"

    elementFront.classList.add('fadeOut')

    setTimeout(function(){ 
        elementFront.style.backgroundImage = "url('resources/img/events-pics/event3.jpg')";
        elementFront.classList.remove('fadeOut')
    }, 600); 
}
function bgPhilosophyClass() {
    elementMain.style.backgroundImage = "url('resources/img/events-pics/event4.jpg')"

    elementFront.classList.add('fadeOut')

    setTimeout(function(){ 
        elementFront.style.backgroundImage = "url('resources/img/events-pics/event4.jpg')";
        elementFront.classList.remove('fadeOut')
    }, 600); 
}
function bgYogaClass() {
    elementMain.style.backgroundImage = "url('resources/img/events-pics/event5.jpg')"

    elementFront.classList.add('fadeOut')

    setTimeout(function(){ 
        elementFront.style.backgroundImage = "url('resources/img/events-pics/event5.jpg')";
        elementFront.classList.remove('fadeOut')
    }, 600); 
}
function bgWebinar() {
    elementMain.style.backgroundImage = "url('resources/img/events-pics/event6.jpg')"

    elementFront.classList.add('fadeOut')

    setTimeout(function(){ 
        elementFront.style.backgroundImage = "url('resources/img/events-pics/event6.jpg')";
        elementFront.classList.remove('fadeOut')
    }, 600); 
}
function bgBerlinale() {
    elementMain.style.backgroundImage = "url('resources/img/events-pics/event7.jpg')"

    elementFront.classList.add('fadeOut')
    
    setTimeout(function(){ 
        elementFront.style.backgroundImage = "url('resources/img/events-pics/event7.jpg')";
        elementFront.classList.remove('fadeOut')
    }, 600); 
}
function bgSports() {
    elementMain.style.backgroundImage = "url('resources/img/events-pics/event8.jpg')"

    elementFront.classList.add('fadeOut')

    setTimeout(function(){ 
        elementFront.style.backgroundImage = "url('resources/img/events-pics/event8.jpg')";
        elementFront.classList.remove('fadeOut')
    }, 600);
}
function bgInvite() {    
    elementMain.style.backgroundImage = "url('resources/img/events-pics/event9.jpg')"

    elementFront.classList.add('fadeOut')

    setTimeout(function(){ 
        elementFront.style.backgroundImage = "url('resources/img/events-pics/event9.jpg')"
        elementFront.classList.remove('fadeOut')
    }, 600)
}

var readMore = document.getElementById("read-more")
var hiddenP = document.getElementById("hidden-p")
hiddenP.classList.add('animated')
readMore.addEventListener('click', expandReadMore)
function expandReadMore(){
    readMore.style.display = 'none'
    hiddenP.style.display = 'block'
    hiddenP.classList.add('fadeIn')
}

var theModal = document.getElementById('my-modal1')
var theModalP = document.getElementById('my-modal-p')
var profileImg1 = document.getElementById('profile-image-1')
var profileImg2 = document.getElementById('profile-image-2')
var profileImg3 = document.getElementById('profile-image-3')
var profileImg4 = document.getElementById('profile-image-4')
var profileImg5 = document.getElementById('profile-image-5')
var profileImg6 = document.getElementById('profile-image-6')

profileImg1.addEventListener('click', displayInfo1)
profileImg2.addEventListener('click', displayInfo2)
profileImg3.addEventListener('click', displayInfo3)
profileImg4.addEventListener('click', displayInfo4)
profileImg5.addEventListener('click', displayInfo5)
profileImg6.addEventListener('click', displayInfo6)

var contactSection = document.getElementById('contact-section')

function displayInfo1() {
    var distanceX = this.getBoundingClientRect().x;
    var distanceY = this.getBoundingClientRect().y - contactSection.getBoundingClientRect().y; 
    var myWidth = this.getBoundingClientRect().width
    var myHeight = this.getBoundingClientRect().height
    var positionX = distanceX+myWidth-7
    var positionY = distanceY+(myHeight/2)+9

    theModal.style.visibility = "visible"
    theModalP.innerHTML = "kailash@gmail.com <br> 967 677 23 32"
    theModal.style.marginLeft = `${positionX}px`
    theModal.style.marginTop = `${positionY}px`
}
function displayInfo2() {
    var distanceX = this.getBoundingClientRect().x;
    var distanceY = this.getBoundingClientRect().y - contactSection.getBoundingClientRect().y; 
    var myWidth = this.getBoundingClientRect().width
    var myHeight = this.getBoundingClientRect().height
    var positionX = distanceX+myWidth-7
    var positionY = distanceY+(myHeight/2)+9

    theModal.style.visibility = "visible"
    theModalP.innerHTML = "manohar@gmail.com"
    theModal.style.marginLeft = `${positionX}px`
    theModal.style.marginTop = `${positionY}px`
}
function displayInfo3() {
    var distanceX = this.getBoundingClientRect().x;
    var distanceY = this.getBoundingClientRect().y - contactSection.getBoundingClientRect().y; 
    var myWidth = this.getBoundingClientRect().width
    var myHeight = this.getBoundingClientRect().height
    var positionX = distanceX+myWidth-7
    var positionY = distanceY+(myHeight/2)+9

    theModal.style.visibility = "visible"
    theModalP.innerHTML = "amshu@gmail.com"
    theModal.style.marginLeft = `${positionX}px`
    theModal.style.marginTop = `${positionY}px`
}
function displayInfo4() {
    var distanceX = this.getBoundingClientRect().x;
    var distanceY = this.getBoundingClientRect().y - contactSection.getBoundingClientRect().y; 
    var myWidth = this.getBoundingClientRect().width
    var myHeight = this.getBoundingClientRect().height
    var positionX = distanceX+myWidth-7
    var positionY = distanceY+(myHeight/2)+9

    theModal.style.visibility = "visible"
    theModalP.innerHTML = "manojit@gmail.com"
    theModal.style.marginLeft = `${positionX}px`
    theModal.style.marginTop = `${positionY}px`
}
function displayInfo5() {
    var distanceX = this.getBoundingClientRect().x;
    var distanceY = this.getBoundingClientRect().y - contactSection.getBoundingClientRect().y; 
    var myWidth = this.getBoundingClientRect().width
    var myHeight = this.getBoundingClientRect().height
    var positionX = distanceX+myWidth-7
    var positionY = distanceY+(myHeight/2)+9

    theModal.style.visibility = "visible"
    theModalP.innerHTML = "dada@gmail.com"
    theModal.style.marginLeft = `${positionX}px`
    theModal.style.marginTop = `${positionY}px`
}
function displayInfo6() {
    var distanceX = this.getBoundingClientRect().x;
    var distanceY = this.getBoundingClientRect().y - contactSection.getBoundingClientRect().y; 
    var myWidth = this.getBoundingClientRect().width
    var myHeight = this.getBoundingClientRect().height
    var positionX = distanceX+myWidth-7
    var positionY = distanceY+(myHeight/2)+9

    theModal.style.visibility = "visible"
    theModalP.innerHTML = "ajita@gmail.com"
    theModal.style.marginLeft = `${positionX}px`
    theModal.style.marginTop = `${positionY}px`
}

function closeInfo() {
    theModal.style.visibility = "hidden"
}
