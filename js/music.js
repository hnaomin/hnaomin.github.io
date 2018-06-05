/*This code loads the IFrame Player API code asynchronously.*/
var playlistId = "PLFU2CdHB2e4dwetcYyTzCMZeHLk1SXR7a";
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/*This function creates an <iframe> (and YouTube player) after the API code downloads.*/
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '200',
          width: '200',
            playerVars: {
                'autoplay': 0,
                'controls': 1,
                rel: 0,
                fs: 0
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

/*The API will call this function when the video player is ready.*/
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