class AudioController {
  constructor() {
      this.flipSound = new Audio('Assets/Audio/flip.wav');
      this.flipSound.preload = "auto";
      //this.flipSound.load();

      this.matchSound = new Audio('Assets/Audio/match.wav');
      this.matchSound.preload = "auto";
      //this.matchSound.load();

      this.victorySound = new Audio('Assets/Audio/victory.wav');
      this.victorySound.preload = "auto";
      //this.victorySound.load();
  }

  flip() {
      this.flipSound.play();
  }
  match() {
      this.matchSound.play();
  }
  victory() {
      this.victorySound.play();
  }
}

// *** Start Point here!  Wait loading of HTML-Body 
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

function ready() {
  let lvlPassed = false;
  let lvlTime = 0;
  let timeLimit = parseInt(Cookies.get('timeLimit'));  //test time limit
  let scoreTarget = parseInt(Cookies.get('scoreTarget'));

  //get level-id 
  let idStr = window.location.pathname.split("/").pop();
  let idIdx = parseInt(idStr.slice(1))-1; //level index starts from 0, not 1
  console.log('idStr=' + idStr + ' , idIdx=' + idIdx);

  //lvlcfg from Cookie
  let lvlcfgStr = Cookies.get('lvlcfgStr');
  lvlcfgObj = JSON.parse(lvlcfgStr);
  //console.log(lvlcfgObj);
  
  let audioController = new AudioController();
  let timerDisp = document.getElementById('timerDisp');
  let pointsDisp = document.getElementById('pointsDisp');

  let timeUsed = parseInt(Cookies.get('timeused'));
  if(isNaN(timeUsed)) { //if cookie not-exist, create a new one
    timeUsed = 0;
    Cookies.set('timeused','0');
  };

  let points = parseFloat(Cookies.get('points'));
  if(isNaN(points)) { //if cookie not-exist, create a new one
    points = 0.0;
    Cookies.set('points', '0.0');
  };

  let timerMin = 0;
  let timerSec = 0;

  setInterval(() => {
    lvlTime++;
    timeUsed++;
    timerSec = timeUsed % 60;
    timerMin = Math.floor(timeUsed / 60);
    timerDisp.innerText = timerMin.toString()  + ':' +
                      timerSec.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    pointsDisp.innerText = points.toString();
    Cookies.set('timeused',timeUsed.toString());
    if(timeUsed >= timeLimit) {
      document.getElementById('msg-timesup').classList.add('visible');
    };
  }, 1000);

  // Button: Check Answer
  let btnCheck = document.getElementById("btnCheck");
  btnCheck.onclick = function(){

    // if (points >= scoreTarget) {
    //   document.getElementById('msg-pass').classList.add('visible');
    //   return;
    // };

    //collect all choices by scanning each "choice"
    let choices = document.getElementsByName("choice");
    let selected = '';
    for (var i=0; i<choices.length; i++) {
      if (choices[i].checked) {
        selected += choices[i].value;
      }
    };

    // Comparing CORRECT answer which hides in "name" of btnCheck
    if(selected == btnCheck.name) {
      // CORRECT
      if (lvlPassed) {
        // Answered Correcly before, no points added
        audioController.match();
        document.getElementById('msg-answer-correct-again').classList.add('visible');
        return;      
      };

      lvlPassed = true;
      points += 2.5;
      Cookies.set('points', points.toString());

      //display & play-sound of PASSED message
      audioController.match();
      document.getElementById('msg-answer-correct').classList.add('visible');

      //save time-used & times on passing this level
      lvlcfgObj.lvlTime[idIdx] = lvlTime;
      lvlcfgObj.lvlPass[idIdx]++;
      console.log(lvlcfgObj);
      Cookies.set('lvlcfgStr',JSON.stringify(lvlcfgObj));
    } else { 
      //WRONG
      lvlcfgObj.lvlFail[idIdx]++;
      console.log(lvlcfgObj);
      Cookies.set('lvlcfgStr',JSON.stringify(lvlcfgObj));

      // Show & Play sound
      audioController.flip();
      document.getElementById('msg-answer-wrong').classList.add('visible');
    };
  };

  // Button: Next-Level
  let btnNext = document.getElementById("btnNext");
  btnNext.onclick = function(){
    //window.location.replace('/'+ btnNext.name);
    console.log('next level path=' + lvlcfgObj.lvlNext[idIdx]);
    window.location.replace('/L'+ lvlcfgObj.lvlNext[idIdx]);
  };

  // Button on hidden Correct Answer Show-Up Message
  document.getElementById("btn-answer-correct").addEventListener('click', () => {
    //Hide this Message
    document.getElementById('msg-answer-correct').classList.remove('visible');
    //goto NEXT Level
    window.location.replace('/L'+ lvlcfgObj.lvlNext[idIdx]);
  });

  // Button on hidden Wrong Answer Show-Up Message
  document.getElementById("btn-answer-wrong").addEventListener('click', () => {
    document.getElementById('msg-answer-wrong').classList.remove('visible');
  });

  // Button on hidden Wrong Answer Show-Up Message
  document.getElementById("btn-answer-correct-again").addEventListener('click', () => {
    document.getElementById('msg-answer-correct-again').classList.remove('visible');
  });

  // Button - Home
  document.getElementById("btnHome").addEventListener('click', () => {
    window.location.replace('/main');
  });

}
