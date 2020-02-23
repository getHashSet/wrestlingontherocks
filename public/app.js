$( document ).ready(function() {
    
    ////////////
    // Global Variables
    ////////////

    let cardOne = $('#card_1');
    let cardTwo = $('#card_2');
    let cardThree = $('#card_3');

    ///////////////
    // check for item in view port
    ///////////////
    
    function elementInViewport(el) {
        let top = el.offsetTop;
        let left = el.offsetLeft;
        let width = el.offsetWidth;
        let height = el.offsetHeight;
    
        while (el.offsetParent) {
          el = el.offsetParent;
          top += el.offsetTop;
          left += el.offsetLeft;
        }
    
        return (
          top < (window.pageYOffset + window.innerHeight) &&
          left < (window.pageXOffset + window.innerWidth) &&
          (top + height) > window.pageYOffset &&
          (left + width) > window.pageXOffset
        );
      }

      ///////////////
      // on scroll trigger
      ///////////////

      window.addEventListener('scroll', function (event) {

        ///////////////
        // parallax
        ///////////////

        let intViewportWidth = window.innerWidth;
        let yOffset = window.pageYOffset;
        let speed = 1.5;

        let heroImage = $('#heroImage');

        intViewportWidth >= 900 ?
        heroImage[0].style.backgroundPosition = "center " + ((yOffset) / speed) + "px" :
        heroImage[0].style.backgroundPosition = "center";

        // hide social menu until scroll
        let socialMenu = $('.social');
        yOffset > 300 ?
        socialMenu.addClass('show'):
        socialMenu.removeClass('show');

        if (elementInViewport(this.document.getElementById('card_1'))) {
            $(cardOne).addClass('card_show');
        } else {
            $(cardOne).removeClass('card_show');
        };

        if (elementInViewport(this.document.getElementById('card_2'))) {
            $(cardTwo).addClass('card_show');
        } else {
            $(cardTwo).removeClass('card_show');
        };

        if (elementInViewport(this.document.getElementById('card_3'))) {
            $(cardThree).addClass('card_show');
        } else {
            $(cardThree).removeClass('card_show');
        };

      })
    
  });