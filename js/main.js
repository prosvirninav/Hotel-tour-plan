$(document).ready(function () {
  var hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
  });

  var reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-baottom--visible");
  });

  var modalButton = $('[data-toggle="modal"]');
  var closeModalButton = $('.close');
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  //Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Longer than 2 symbol"
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
        tel: {
          required: "Phone is required",
          minlength: "Longer than 7 symbol"
        },
      },
    });
  });
  AOS.init();

  $(".map-image").hover(function () {
    $(".map").html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15779.35919615496!2d98.22963715616208!3d8.611374924883686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3050ee61a0a98b25%3A0xa37a5d4fd305d46c!2sThe%20Briza%20Beach%20Resort%2C%20Khao%20Lak!5e0!3m2!1sru!2sru!4v1596839796358!5m2!1sru!2sru" class="map-frame" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>')
  });

})