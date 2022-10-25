window.onload = function () {
    //메뉴 변수 선언
    const menuList = document.querySelectorAll(".menu-wrap>section")
    const menuBtn = document.querySelectorAll(".menu-nav-list>li")

    //볓번째 리스트인지 체크할 변수
    let showList = 0;

    for (i = 0; i < menuList.length; i++) {
        menuList[i].classList.add("on");
    }
    menuBtn.forEach((n, id) => {
        menuBtn[id].addEventListener("click", function (e) {
            showList=id;
            clickBtn(e); 
        })
    })
    function clickBtn(e) {
        e.preventDefault();
        if (showList == 0){
            for (i = 0; i < menuList.length; i++) {
                menuList[i].classList.add("on");
            }
        } else {
            for (i = 0; i < menuList.length; i++) {
                menuList[i].classList.remove("on");
            }
            menuList[showList-1].classList.add("on");
        }
    }

    //ham버튼 클릭시 nav 표시
    const ham = document.querySelector(".hambtn>a");
    const nav = document.querySelector("#nav");
    const gnb = document.querySelector(".gnb");

    function toggleMenu() {
        if (nav.classList.contains("on")) {
            nav.classList.remove("on")
            gnb.classList.remove("on")
        } else {
            nav.classList.add("on")
            gnb.classList.add("on")
        }
    };

    ham.addEventListener("click", toggleMenu);
}