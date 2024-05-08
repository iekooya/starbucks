/*
window.addEventListener('scroll', function(){
  console.log('scroll');
});
*/

/* 상단 배지 */
/*
  lodash.js 
  _.throttle(function(){
    //실행코드
  }, 시간);

  gsap.js : 자바스크립트 애니메이션 적용 api
  gsap.to(요소, 지속시간 1s, 옵션{객체 데이터});
*/


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function() {
  //console.log(window.scrollY);
  if (window.scrollY > 500) {
    //500이상 배지 숨기기
    //badgeEl.style.display = 'none';
    gsap.to(badgeEl, .6, {
      display: 'none',
      opacity: 0
    });

    toTopEl.classList.add('show');

  } else {
    //500이상 배지 보이기
    //badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      display: 'block',
      opacity: 1
    });

    toTopEl.classList.remove('show')
  }
}, 300));

toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0
  })
});


// 비주얼 영역
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){    //fadeEl : 임의 지정한 요소의 이름 || index : 요소의 index 값
  gsap.to(fadeEl, 1, {        //각 fade-in 요소가 1초마다 실행 
    delay: (index + 1) * .7,  //각 요소마다 0.7초 지연된 뒤에 애니메이션 실행
    opacity: 1
  });
});

// 공지사항
// new : 자바스크립트 생성자
new Swiper('.notice .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});



//프로모션
const promotionEl = document.querySelector('.promotion-content');
const promotionToggleBtn = document.querySelector('.promotion .icons-btn');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion //isHidePromotion 의 반대값을 반환 (true면 false로 반환)
  if (isHidePromotion) {  
    // true면 숨김
    promotionEl.classList.add('show');
  } else {
    // false면 노출
    promotionEl.classList.remove('show');
  }
});



new Swiper('.promotion .swiper', {
  direction: 'horizontal',  //direction 기본값으로 생략가능
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 5000  //5초마다
  },
  loop: true,
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable:true    //사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-button-prev',
    nextEl: '.promotion .swiper-button-next'
  }
});

new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards-prev',
    nextEl: '.awards-next'
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


//selector : 요소 / delay : 지연시간 / size : 움직이는 범위
function floatingObject(selector, delay, size) {
  //gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //애니메이션 동작 시간
    { //옵션
      y: size,        //Y축 거리
      repeat: -1,         //자동반복
      yoyo: true,         //실행된 움직임의 처음으로 이동
      ease: Power1.InOut, //뒤로 갈수록 느려지는 움직임 추가
      delay: random(0, delay)      //지연 실행
    }
  );
}
floatingObject('.floating-imgs li:nth-child(1)', 1, 15);
floatingObject('.floating-imgs li:nth-child(2)', 0.5, 15);
floatingObject('.floating-imgs li:nth-child(3)', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic.Scene({
    triggerElement: spyEl,   //scrollMagic 감시하는 요소, 보여짐 여부를 감시할 요소를 지정
    triggerHook: .8   // 0 : 뷰포트 시작점 / 1: 뷰포트 종점, 뷰포트의 80% 지점에서 실행
  })
  .setClassToggle(spyEl, 'show')  //감시하는 요소에 .show를 toggle 함
  .addTo(new ScrollMagic.Controller());   //ScrollMagic을 실제로 동작하게 하는 메소드
});
