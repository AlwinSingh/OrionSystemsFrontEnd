$(document).ready(function () {
    var fed_lightbox_img = $(".fed-lightbox img");
    //$(.{class} {element})    descendant;
    var lightboxModal = $("#lightbox-modal");

    var total_img = fed_lightbox_img.length; // Stores the number of the images through array index. If there are 6 images, it will be 0 to 5.
    var img_index = 0; // Default index is always 0. Does not store the last img_index.

    fed_lightbox_img.css("cursor", "pointer");
    fed_lightbox_img.click(function () { // Upon clicking the class, gets the index of the image 'clicked' on, 'this' refers to the object. It will run the function showimg and show modal.
        img_index = parseInt(fed_lightbox_img.index(this));
        showImg();
        lightboxModal.modal("show");
    });

    $(".lightbox-prev").click(movePrev);
    $(".lightbox-next").click(moveNext);

    // For the next button
    function moveNext() {
        // If the current index is equal to the total image index, then reset the index to 0 and run the function showImg(), creating a loop.
        if (img_index == total_img - 1) {
            img_index = 0;
            showImg();
        } else {
            // Otherwise, if is not equal to total image index, increment the img_index and run the function showImg()
            img_index++;
            showImg();
        }
    }

    // For the previous button
    function movePrev() {
        // If the current index is more than 0, then decrease index and run the function showImg();
        if (img_index > 0) {
            img_index--;
            showImg();
        } else {
            // It uses a custom alertbox knows as 'sweet alert'. It's CDN is linked in the HTML. It displays an error message.
            swal({
                title: "Error!",
                text: "You cannot go to the previous image!",
                icon: "error",
                button: "Okay!",
            });
        }
    }

    function showImg() {
        var imgsrc = fed_lightbox_img.eq(img_index).attr("src"); /* Stores the 'src' to the var imgsrc */
        var imgalt = fed_lightbox_img.eq(img_index).attr("alt"); /* Stores the 'alt' to the var imgalt */
        var imgcounter = "(" + (img_index + 1) + " of " + total_img + ")"; /* as img_index is 0 to 5, add 1 to it to get the image index that is easier for the visitor(s) to understand */
        var img = `<img src="${imgsrc}" class="lightbox-img w-100">`; // Using backtick we can store the image and it's respective classes in var img
        lightboxModal.find(".lightbox-img-holder").html(img); // From the var img above, it loads the image into the class and displays it.
        lightboxModal.find(".lightbox-img-title").html(imgalt); // From the imgalt above, it loads the alt text into the class and displays it.
        lightboxModal.find(".lightbox-img-counter").html(imgcounter); // From the imgcounter above, it loads the index of the image (+1) and displays it out of the total index (+1)
        //  $(".lightbox-img").click(moveNext); // If the image is clicked, it goes to the next image, i disabled this as i do not want my website visitors to do that.
        //$(".lightbox-img").css("cursor", "pointer"); // Hovering on the image changes the cursor to a pointer, not needed as i do not have the click function on the image enabled
    }
});