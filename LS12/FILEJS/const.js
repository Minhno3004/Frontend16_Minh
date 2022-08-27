let ELEMENT_CB              = document.getElementById("playArea");
let ELEMENT_RESULT          = document.getElementById("notiArea")
let ELEMENT_PLAY_BUTTON     = document.getElementById("playButton")
let ELEMENT_REPLAY_BUTTON   = document.getElementById("replayButton")
let ELEMENT_NUMBER          = document.getElementsByClassName("number")
let ELEMENT_NOTICE          = document.getElementById("warning")
let ELEMENT_HIDDEN_HP       = document.getElementById("hp_play")
let ELEMENT_CORRECT_NOTICE  = document.getElementById("correctNotice")
let ELEMENT_HP_POINT       = document.getElementById("order")



let levelBox     = 40;
let n            = 1;
let numberSecret ='';
let result       = '';
let arrData      = [];
let order = 3;
