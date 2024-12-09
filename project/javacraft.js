$(document).ready(function () {
    var javacraftLoaded = true; //variable to show that this file has loaded
    console.log("javacraft.js is loaded");
    
    // Check if javacraftLoaded variable is defined (meaning javacraft.js is loaded)
    if (typeof javacraftLoaded !== 'undefined' && javacraftLoaded === true) {
        console.log("javacraft.js is loaded successfully!");
    } else {
        console.error("javacraft.js is not loaded.");
    }
    
    // Check if jQuery is available
    if (typeof $ === 'undefined') {
        console.error("jQuery is not loaded!");
        return;
    }
    
    // Check if Cycle2 is available
    if (typeof $.fn.cycle === 'undefined') {
        console.error("Cycle2 plugin is not loaded!");
        return;
    }

    // Slideshow toggle for Cycle2
    let $slideshow = $(".cycle-slideshow");
    
    $slideshow.on("click", function() {
        if ($slideshow.is(".cycle-paused"))
            $slideshow.cycle("resume");                
        else
            $slideshow.cycle("pause");
    });
    
    // Datepicker initialization
    $("#datepicker").datepicker();
    
    // Add event listeners using jQuery
    $('#homeLink').click(function(event) {
        alert('Home page link clicked!');
    });

    $('#aboutLink').hover(function() {
        alert('Hovered over About Us link!');
    });

    // Click event on image
    $('#heroImage').click(function() {
        alert('Hero image clicked!');
    });

    // Social media links: adding hover effects
    $('#facebookLink').hover(function() {
        $(this).css('color', '#3b5998'); // Facebook blue
    }, function() {
        $(this).css('color', ''); // Reset color when hover ends
    });

    $('#twitterLink').hover(function() {
        $(this).css('color', '#1DA1F2'); // Twitter blue
    }, function() {
        $(this).css('color', ''); // Reset color when hover ends
    });

    $('#instagramLink').hover(function() {
        $(this).css('color', '#C13584'); // Instagram purple
    }, function() {
        $(this).css('color', ''); // Reset color when hover ends
    });

    // Plain JavaScript click event handler for logo
    $('#logo').click(function() {
        alert('Logo clicked!');
    });

    // Handle form submission
    $("#contactForm").on("submit", function (e) {
        e.preventDefault(); // Prevent form from submitting normally

        // Gather form data
        const formData = {
            name: $("#name").val(),
            email: $("#email").val(),
            date: $("#datepicker").val(),
            message: $("#message").val(),
        };

        // Send AJAX request to a placeholder external API
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts", // Replace with your external API endpoint
            type: "POST", // POST for sending data
            data: JSON.stringify(formData),
            contentType: "application/json",
            success: function (response) {
                // Update the page with the response
                $("#responseMessage").html(
                    `<p>Thank you, ${formData.name}. Your message was sent successfully!</p>
                     <p>Response ID: ${response.id}</p>`
                );
            },
            error: function () {
                // Handle errors
                $("#responseMessage").html(
                    "<p>There was an error sending your message. Please try again later.</p>"
                );
            },
            complete: function () {
        console.log("Request complete");
    }
        });
    });
}); // Closing the initial $(document).ready()
