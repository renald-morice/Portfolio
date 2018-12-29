<?php

header("Cache-Control: max-age=259200"); //30days (60sec * 60min * 24hours * 3days)
header("Strict-Transport-Security: 31536000");
header("Content-Security-Policy: default-source none; frame-ancestors none");
header("X-Frame-Options: DENY");
header("X-XSS-Protection: 1; mode=block");
header("X-Content-Type-Options: nosniff");

echo '
<!DOCTYPE html>
<html lang="fr">
    <head>
';

readfile("content/header.html");

echo '
    </head>
    <body>
        <div class="container-fluid">
';

readfile("content/loading-screen.html");
readfile("content/nav.html");
readfile("content/website-header.html");
readfile("content/section-about.html");
readfile("content/section-studies.html");
readfile("content/section-certifications.html");
readfile("content/section-experiences.html");
readfile("content/section-skills.html");
readfile("content/section-projects.html");
readfile("content/section-hobbies.html");
//readfile("content/section-videos.html");
readfile("content/footer.html");

echo '
        </div>
        <!-- JS  ======================================= -->
		<script src="js/jquery-3.1.1.min.js"></script>
        <script src="js/scrollreveal.min.js"></script>
        <script src="js/typed.min.js"></script>
        <script defer src="js/fontawesome-all.min.js"></script>
        <script src="js/portfolio.js"></script>
    </body>
</html>
';

?>