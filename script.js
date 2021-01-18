const menu = document.querySelector('#menu-mobile');
const menuLink = document.querySelector('.navbar-men');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
});


$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 60){
            $('.navbar').addClass("scroll");
        }
            else{
                $('.navbar').removeClass("scroll");
            
        }
    })
});

var typed= new Typed(".typing",{
    strings:["Desenvolvedora"],
    typedSpeed: 120,
    backSpeed:120,
    loop: true
});

function spliScroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '.sobre-mim-titulo',
        triggerHook: 0
    })
    .setPin('.sobre-mim-titulo')
    .addTo(controller);
}

spliScroll();


$(document).ready(function(){
    $('.lista').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'Tudo'){
            $('.box').show('1000');
        }
        else{
            $('.box').not('.' +value).hide('1000');
            $('.box').filter('.' +value).show('1000');
        }
    })
    $('.lista').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
});

AOS.init({
    //offset: 400,
    delay: 0, 
    duration: 600
  });
