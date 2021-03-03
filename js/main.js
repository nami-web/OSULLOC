$(document).ready(function(){
    //내비게이션
    $('.menu_btn').click(function(){
        $('.navi').stop().animate({
            left:0
        },500);
    });
    //닫기 버튼
    $('.close').click(function(){
        $('.navi').stop().animate({
            left:'-100vw'
        },500);
    });
    
    
    //내비게이션
    //모든 서브메뉴 안보임
    $('.sub').hide();
    //첫번째 메뉴의 서브메뉴만 보임
    $('nav ul li:first-child .sub').show();
    //첫번째 메뉴에 active설정
    $('nav ul li:first>a').addClass('active');
    
    //주메뉴 클릭하면 각 메뉴에 해당하는 서브메뉴 나타남
    $('nav ul li a').click(function(){
        $('nav ul li a').removeClass('active');
        $(this).addClass('active');
        $('.sub').hide();
        $(this).next().show();
    });
    
    //swiper slide(메인)
     var swiper = new Swiper('.swiper-container', {
         autoplay:{
           delay:4000,  
         },
         loop:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
    
    //tab메뉴
    $('.t1').addClass('active');
    $('.tab_content>div').hide();
    $('.c1').show();
    $('.t1').click(function(e){
        e.preventDefault();
        // ↑탭 클릭시 위로 올라가지 않게 해줌 
      $('.t1').addClass('active');
        $('.t2').removeClass('active');
        $('.t3').removeClass('active');
        $('.c1').show();
        $('.c2').hide();
        $('.c3').hide();
    });
     $('.t2').click(function(e){
         e.preventDefault();
      $('.t2').addClass('active');
        $('.t1').removeClass('active');
        $('.t3').removeClass('active');
        $('.c2').show();
        $('.c1').hide();
        $('.c3').hide();
     });
     $('.t3').click(function(e){
         e.preventDefault();
       $('.t3').addClass('active');
         $('.t1').removeClass('active');
         $('.t2').removeClass('active');
         $('.c3').show();
         $('.c1').hide();
         $('.c2').hide();
    
     });
    
});