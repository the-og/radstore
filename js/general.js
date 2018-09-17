// $(document).ready(function(){
//     $('#nav-icon1').click(function(){
//         $(this).toggleClass('open');
//     });
// });

// $('.hamburger').click(function () {
// 	$( "body" ).addClass( "showPop-Up" );
// 	$( ".hamburger" ).addClass( "hamburger-close" );
// });


// $('.hamburger-close').click(function () {
// 	// $('.pop-up').fadeOut(500);
// 	$( "body" ).removeClass( "showPop-Up" );
// });
$('#nav-icon1').click(function(){
        $(this).toggleClass('open');
    });

$("#nav-icon1").on("click", function () {
        $("body").toggleClass("showPop-Up");
        return false;
    });




// $(".hamburger").click(function () {
//     $("body").addClass('showPop-Up');
//     removeClass = false;
// });

// // when clicking the div : never remove the class
// // $("body").click(function() {
// //     removeClass = false;
// // });

// // when click event reaches "html" : remove class if needed, and reset flag
// $(".hamburger-close").click(function () {
//     if (removeClass) {
//         $("body").removeClass('showPop-Up');
//     }
//     removeClass = true;
// });


