window.onload = function(){
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