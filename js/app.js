/*global $,window */

$(function() {
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();
        
        
        
        /*feixed header*/
        checkScroll(scrollOffset);
$(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();
   checkScroll(scrollOffset);
    
});
function checkScroll(scrollOffset) {
   
    if (scrollOffset >= introH ) {
        header.addClass("fixed");
            }
    else {
                header.removeClass("fixed");
            }
}

$("[data-scroll]").on("click", function(event){
    event.preventDefault();
var
$this = $(this), 
blockid = $(this).data('scroll'),
 blockOffset = $(blockid).offset().top;
 $("#nav a").removeClass("active");

 $("html,body").animate({
     scrollTop: blockOffset
 },500)

})
/*burger*/
$("#nav_toggle").on("click", function(event){
    event.preventDefault();
   $(this).toggleClass("active")
    $("#nav").toggleClass("active")
})
/*Collapse */
$("[data-collapse]").on("click", function(event){
    event.preventDefault();
var $this = $(this), 
blockid = $(this).data('collapse');
$this.toggleClass("active");

})

/*Slider */
$("[data-slider]").slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1
    
});

});