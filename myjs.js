$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage', '7thPage', '8thPage', '9thPage', 'lastPage'], 
        lockAnchors: true, 
        navigation: false, 
        lazyLoading: true, 
        scrollBar: true, 
        keyboardScrolling: true, 
        responsiveWidth: 800, 
        responsiveSlides: true,
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
        $(this).next('.nav-dropdown').slideToggle();
    });
    
    $(document).click(function(e) {
        var target = e.target;
        if (!$(target).is('.toggle') && !$(target).parents().is('.toggle')) {
            $('.nav-dropdown').slideUp();
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


//playlist
/*This code loads the IFrame Player API code asynchronously.*/
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/*This function creates an <iframe> (and YouTube player) after the API code downloads.*/
var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('music', {
          height: '200',
          width: '200',
            playerVars: {
                autoplay: 0,
                controls: 1,
                rel: 0,
                fs: 0
            },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

/*The API will call this function when the video player is ready.*/
function onPlayerReady(event) {
    player.cuePlaylist({
        'listType': 'playlist',
        'list': 'PLFU2CdHB2e4dwetcYyTzCMZeHLk1SXR7a'
    })
}