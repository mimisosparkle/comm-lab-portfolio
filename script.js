//waits for HTML to be fully ready
document.addEventListener("DOMContentLoaded", function() {

    let closedBook = document.getElementById("about-pre-click");
    let openedBook = document.getElementById("about-post-click");
    let closeButton = document.getElementById("close-book");

    //function for when user clicks the CLOSED book
    closedBook.onclick = function() {
        // hides closed book image
        closedBook.classList.add("hidden");

        //shows opened book image
        openedBook.classList.remove("hidden");

        //shows the close button
        closeButton.classList.remove("hidden");
    };

    //function for when user clicks the CLOSE button
    closeButton.onclick = function() {
        //hides opened book image
        openedBook.classList.add("hidden");

        //hides close button
        closeButton.classList.add("hidden");

        //shows closed book image again (so it comes back after clicking the button)
        closedBook.classList.remove("hidden");
    };

});