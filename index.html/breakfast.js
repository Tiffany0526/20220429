$(document).ready(function () {
    $navbar = $('#navbar');
    $confirmCookieContent = $('#confirm-cookie-content');
  
    $(document)
      .on('click', '#confirm-cookie-button', function () {
        // $confirmCookieContent.addClass('d-none')
        $confirmCookieContent.fadeOut();
      })
      .on('scroll', function () {
        // if($navbar.offset().top > 40) {
        //     $navbar.addClass('shadow');
        // } else {
        //     $navbar.removeClass('shadow');
        // }
        $navbar.offset().top > 750
          ? $navbar.addClass('shadow')
          : $navbar.removeClass('shadow');
      });
  });
  

  $(function(){
    $('.sliderTwo').slick({
      rows: 2,
      infinite: false,
      slidesToShow: 1, //改為秀一張
      slidesToScroll: 1,
      dots: true, // 預設 false 指示点
  });
  });

//登入
  function show_hide() {
    var login = document.getElementById("container1");
    var signup = document.getElementById("container2");
    var copyright = document.getElementById("copyright");
  
    if (login.style.display === "none") {
        login.style.display = "block";  //login出現
        document.getElementById("username").value="";
        document.getElementById("password").value="";
        signup.style.display = "none";  //signup消失
        copyright.style.margin = "200px 0px 0px 0px";
    } else {
        login.style.display = "none";   //login消失
        signup.style.display = "block"; //signup出現
        signup.style.visibility="visible";
        copyright.style.margin = "200px 0px 0px 0px";
     
        document.getElementById("fullname").value="";
        document.getElementById("username2").value="";
        document.getElementById("password2").value="";
        document.getElementById("comfirm_password").value="";
    }

//登入
    $(function ()
{
        $('.change a').click(function ()
        {
            $('.signform').animate({height: 'toggle', opacity: 'toggle'}, 'slow');
        });
})

function start() {
document.getElementById('signform').style.display=""
}

function signclose() {
    document.getElementById('signform').style.display="none"
    document.getElementById('registerform').style.display="none"
}
function loading() {
    document.getElementById('registerloading').style.display=""
}
}