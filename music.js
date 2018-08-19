var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {
        height: '200',
        width: '200',
        playerVars: {
            'autoplay': 0,
            'controls': 1,
            'fs': 0,
            'rel': 0,
            'iv_load_policy': 3,
            'cc_load_policy': 0,
            color: 'white',
            'disablekb': 1,
            'loop': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

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
        'list': 'PLFU2CdHB2e4dwetcYyTzCMZeHLk1SXR7a'
    });
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