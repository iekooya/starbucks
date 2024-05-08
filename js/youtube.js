//1. The <iframe> (and video player) will replace this <div> tag.
// <div id="player"></div>

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', //최초 재생할 유튜브 영상의 ID
    playerVars: {
      'rel': 0,    //연관동영상 표시여부(0:표시안함)
      'controls': 0,    //플레이어 컨트롤러 표시여부(0:표시안함)
      'autoplay' : 1,   //자동재생 여부(1:자동재생 함, mute와 함께 설정)
      'mute' : 1,   //음소거여부(1:음소거 함)
      'loop' : 1,    //반복재생여부(1:반복재생 함)
      'playsinline' : 1,    //iOS환경에서 전체화면으로 재생하지 않게
      'playlist' : 'An6LvWQuj_8'   //재생할 영상 리스트
    }
  });
}


