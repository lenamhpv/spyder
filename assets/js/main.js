window.onload=function(){
    var loadScreen = document.querySelector('.load')
    loadScreen.classList.add('active')
    
    const addRemoveEvent = {
        init: function() {
            this.addEvent('.slide-menu', '.menu-right .logo-x i', '.menu-right')
        },
        addEvent: function(open, close, main) {
            const openBtn = document.querySelectorAll(open)  // [DOM, DOM, DOM, DOM]
            const closeBtn = document.querySelector(close)
            const mainWrap = document.querySelector(main)

            openBtn.forEach(item => item.addEventListener('click', function() {
                mainWrap.classList.add('active')
            }))

            // openBtn.addEventListener('click', function(){
            //     mainWrap.classList.add('active')
            // })

            closeBtn.addEventListener('click', function(){
                mainWrap.classList.remove('active')
            })
        }
    }
    addRemoveEvent.init()
    
    const iso = new Isotope( '.img-filter', {
        itemSelector: '.grid-item',
        layoutMode: 'masonry',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
          },
          visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
          },
        masonry: {
            columnWidth: '.grid-sizer'
        },
    })
    const filterOptions = document.querySelectorAll('.text-filter li')
    filterOptions.forEach(item => item.addEventListener('click', function(){
        var filter = this.getAttribute("data-filter");
        iso.arrange({ filter: filter });
        filterOptions.forEach(element => element.classList.remove('active'))
        this.classList.add('active')
    }))

    $('.owl-carousel.slider').owlCarousel({
        loop:true,
        margin:0,
        nav: false,
        responsive: {
            0:{
                items:1
            }
        },
        autoplay: 5000
    })
    const dots = document.querySelectorAll('.bg-slide-text .owl-dots button')
    dots.forEach(item => item.addEventListener('click', function(){
        dots.classList.add('active')
    }))

    $('.owl-carousel.img').owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            }
        },
        autoplay: 5000
    })

    function validateName(inputName) {
        if (!inputName.value.trim()) {
            errorMessageName.innerHTML = 'Your Name is Required'
            return false
        } else if (inputName.value.trim().length > 20) {
            errorMessageName.innerHTML = 'Max length of field is 20 characters'
            return false
        } else {
            errorMessageName.innerHTML = ''
            return true
        }
    }

    function validateEmail(inputEmail) {
        if (!inputEmail.value.trim()) {
            errorMessageEmail.innerHTML = 'Your Email is Required'
            return false
        } else if(!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(inputEmail.value))) {
            errorMessageEmail.innerHTML = 'Please enter a Email valid'
            return false
        } else {
            errorMessageEmail.innerHTML = ''
            return true
        }
    }

    function validateMessage(inputMessage) {
        if (!inputMessage.value) {
            errorMessage.innerHTML = 'Please, Leave us a message'
            return false
        } else {
            errorMessage.innerHTML = ''
            return true
        }
    }


    var inputWrapName = document.querySelector('#name')
    var inputName = inputWrapName.querySelector('input')
    var errorMessageName = inputWrapName.querySelector('p')
    inputName.addEventListener('blur', function(){
        validateName(inputName)
    })
    inputName.addEventListener('focus', function(){
        buttonContact.classList.remove('active')
    })

    var inputWrapEmail = document.querySelector('#email')
    var inputEmail = inputWrapEmail.querySelector('input')
    var errorMessageEmail = inputWrapEmail.querySelector('p')
    inputEmail.addEventListener('blur', function(){
        validateEmail(inputEmail)
    })
    inputEmail.addEventListener('focus', function(){
        buttonContact.classList.remove('active')
    })


    var inputWrapMessage = document.querySelector('#message')
    var inputMessage = inputWrapMessage.querySelector('textarea')
    var errorMessage = inputWrapMessage.querySelector('p')
    inputMessage.addEventListener('blur', function(){
        validateMessage(inputMessage)
    })
    inputMessage.addEventListener('focus', function(){
        buttonContact.classList.remove('active')
    })


    var buttonContact = document.querySelector('.form-submit .form-input button')
    buttonContact.addEventListener('click', function(){
        validateName(inputName)
        validateEmail(inputEmail)
        validateMessage(inputMessage)
        if (validateName(inputName) && validateEmail(inputEmail)  && validateMessage(inputMessage)) {
            alert('You have successfully submitted')
            buttonContact.classList.remove('active')
        } else {
            buttonContact.classList.add('active')
        }
    })


    var menuScroll = document.querySelector('.home')
    var logoScroll = document.querySelector('.logo-menu-socialNetwork .logo')
    var buttonTopScroll = document.querySelector('.goTopbtn')
    window.addEventListener('scroll', function(){
        if (window.scrollY >= 50) {
            menuScroll.classList.add('active')
            logoScroll.classList.add('active')
            buttonTopScroll.classList.add('active')
        } else {
            menuScroll.classList.remove('active')
            logoScroll.classList.remove('active')
            buttonTopScroll.classList.remove('active')
        }
    })

    wow = new WOW(
        {
        boxClass:     'wow',     
        animateClass: 'animated',
        offset:       0,         
        mobile:       true,      
        live:         true       
      }
    )
    wow.init();

    $('.background__home .water').ripples({
        imageUrl: './assets/img/home-bg-1.jpg',
        dropRadius: 25,
        perturbance: 0.07,
        resolution: 300
    });
}