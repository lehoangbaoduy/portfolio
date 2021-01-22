function showst1() {
    $(".first").prop("checked", true);
    $("#first-inner").css('color', '#08fdd8');
    $("#second-inner").css('color', 'white');
    $("#third-inner").css('color', 'white');
    $("#fourth-inner").css('color', 'white');
    $("#fifth-inner").css('color', 'white');
    $("#sixth-inner").css('color', 'white');

    $(".st1").addClass("active");
    $(".st2").removeClass("active");
    $(".st3").removeClass("active");
    $(".st4").removeClass("active");
    $(".st5").removeClass("active");
    $(".st6").removeClass("active");
}
function showst2() {
    $(".second").prop("checked", true);
    $("#second-inner").css('color', '#08fdd8');
    $("#first-inner").css('color', '#08fdd8');
    $("#third-inner").css('color', 'white');
    $("#fourth-inner").css('color', 'white');
    $("#fifth-inner").css('color', 'white');
    $("#sixth-inner").css('color', 'white');

    $(".st2").addClass("active");
    $(".st1").addClass("active");
    $(".st3").removeClass("active");
    $(".st4").removeClass("active");
    $(".st5").removeClass("active");
    $(".st6").removeClass("active");
}
function showst3() {
    $(".third").prop("checked", true);
    $("#third-inner").css('color', '#08fdd8');
    $("#second-inner").css('color', '#08fdd8');
    $("#first-inner").css('color', '#08fdd8');
    $("#fourth-inner").css('color', 'white');
    $("#fifth-inner").css('color', 'white');
    $("#sixth-inner").css('color', 'white');

    $(".st3").addClass("active");
    $(".st1").addClass("active");
    $(".st2").addClass("active");
    $(".st4").removeClass("active");
    $(".st5").removeClass("active");
    $(".st6").removeClass("active");
}
function showst4() {
    $(".fourth").prop("checked", true);
    $("#fourth-inner").css('color', '#08fdd8');
    $("#third-inner").css('color', '#08fdd8');
    $("#second-inner").css('color', '#08fdd8');
    $("#first-inner").css('color', '#08fdd8');
    $("#fifth-inner").css('color', 'white');
    $("#sixth-inner").css('color', 'white');

    $(".st4").addClass("active");
    $(".st1").addClass("active");
    $(".st2").addClass("active");
    $(".st3").addClass("active");
    $(".st5").removeClass("active");
    $(".st6").removeClass("active");
}
function showst5() {
    $(".fifth").prop("checked", true);
    $("#fifth-inner").css('color', '#08fdd8');
    $("#fourth-inner").css('color', '#08fdd8');
    $("#third-inner").css('color', '#08fdd8');
    $("#second-inner").css('color', '#08fdd8');
    $("#first-inner").css('color', '#08fdd8');
    $("#sixth-inner").css('color', 'white');

    $(".st5").addClass("active");
    $(".st1").addClass("active");
    $(".st2").addClass("active");
    $(".st3").addClass("active");
    $(".st4").addClass("active");
    $(".st6").removeClass("active");
}
function showst6() {
    $(".sixth").prop("checked", true);
    $("#fifth-inner").css('color', '#08fdd8');
    $("#fourth-inner").css('color', '#08fdd8');
    $("#third-inner").css('color', '#08fdd8');
    $("#second-inner").css('color', '#08fdd8');
    $("#first-inner").css('color', '#08fdd8');
    $("#sixth-inner").css('color', '#08fdd8');

    $(".st5").addClass("active");
    $(".st1").addClass("active");
    $(".st2").addClass("active");
    $(".st3").addClass("active");
    $(".st4").addClass("active");
    $(".st6").addClass("active");
}