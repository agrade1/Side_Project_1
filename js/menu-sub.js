window.onload = function(){
    //스와이퍼 설정
    var swiper = new Swiper(".swiper-container", {
        breakpoints:{
            767:{
                slidesPerView:1
            },
            3000:{
                slidesPerView:3
            },
        },
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        centeredSlides: true,
        on: {
          slideChange: function () {
            $(".menu-info").removeClass("active");
            $(".menu-info").eq(this.realIndex).addClass("active");
          },
        },
      });

    //nav toggle
    const ham = document.querySelector(".hambtn>a");
    const nav = document.querySelector("#nav");
    const gnb = document.querySelector(".gnb");

    function toggleMenu(){
        if(nav.classList.contains("on")){
            nav.classList.remove("on")
            gnb.classList.remove("on")
        } else{
            nav.classList.add("on")
            gnb.classList.add("on")
        }
    };

    ham.addEventListener("click",toggleMenu);
}