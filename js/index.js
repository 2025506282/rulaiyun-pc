$(function(){
    $('.counter').countUp();
    $(".section1").addClass('show');
    var index = 0;
    var timer =  setInterval(function(){
        if(index<2){
            index++;
        } else {
            index = 0;
        }
        for(var i=0;i<$('.section4  .nav a').length;i++){
            if(i===index){
                $('.section4  .nav a').eq(i).addClass('active');
            } else {
                $('.section4  .nav a').eq(i).removeClass('active');
            }
        }
        $(".section4 .item-content").eq(index).removeClass('hide').siblings().addClass('hide');

    },4000);
    $(".section4 .nav a").click(function(){

        clearInterval(timer);
        var index = $(this).index(".section4 .nav a");
        $(this).parents('.section4  .nav').find("a").removeClass('active');
        $(this).addClass('active');
        $(".section4 .item-content").eq(index).removeClass('hide').siblings().addClass('hide');
    });
})
$(document).scroll( function() {
    var top = $(document).scrollTop();
    if(top===0){
        $(".header").removeClass('scrollTop');
        $(".logo").removeClass('logo1');
    } else {
        $(".logo").addClass('logo1');
        $(".header").addClass('scrollTop');
    }

})