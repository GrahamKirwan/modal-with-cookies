// Run on page load
$(window).on('load', function() {
    // Run after 3 seconds
    setTimeout(function(){ 
        // If the cookie 'visited' doesn't have a value of 'true'
        if (getCookie('visited') !== 'true') {
            // Show the bootsrap modal 
            $('#myModal').modal('show');
            // Set a cookie 'visited' to true for 2 hours
            setCookie('visited','true', 0.083);
        } 
    }, 3000);
    
});

        
// Set cookie function
function setCookie(name,value,days) {
    var expires = "";

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }

    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// Get cookie function
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}