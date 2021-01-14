alert ("Thanks you all for your support ! 😁  ")
$(function() {
    $("#item").click(function() {
        $("#submenu").slideToggle(500);
        $("#acamaro").click(function(){
        $(".camaro").show ();
        $(".mustang").hide ();
        $(".challenger").hide ();
        });
        $("#achallenger").click(function(){
        $(".challenger").show ();
        $(".camaro").hide ();
        $(".mustang").hide ();
        });
        $("#amustang").click(function(){
        $(".mustang").show ();
        $(".camaro").hide ();
        $(".challenger").hide ();
        });
    });
}); 
