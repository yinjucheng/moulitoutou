/* ----------------------------------- */
/* ------ Custom ------ */
/* ----------------------------------- */
// Navbar
let isOpened = false;
const $body = document.body;
const $navbar = document.querySelector('.l-navbar');
const $burger = document.querySelector('.o-burger');

function toggleNavbar() {
  if (!isOpened) {
    $body.style.overflow = 'hidden';
    $navbar.classList.add('is-opened');
    $burger.classList.add('is-opened');
    isOpened = true;
  } else {
    $body.style.overflow = 'hidden';
    $navbar.classList.remove('is-opened');
    $burger.classList.remove('is-opened');
    isOpened = false;
  }
}

// $burger.addEventListener('click', function() {
//   toggleNavbar();
// });

/* ----------------------------------- */
/* ------ Plugins ------ */
/* ----------------------------------- */
// Lenis
const lenis = new Lenis()
// lenis.on('scroll', (e) => {
//   console.log(e)
// })
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)


const $lazyImgs = document.querySelectorAll('img.js-lazy');
$lazyImgs.forEach(function(item) {
  // https://png-pixel.com/
  item.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAEsCAQAAABHvi1JAAACNUlEQVR42u3TMQEAAAgDINc/mLE0gZ8ndCA9BRwiCAgCgoAgIAgIAoKAICAICAIIAoKAICAICAKCgCAgCAgCggCCgCAgCAgCgoAgIAgIAoIAgoAgIAgIAoKAICAICAKCgCCAICAICAKCgCAgCAgCgoAggCAgCAgCgoAgIAgIAoKAICAIIAgIAoKAICAICAKCgCAgCCAICAKCgCAgCAgCgoAgIAgIAggCgoAgIAgIAoKAICAICAKCCAKCgCAgCAgCgoAgIAgIAoIAgoAgIAgIAoKAICAICAKCgCCAICAICAKCgCAgCAgCgoAggCAgCAgCgoAgIAgIAoKAICAIIAgIAoKAICAICAKCgCAgCCAICAKCgCAgCAgCgoAgIAgIAggCgoAgIAgIAoKAICAICAIIAoKAICAICAKCgCAgCAgCggCCgCAgCAgCgoAgIAgIAoKAIIKAICAICAKCgCAgCAgCgoAggCAgCAgCgoAgIAgIAoKAICAIIAgIAoKAICAICAKCgCAgCCAICAKCgCAgCAgCgoAgIAgIAggCgoAgIAgIAoKAICAICAIIAoKAICAICAKCgCAgCAgCggCCgCAgCAgCgoAgIAgIAoIAgoAgIAgIAoKAICAICAKCgCCAICAICAKCgCAgCAgCgoAgIIggIAgIAoKAICAICAKCgCAgCCAICAKCgCAgCAgCgoAgIAgIAggCgoAgIAgIAoKAICAICAIIAoKAICAICAKCgCAgCAgCggCCgCDwZwF2ixVTTYF0mAAAAABJRU5ErkJggg=='
});
// https://github.com/verlok/vanilla-lazyload
const lazyLoad = new LazyLoad({
  elements_selector: '.js-lazy',
  // 設定距離可視區(視窗)底部多遠觸發
  threshold: 500,
  callback_loaded: function() {
    AOS.refresh();
  }
});




/* ----------------------------------- */
/* ------ counter ------ */
/* ----------------------------------- */
console.clear();

// const $btnReduce = document.querySelectorAll('.l-product__btn.--reduce');
// const $btnIncrease  = document.querySelectorAll('.l-product__btn.--increase');
// const $number  = document.querySelectorAll('.l-product__number');
// const $msg = document.querySelectorAll('.l-product__msg');


// // 資料庫
// let num = 0;
// let stocks = 10


// function check() {
  

//   if (num < 0) {
//     num = 0
//     $number.textContent = num;
//     $msg.classList.add('is-active');
//     $msg.textContent = '數量不得少於零！！';
//     $msg.style.setProperty('--msg-bg', 'var(--color-danger)');
//   } else if (num < 5) {
//     $msg.classList.remove('is-active');
//   } else if(num < stocks - 2) {
//     $msg.classList.add('is-active');
//     $msg.textContent = '庫存尚充足';
//     // 自訂義 css 變數
//     $msg.style.setProperty('--msg-bg', 'var(--color-light)');
//   } else if (num < stocks) {
//     $msg.textContent = '即將達庫存上限';
//     $msg.style.setProperty('--msg-bg', 'var(--color-warning)');
//   } else {
//     $msg.textContent = '已達庫存上限';
//     $msg.style.setProperty('--msg-bg', 'var(--color-danger)');
//   } 
// }

// function update(val) {
//   num = num + val;
//   console.log(num);
//   $number.textContent = num;
//   check()
// }

// $btnIncrease.addEventListener('click', function() {
//   // return 不繼續執行下去
//   if (num >= stocks) return;
//   update(1)
  
// });
// $btnReduce.addEventListener('click', function() {
//   if (num < 0) return;
//   update(-1)
// });




const card_name = "l-product__card";
const add_name = "--increase";
const del_name = "--reduce";
const msg_name = "l-product__msg";
const num_name = "l-product__number";

  function button_click() {
  const $this = $(this);

  const $card = $this.closest(`.${card_name}`);//父元素
  if($card.length == 0){
      console.log("card is undefined");
      return false;
  }

  const $add = $card.find(`.${add_name}`);//增加按鈕
  const $del = $card.find(`.${del_name}`);//減少按鈕
  const $msg = $card.find(`.${msg_name}`);//訊息
  const $num = $card.find(`.${num_name}`);//數量

  const max_num = 5;//最大數量
  const min_num = 0;//最少數量

  // //當前數量
  let num = Number($num.text());
  // //數字是input用這個
  // let num = Number($num.val());

  //數字錯誤 將數字歸0
  if(isNaN(num)){
      num = 0;
  }

  //根據按鈕class增加或減少數量
  if($this.hasClass(`${add_name}`)){
      num = num + 1;
  } else {
      num = num - 1;
  }

  console.log($this.attr('class'));

  //檢查庫存
  if(num > max_num){
      $msg.text("已達庫存上限").addClass('is-active');
  } else if(num == max_num){
      $msg.text("已達庫存上限").addClass('is-active').css('color', '#FF7D7D');
      $num.text(num);
    } else if(num > 3){
      $msg.text('即將售罄').addClass('is-active').css('color', '#F5AB7A');
      $num.text(num);

      //$msg[0].style.add('--msg-bg','var(--color-danger)')
    } else if(num < min_num){
      $msg.text(`數量不能小於${min_num}`).addClass('is-active').css('color', '#FF7D7D');
  } else {
      $msg.text("").removeClass('is-active');
      $num.text(num);
      //數字是input用這個
      // $num.val(num);
  }
  }

  $(`.${add_name}`).on('click', button_click);
  $(`.${del_name}`).on('click', button_click);

  console.log($(`.${add_name}`).length);

