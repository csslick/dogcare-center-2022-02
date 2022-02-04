
// 메인이미지 변경 함수
function changeVisual(num) {
  // 버튼스타일 및 이미지 초기화
  $('.tab-group a').removeClass('on');
  $('.slider > img').removeClass('on');

  if(num == 1) {
    $('.slider > img').eq(num - 1).addClass('on');
    $('.tab-group a').eq(num - 1).addClass('on');
  } else if(num == 2) {
    $('.slider > img').eq(num - 1).addClass('on');
    $('.tab-group a').eq(num - 1).addClass('on');
  } else if(num == 3) {
    $('.slider > img').eq(num - 1).addClass('on');
    $('.tab-group a').eq(num - 1).addClass('on');
  }   
}
/* 
function changeVisual(num) {
  $('.tab-group a').removeClass('on');

  if(num == 1) {
    $('#main-banner img').attr('src', './images/main-banner1.jpg');
    $('.tab-group a').eq(num - 1).addClass('on');
  } else if(num == 2) {
    $('#main-banner img').attr('src', './images/main-banner2.jpg');
    $('.tab-group a').eq(num - 1).addClass('on');
  } else if(num == 3) {
    $('#main-banner img').attr('src', './images/main-banner3.jpg');
    $('.tab-group a').eq(num - 1).addClass('on');
  } 
} 
*/