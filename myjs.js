jQuery(document).ready(function(){
    var fullPageCreated = false; 
    
    if (jQuery(window).width() > 1024){
        createfullPage();
    }
    
    function createfullPage(){
        if(fullPageCreated === false){
            fullPageCreated = true; 
            
            jQuery('#fullpage').fullpage({
                anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage', '7thPage', '8thPage', '9thPage', 'lastPage'], 
                lockAnchors: true, 
                navigation: false, 
                lazyLoading: true, 
                scrollBar: true, 
                keyboardScrolling: true, 
                scrollingSpeed: 500, 
                slidesNavigation: true, 
                slidesNavPosition: 'bottom', 
                controlArrows: false, 
                menu: '#menu', 
                
                onLeave: function(origin, destination, direction){
                    var leavingSection = this; 
                    
                    if(direction =='down'){
                        $('.header').slideUp('fast');
                    }
                    else if(direction == 'up'){
                        $('.header').slideDown('fast');
                    }
                }
            });
        }
    }
    
    jQuery(window).resize(function() {
        if (jQuery(window).width() > 1024) {
            createfullPage();
        } 
        else {
            if(fullPageCreated === true) {
                fullPageCreated = false; 
                jQuery.fn.fullpage.destroy('all');
            }
        }
    });
});

$(document).on('click', '#moveDown', function(){
    $.fn.fullpage.moveSectionDown();
});
$(document).on('click', '#moveRight', function(){
  $.fn.fullpage.moveSlideRight();
});
$(document).on('click', '#moveLeft', function(){
  $.fn.fullpage.moveSlideLeft();
});

/* drop down */
$(function() {
    $('.toggle').click(function(){
        $(this).next('.nav-dropdown').slideToggle('fast');
    });
    
    $(document).click(function(e) {
        var target = e.target;
        if (!$(target).is('.toggle') && !$(target).parents().is('.toggle')) {
            $('.nav-dropdown').slideUp('fast');
        }
    });
});

/* overlay */
$(function() {
    $('.overlay-trigger').click(function() {
		$('#fullpage, .overlay-wrap, .overlay').addClass('is-open');
	});
	$('.overlay-wrap').click(function() {
		$('#fullpage, .overlay-wrap, .overlay').removeClass('is-open');
	});
});

/* preview */
$(function(){
    $('#preview-timeless').hover(function(){
        $('#preview-timeless-show').show();
    },function(){
        $('#preview-timeless-show').hide();
    });
    $('#preview-lucy').hover(function(){
        $('#preview-lucy-show').show();
    },function(){
        $('#preview-lucy-show').hide();
    });
    $('#preview-toiles').hover(function(){
        $('#preview-toiles-show').show();
    },function(){
        $('#preview-toiles-show').hide();
    });
    $('#preview-belladura').hover(function(){
        $('#preview-belladura-show').show();
    },function(){
        $('#preview-belladura-show').hide();
    });
    $('#preview-suspiria').hover(function(){
        $('#preview-suspiria-show').show();
    },function(){
        $('#preview-suspiria-show').hide();
    });
    $('#preview-tibet').hover(function(){
        $('#preview-tibet-show').show();
    },function(){
        $('#preview-tibet-show').hide();
    });
    $('#preview-florals').hover(function(){
        $('#preview-florals-show').show();
    },function(){
        $('#preview-florals-show').hide();
    });
    $('#preview-bacon').hover(function(){
        $('#preview-bacon-show').show();
    },function(){
        $('#preview-bacon-show').hide();
    });
});


/* mobile */
function is_touch_device() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
}

var navs = document.querySelectorAll('.scroll'); 
if (!is_touch_device()) {
    for ( var i = 0, length = navs.length; i < length; i++ ) {
        var nav = navs[i]; 
        new Flickity( nav, {
            cellAlign: 'left', 
            freeScroll: true, 
            prevNextButtons: false, 
            pageDots: false, 
            contain: true
        });
    }
}

/*tabs*/
$('#mobile .tablink a').click(function() {
    $('#mobile .tablink a.active').removeClass('active');
    $(this).addClass('active');
    $(".tabContent.active").fadeOut('fast').removeClass('active');
        
    var tabNumber = $(this).attr('data-tab');
    var tabToOpen = ".tabContent[data-tab='" + tabNumber + "']"; 
    $(tabToOpen).fadeIn(800).addClass('active');
});
/*tab content bg*/
$(window).scroll(function() {
    var $window = $(window), 
        $body = $('.panelWrap'), 
        $panel = $('.panel'); 
    
    var scroll = $window.scrollTop() + ($window.height() / 2); 
    
    $panel.each(function () {
        var $this = $(this); 
        
        if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            $body.removeClass(function (index, css) {
                return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
            });
            $body.addClass('color-' + $(this).data('color'));
        }
    }); 
}).scroll();

/*back to top*/
$(window).scroll(function() {
    if ($(this).scrollTop() > 100 ) {
        $('.totop:hidden').stop(true, true).fadeIn();
    } else {
        $('.totop').stop(true, true).fadeOut();
    }
});
$(function(){$(".totopIcon").click(function(){$("html,body").animate({scrollTop:$(".mobileHeader").offset().top},"1000");return false})});


/* music */
var playlistId = "PLFU2CdHB2e4dwetcYyTzCMZeHLk1SXR7a";
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('music', {
          height: '200',
          width: '200',
            playerVars: {
                autoplay: 0,
                controls: 1,
                rel: 0,
                fs: 0,
                iv_load_policy: 3,
                loop: 1,
                modestbranding: 0
            },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

/*shuffle*/
var playlistArray;
    var playListArrayLength;
    var maxNumber;

    var oldNumber = 0;
    var NewNumber = 0;

    function newRandomNumber() {
        oldNumber = NewNumber;
        NewNumber = Math.floor(Math.random() * maxNumber);
        if (NewNumber == oldNumber) {
            newRandomNumber();
        } else {
            return NewNumber;
        }
    }

function onPlayerReady(event) {
    player.cuePlaylist({
        'listType': 'playlist',
        'list': playlistId
    })
}

var firstLoad = true;
function onPlayerStateChange(event) {
    console.log(event.data);
    if (event.data == YT.PlayerState.ENDED) {
        player.playVideoAt(newRandomNumber());   
    } else {
        if (firstLoad && event.data == YT.PlayerState.PLAYING) {
            firstLoad = false;
            playlistArray = player.getPlaylist();
            playListArrayLength = playlistArray.length;
            maxNumber = playListArrayLength;
            NewNumber = newRandomNumber();
            player.playVideoAt(newRandomNumber());
        }
    }
}