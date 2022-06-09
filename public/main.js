class MainMenu {
    constructor() {
        //this.btnArray = btns;
        this.lvlcfgObj = null;
    }
    startQuiz() {
        //this.btnsToPlay = this.btnArray;
        this.getLvlCfg();
    }
    sendScoreToServer(score) {
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "/api/score-set", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("score=" + score);
    }
    sendLogToServer(msg) {
        //console.log("CLIENT-side send log to server by GET");
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "/api/log/", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("msg=" + msg);
    }
    getLvlCfg(){
        axios.post('/api/lvlcfg',{
            lvlCfgReq:999
        })
        .then((response) => {
            this.lvlcfgObj = JSON.parse(response.data);
            console.log(this.lvlcfgObj);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }
    setLvlCfg(){
        Cookies.set('lvlcfgStr', JSON.stringify(this.lvlcfgObj));
        console.log(this.lvlcfgObj);
    }
}

// START from here!  Load document
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    // get Buttons
    //let btns = Array.from(document.getElementsByClassName('menu-btn'));

    let menu = new MainMenu();
    menu.startQuiz();

    document.getElementById('btn-replay').addEventListener('click', () => {
        Cookies.set('points', '0.0');
        Cookies.set('timeused','0');
        location.replace("/main");
    });

    document.getElementById('btn-exit').addEventListener('click', () => {
        location.replace("/");
    });
    
    document.getElementById('btn-qz1').addEventListener('click', () => {
        Cookies.set('points', '0.0');
        Cookies.set('timeused','0');
        Cookies.set('timeLimit','36000');
        Cookies.set('scoreTarget','1000');
        menu.setLvlCfg();
        location.replace("/L1");
    });

}