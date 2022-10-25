window.onload = function(){
    let banner = document.querySelector(".banner");
    let bannerLi = document.querySelectorAll(".banner>li");
    const pagerBtn = document.querySelectorAll(".pager>li");
    const arrowLeft = document.querySelector(".leftBtn");
    const arrowRight = document.querySelector(".rightBtn");

    //보여지는 배너
    let showBanner = 0;
    let moveX = 0;
    let liWidth = bannerLi[0].clientWidth;
    
    //복사
    let cloneObj = bannerLi[0].cloneNode(true);
    let lastObj = bannerLi[bannerLi.length-1].cloneNode(true);

    banner.appendChild(cloneObj);
    banner.insertBefore(lastObj,bannerLi[0]);
    bannerLi=document.querySelectorAll(".banner>li");

    let count = bannerLi.length;
    //부모 사이즈를 자식 사이즈의 개수 만큼 키우기
    banner.style.width=liWidth*count+"px";
    //처음 시작하는 배너
    showBanner=1;
    moveX= -liWidth;
    banner.style.transform=`translateX(${moveX}px)`;

    function moveSlide(){
        // arrow 클릭
        moveX = -liWidth*showBanner;
        banner.style.transition="0.5s";
        banner.style.transform=`translateX(${moveX}px)`;
    }

    //오른쪽 버튼 클릭
    arrowRight.addEventListener("click",function(e){
        e.preventDefault;
        showBanner++;
        moveSlide();

        if(showBanner === count-1){
            setTimeout(function(){
                banner.style.transition="0s";
                showBanner=1;
                moveX = -liWidth;
                banner.style.transform=`translateX(${moveX}px)`;
            },500)
            showBanner=0;
        }
    })
    //왼쪽 버튼 클릭
    arrowLeft.addEventListener("click",function(e){
        e.preventDefault;
        showBanner--;
        moveSlide();

        if(showBanner === 0){
            setTimeout(function(){
                banner.style.transition="0s";
                showBanner = bannerLi.length-2;
                moveX=showBanner*liWidth;
                banner.style.transform=`translateX(${-moveX}px)`;
            },500)
        }
    })

    window.onresize = function(){
        winWidth = window.innerWidth;
        liWidth = winWidth;
        banner.style.width= liWidth * count +"px";
        banner.style.transform=`translateX(${-liWidth}px)`;
        showBanner=1;
    } 
    //ham버튼 클릭시 nav 표시
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