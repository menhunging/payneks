var hashLoad

if (window.location.hash) {
    hashLoad = window.location.hash
}

$(document).ready(function () {

    if ($(".menuBurger").length) {
        $(".menuBurger").on("click", function () {
            if ($("header").length > 0) {
                $(".menuBurger").toggleClass("open")
                $(".menuLineMobile").toggleClass("open")
                $(".nav").toggleClass("open").slideToggle(200)
            }
            if ($(".cabWrapper").length > 0) {
                $(".menuBurger").toggleClass("open")
                $(".menuCab").toggleClass("open").slideToggle(200)
            }
        })
    }

    if ($(".loadFile").length) {
        $('input:file').map(function () {
            $(this).change(
                function (e) {
                    if (e.target.files.length) {
                        $(this).parents(".loadFile").addClass("active").find(".txt").text(e.target.files[0].name)
                    }
                });
        })
    }

    if ($(".linkAnc").length) {
        $('.linkAnc').click(function (event) {
            var target = $(this.hash)
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        });
    }

    if ($(".selectricBl").length) {
        $(".selectricBl").map(function () {
            $(this).selectric();
        })
        $('.selectricPic').selectric({
            arrowButtonMarkup: '<span class="iconArrow"></span>',
            labelBuilder: function (itemData, element, index) {
                return $(itemData.element[0]).attr('placeholder') ?
                    '<span class="placeholder">' + itemData.text + '</span>' :
                    $(itemData.element[0]).attr('data-image') !== undefined ?
                        '<span class="payIcon" style="background-image: url(' + $(itemData.element[0]).attr('data-image') + ');"></span>' + itemData.text :
                        itemData.text;
            },
            optionsItemBuilder: function (itemData) {
                return $(itemData.element[0]).attr('data-image') !== undefined ?
                    '<span class="payIcon" style="background-image: url(' + $(itemData.element[0]).attr('data-image') + ');"></span>' + itemData.text :
                    itemData.text;
            }
        })
    }

    if ($(".tabs").length) {
        if ($(window).width() >= 1024) {
            initTabs()
        }
    } 

    if ($(".cryptoList").length) {
        const cryptoList = $(".cryptoList").children()
        for (let i = 0; i < cryptoList.length; i += 2) {
            cryptoList.slice(i, i + 2).wrapAll("<div class='cryptoItem'></div>");
        }
        cryptoListSliderInit()
        if ($(window).width() >= 1440) {
            $('.cryptoList').slick('unslick');
        }
    }

    if ($(".faqTabs").length) {
        initTabs()
    }

    if ($("#progTur").length) {
        $("#progTur").ionRangeSlider({
            min: 0,
            max: 1000000,
            from: 500000,
            onChange: function (data) {
                $(data.input).parents(".line").find(".progVal").val(data.from)
            },
            onStart: function (data) {
                $(data.input).parents(".line").find(".progVal").val(data.from)
            }
        });
        let elSlider = $("#progTur");
        let slider = elSlider.data("ionRangeSlider");
        elSlider.parents(".line").find(".progVal").on("keypress keyup", function (event) {
            let percent = $(this).val();
            slider.update({
                from: percent
            })
        })

    }

    if ($("#progClient").length) {
        $("#progClient").ionRangeSlider({
            min: 0,
            max: 15,
            from: 7,
            onChange: function (data) {
                $(data.input).parents(".line").find(".progVal").val(data.from)
            },
            onStart: function (data) {
                $(data.input).parents(".line").find(".progVal").val(data.from)
            }
        });
        let elSlider = $("#progClient");
        let slider = elSlider.data("ionRangeSlider");
        elSlider.parents(".line").find(".progVal").on("keypress keyup", function (event) {
            let percent = $(this).val();
            slider.update({
                from: percent
            })
        })
    }

    if ($(".tarifsTable").length) {
        var timeOut = false;
        $(".tarifsTable .tarifLineUp").click(function () {
            if (timeOut) return false;
            $(this).toggleClass("open").parents('.tarifLine').toggleClass("open").find(".tarifLineDown").slideToggle();
            timeOut = true;
            setTimeout(function () {
                timeOut = false;
            }, 500);
        })
    }

    if ($(".codeBtn").length) {
        var timeOut = false;
        $(".codeBtn").click(function (e) {
            e.preventDefault()
            if (timeOut) return false;
            $(this).toggleClass("open").parents('.item').toggleClass("open").find(".codeBlock").slideToggle();
            $(this).text() === "Показать код" ? $(this).text("Свернуть код") : $(this).text("Показать код")
            timeOut = true;
            setTimeout(function () {
                timeOut = false;
            }, 500);
        })
    }

    if ($(".listBalance").length) {
        balanceSliderInit()
        if ($(window).width() < 768) {
            $('.listBalance').slick('unslick');
        }
        $(".youBalance .circle").click(function (e) {
            var timeOut = false;
            e.preventDefault()
            if (timeOut) return false;
            $(this).toggleClass("open").parents(".youBalance").find(".listBalance").slideToggle();
            timeOut = true;
            setTimeout(function () {
                timeOut = false;
            }, 500);
        })
    }

    if ($(".yourStoresList").length) {
        yourStoresListInit()
        if ($(window).width() >= 640) {
            $('.yourStoresList').slick('unslick');
        }
    }

    if ($(".cabTable").length) {
        cabTableSliderInit()
        if ($(window).width() > 1439) {
            $('.cabTable .cabTbody').slick('unslick');
        }
    }

    if ($(".copyRef").length) {
        new ClipboardJS('.copyRef');

        let messageShow = function (e) {
            let message = e.siblings('.copyMessage')
            message.stop().fadeIn(200)

            setTimeout(function () {
                message.stop().fadeOut(200)
            }, 2000)
        }

        $(".copyRef").map(function () {

            $(this).on('click', function (e) {
                e.preventDefault()

                if ($(this).attr('data-clipboard-text') !== undefined) {
                    messageShow($(this))
                }

                if ($(this).attr('data-clipboard-target') !== undefined) {
                    messageShow($(this))
                }

            })
        })
    }

    if ($(".changeNameWallet").length) {
        $(".changeNameWallet .change").map(function () {
            $(this).click(() => {
                $(this).parents(".changeNameWallet").addClass("change")
                $(this).parents(".changeNameWallet").find(".inpWallet").attr("readonly", false)

            })
        })
        $(".changeNameWallet .save").map(function () {
            $(this).click(() => {
                $(this).parents(".changeNameWallet").removeClass("change")
                $(this).parents(".changeNameWallet").find(".inpWallet").attr("readonly", true)
            })
        })
    }

    if ($(".walletsList").length) {
        var timeOut = false;
        $(".walletsInfo .circle").click(function (e) {
            e.preventDefault()
            if (timeOut) return false;
            $(this).toggleClass("open").parents('.walletsItem').toggleClass("open").find(".walletsText").slideToggle();
            timeOut = true;
            setTimeout(function () {
                timeOut = false;
            }, 500);
        })
    }

    if ($(".listCurrenceis").length) {
        var timeOut = false;
        $(".listCurrenceis .circle").click(function (e) {
            e.preventDefault()
            if (timeOut) return false;
            $(this).toggleClass("open").parents('.itemCurrenceis').toggleClass("open").find(".descCurrenceis").slideToggle();
            timeOut = true;
            setTimeout(function () {
                timeOut = false;
            }, 500);
        })
    }

    if ($(".icViewPass ").length) {
        $(".icViewPass ").click(function () {
            if ($(this).hasClass("click")) {
                $(this).removeClass("click").parents(".inputLine").find("input").prop('type', 'password');
            } else {
                $(this).addClass("click").parents(".inputLine").find("input").prop('type', 'text');
            }
        })
    }

    if ($(".modalsScroll").length) {
        openMod();
    }

    if ($(".mobilePanelTab").length) {
        var timeOut = false;
        $(".mobilePanelTab").click(function (e) {
            if (timeOut) return false;
            $(this).toggleClass("open").parents('.tabsBody').toggleClass("open").find(".mobileTab").slideToggle();
            if ($(".mobilePanelTab").parents(".tabs").find(".cabTable").length) {
                $('.cabTable .cabTbody').slick('refresh');
            }
            $('.cabTable .cabTbody').slick('refresh');
            timeOut = true;
            setTimeout(function () {
                timeOut = false;
            }, 500);
        })
    }

    if ($(".filterBl").length > 0) {
        var dateFormat = "dd.mm.yy",
            from = $("#from")
                .datepicker({
                    defaultDate: "+1w",
                    changeMonth: true,
                    numberOfMonths: 1,
                    dateFormat: "dd.mm.yy"
                })
                .on("change", function () {
                    to.datepicker("option", "minDate", getDate(this));
                }),
            to = $("#to").datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 1,
                dateFormat: "dd.mm.yy"
            })
                .on("change", function () {
                    from.datepicker("option", "maxDate", getDate(this));
                });

        function getDate(element) {
            var date;
            try {
                date = $.datepicker.parseDate(dateFormat, element.value);
            } catch (error) {
                date = null;
            }
            return date;
        }
    }

    if ($(".wow").length > 0) {
        new WOW().init();
    }
})

$(window).resize(function () {
    if ($(".whyTabs").length > 0) {
        if ($(window).width() < 1024) {
            destroyTabs()
        } else {
            initTabs()
        }
    }

    if ($(".listBalance").length > 0) {
        if ($(window).width() < 768) {
            $('.listBalance').slick('unslick');
        } else {
            $('.listBalance').slick('refresh');
        }
    }

    if ($(".yourStoresList").length > 0) {
        if ($(window).width() >= 640) {
            $('.yourStoresList').slick('unslick');
        } else {
            $('.yourStoresList').slick('refresh');
        }
    }

    if ($(".cabTable").length > 0) {
        if ($(window).width() > 1439) {
            $('.cabTable .cabTbody').slick('unslick');
        } else {
            $('.cabTable .cabTbody').slick('refresh');
        }
    }

    if ($(".cryptoList").length > 0) {
        if ($(window).width() < 1440) {
            $('.cryptoList').slick('refresh');
        } else {
            $('.cryptoList').slick('unslick');
        }
    }
});

function initTabs() {
    $(".tabs").map(function () {
        $(this).tabs({
            active: $(this).hasClass("shopTabs") ? activeTabShopTabs() : 0,
            show: 300,
            hide: 300,
            beforeActivate: function(event, ui) {
               if ( $(this).hasClass("shopTabs") ){
                    var hash = ui.newTab.children("li a").attr("href");
                    window.location.hash = hash;
                }             
           }
        });

        $(".tabs").on("tabsactivate", function () {
            if ($(".tabs").find(".cabTable").length) {
                if ($(window).width() < 1440) {
                    $('.cabTable .cabTbody').slick('refresh');
                }
            }
        });

    })
}

function activeTabShopTabs(){
    let links = $(".shopTabs .listLinks li a")
    links.map(function(){
       if ( $(this).attr("href") == hashLoad){
            return $(this).parents("li").index()
       }
    })
}

function destroyTabs() {
    $(".ui-tabs").map(function () {
        $(this).tabs("destroy");
    })
}
function balanceSliderInit() {
    $('.listBalance').slick({
        infinite: false,
        slidesToShow: 7,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: "unslick",
            }
        ]
    });
}
function yourStoresListInit() {
    $('.yourStoresList').slick({
        infinite: false,
        slidesToShow: 1,
        dots: true,
    });
}
function cabTableSliderInit() {
    $('.cabTable .cabTbody').slick({
        infinite: false,
        slidesToShow: 2,
        dots: true,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
}
function cryptoListSliderInit() {
    $('.cryptoList').slick({
        infinite: false,
        slidesToShow: 6,
        dots: true,
        dots: true,
        responsive: [
            {
                breakpoint: 3000,
                settings: "unslick"
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
}

