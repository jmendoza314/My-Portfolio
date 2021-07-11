// Navigating through Web page
function navShowHide() {
    let contactBtn = document.querySelector('#contact');
    let contactInfo = document.querySelector('.contactInfo');
    let main = document.querySelector('.homepage');
    let homeBtn = document.querySelector('#home');
    let aboutBtn = document.querySelector('#about')
    let aboutMe = document.querySelector('#aboutMe');
    let portfolioBtn = document.querySelector('#portfolio');
    let portfolio = document.querySelector('.portfolioPage');


    
    homeBtn.addEventListener("click", function() {
        contactInfo.classList.add('hide');
        aboutMe.classList.add('hide');
        main.classList.remove('hide');
        portfolio.classList.add('hide');
    })

    portfolioBtn.addEventListener("click", function() {
        portfolio.classList.remove('hide');
        main.classList.add('hide');
        aboutMe.classList.add('hide');
        homeBtn.classList.remove('hide');
        contactInfo.classList.add('hide');
    })
    
    aboutBtn.addEventListener("click", function(){
        contactInfo.classList.add('hide');
        main.classList.add('hide');
        aboutMe.classList.remove('hide');
        homeBtn.classList.remove('hide');
        portfolio.classList.add('hide')
;    })
    contactBtn.addEventListener("click", function() {
        contactInfo.classList.remove('hide');
        main.classList.add('hide');
        homeBtn.classList.remove('hide');
        aboutMe.classList.add('hide');
        portfolio.classList.add('hide');
    })
}

navShowHide()
