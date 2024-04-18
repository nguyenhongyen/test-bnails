;(function ($) {
    'use strict';


    const handleSelectInput = function () {

        let selectOption = $('.form-group__select');

        if (selectOption.length) {
            selectOption.each(function () {
                let elmSelect = $(this);
                let inputSelect = elmSelect.find('.input-select');
                let option = elmSelect.find('.select-group__absolute');

                inputSelect.click(function () {
                    elmSelect.addClass('show-select');
                })

                if (option.length) {
                    let optionElm = option.find('li');

                    optionElm.click(function (e) {
                        let elm = $(this);
                        let getTitleOption = elm.data('title');

                        optionElm.removeClass('active');
                        elm.addClass('active');

                        let a = elmSelect.find('.input-select');
                        a.val(getTitleOption);
                        elmSelect.removeClass('show-select');
                    })
                }

            })
        }
    }

    const handleSliderCalendar = function () {
        if($('#swiper-calendar .swiper').length){
            new Swiper('#swiper-calendar .swiper', {
                slidesPerView: 2.1,
                spaceBetween: 10,
                loop:true,
                speed: 1000,
                autoplay: {
                    delay: 6000,
                    disableOnInteraction: true,
                },
                navigation: {
                    nextEl: '#swiper-calendar .button-next',
                    prevEl: '#swiper-calendar .button-prev',
                },
                breakpoints: {
                    425: {
                        slidesPerView: 2.8
                    },
                    576: {
                        slidesPerView: 3
                    },
                    768: {
                        slidesPerView: 3.5
                    },
                    992: {
                        slidesPerView: 4
                    },
                    1024: {
                        slidesPerView: 5
                    },
                    1440: {
                        slidesPerView: 5
                    },

                }
            });
        }
    }

    const handleSliderClock = function () {
        if($('#swiper-clock .swiper').length){
            new Swiper('#swiper-clock .swiper', {
                slidesPerView: 2.1,
                spaceBetween: 10,
                loop:true,
                speed: 1000,
                autoplay: {
                    delay: 6000,
                    disableOnInteraction: true,
                },
                navigation: {
                    nextEl: '#swiper-clock .button-next',
                    prevEl: '#swiper-clock .button-prev',
                },
                breakpoints: {
                    425: {
                        slidesPerView: 2.3
                    },
                    576: {
                        slidesPerView: 3
                    },
                    768: {
                        slidesPerView: 3.5
                    },
                    992: {
                        slidesPerView: 4
                    },
                    1024: {
                        slidesPerView: 5
                    },
                    1440: {
                        slidesPerView: 5
                    },

                }
            });
        }
    }


    // =============================form checkin=========================

    let handleLoading = function () {
        $('.loading').show();
        setTimeout(function () {
            $('.loading').hide();
        }, 2000);

    }

    const handleCheckNumberPhone = function () {

        let sectionCheckin = $('#section-checkin');
        let sectionPhone = $('#section-phone');
        let sectionLoad = $('#section-load');
        let sectionCheckList = $('#section-checklist');
        let sectionBooking = $('#form-booking');

        let btnCheckIn = $('#btn-checkin');
        if (btnCheckIn.length) {
            btnCheckIn.click(function (e) {
                e.preventDefault();
                handleLoading();

                sectionCheckin.addClass('hide');
                sectionPhone.removeClass('hide');

                $('#section-phone .btn-previous').click(function(){
                    sectionCheckin.removeClass('hide');
                    sectionPhone.addClass('hide');
                });

            })
        }

        let btnSubmitPhone = $('#submit-phone');
        if (btnSubmitPhone.length) {
            btnSubmitPhone.click(function (e) {
                e.preventDefault();
                let elm = $(this);

                let inputNumber = $('#number-input').val();
                if ((inputNumber !== "") && $.isNumeric(inputNumber)) {
                    handleLoading();
                    sectionLoad.removeClass('hide');
                    sectionPhone.addClass('hide');

                    $('#section-load .btn-previous').click(function(){
                        sectionLoad.addClass('hide');
                        sectionPhone.removeClass('hide');
                    });
                } else if ((inputNumber !== "") && !$.isNumeric(inputNumber)) {
                    handleLoading();
                    sectionCheckList.removeClass('hide');
                    sectionPhone.addClass('hide');
                    $('.page-checkin').css({"height": "100% !important","overflow": "visible"});

                    $('#section-checklist .btn-previous').click(function(){
                        sectionCheckList.addClass('hide');
                        sectionPhone.removeClass('hide');
                    });

                } else {
                    $('#popup-checkphone').modal('show');
                }


            })
        }


        let formCheckChecklist = $('#frm-checkbox');
        if(formCheckChecklist.length){
            formCheckChecklist.submit(function(event) {
                event.preventDefault();

                let isChecked = false;
                $('#frm-checkbox input[type="checkbox"]').each(function() {
                    if ($(this).prop('checked')) {
                        isChecked = true;
                        return false;
                    }
                });

                if (!isChecked) {
                    $('#popup-checklist').modal('show');
                } else {
                    handleLoading();
                    sectionCheckList.addClass('hide');
                    sectionBooking.removeClass('hide');
                    $('.page-checkin').css({"height": "100% !important","overflow": "visible"});

                }
            });
        }

        let btnSubmitConfirm = $('#submit-confirm');
        if (btnSubmitConfirm.length) {
            btnSubmitConfirm.click(function (e) {
                e.preventDefault();
                handleLoading();

                sectionLoad.addClass('hide');
                sectionBooking.removeClass('hide');
                $('.page-checkin').css({"height": "100% !important","overflow": "visible"});

            })
        }




    }

    $(function () {
        handleSelectInput();
        handleSliderCalendar();
        handleSliderClock();
        handleCheckNumberPhone();
    });

})(jQuery);