
    $('#contact-form').submit(function(e){
        var fname = $('#inputFirstName');
        var lname = $('#inputLastName');
        var email = $('#inputEmail');
        var mobile = $('#inputMobile');
        var message = $('#inputMessage');
    
        if (!fname.val() || !lname.val() || !email.val() || !mobile.val() || !message.val()){
            alertify.error("Please check your entries.");
        } else {
            $.ajax({
                url: "https://formspree.io/lehoangbaoduy2000@gmail.com",
                method: "POST",
                data: $(this).serialize(),
                dataType: "json"
            });
    
            e.preventDefault();        
            $(this).get(0).reset();
            alertify.success("Thank you! I will contact you soon.");
        }
    })

