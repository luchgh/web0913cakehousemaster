$(document).ready(function(){
      $('.bxslider').bxSlider({
          auto: true,
          autoControls: true
      });
      $(window).scroll(function(){
        var window_scroll = $(window).scrollTop();
        if( window_scroll>50 ){
          $('#Header').css({
            'position':'fixed',
            'top':'0px',
            'left':'0px',
            'z-index':'10000'
          });
        }
      });
      $('#MenuIcon').click(function(){
          if($('#PrimaryNavigation').hasClass('switch')){
              //條件正確時執行
              //顯示
              $('#PrimaryNavigation').slideDown();
              $('#PrimaryNavigation').removeClass('switch');
            }else{
              //條件不正確執行
              //隱藏
              $('#PrimaryNavigation').slideUp();
              $('#PrimaryNavigation').addClass('switch');
            }
          });

          $(window).scroll(function(){
            var window_scroll = $(window).scrollTop();
            // $('p').text(window_scroll);
            if(window_scroll > 200){
                $('#PageTop').fadeIn();
            }else{
                $('#PageTop').fadeOut();
            }
          });
          $('#PageTop>a').click(function(){
            $('body,html').animate({
              scrollTop:0,
            },500);
          });

          $('#NewsBtn').click(function(){
            $('body').animate({
              scrollTop: $('#News').offset().top
            },500);
          });
          $('#ProductBtn').click(function(){
            $('body').animate({
              scrollTop: $('#Product').offset().top
            },500);
          });



      });
