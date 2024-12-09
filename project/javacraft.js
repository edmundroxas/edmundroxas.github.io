//let $slideshow = $(".cycle-slideshow");

$slideshow.on("click", function() {
   if ($slideshow.is(".cycle-paused"))
      $slideshow.cycle("resume");                
   else
      $slideshow.cycle("pause");
});
$(document).ready(function() {
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
        });

        // Plain JavaScript click event handler for logo
        document.getElementById('logo').addEventListener('click', function() {
            alert('Logo clicked!');
        });
