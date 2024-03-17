// canvas
const c = document.getElementById("canvas");
const ctx = c.getContext("2d");

const menu = document.getElementById("menu");

// szerokości canvasa
c.width = window.innerWidth;
c.height = window.innerHeight;

// zaladuj teksture krolika
const bunnyImg = new Image();
// bunnyImg.src = "/assets/chungus.png";
bunnyImg.src = "/assets/bunny.png";

const backgroundImg = new Image();
backgroundImg.src = "/assets/background.png";

const bunnySpeedInput = document.getElementById("bunnySpeedInput");
const eggSpeedInput = document.getElementById("eggSpeedInput");
const livesSpeedInput = document.getElementById("livesInput");
const eggRenderSpeedInput = document.getElementById("eggRenderSpeedInput");
const playMusicInput = document.getElementById("musicInput");

const eggCollectAudio = new Audio("/assets/collect.mp3");
const oneLiveAudio = new Audio("/assets/one-live.mp3");
const egglostAudio = new Audio("/assets/egglost.mp3");
const gameoverAudio = new Audio("/assets/gameover.mp3");

const mainAudio = new Audio("/assets/main.wav");
const songAudio = new Audio("/assets/song.wav");

let playMusic;

if (playMusicInput.value == "yes") playMusic = true;
else playMusic = false;

let isPlaying = false;

let interval;

// domyslna predkosc krolika
let bunnySpeed;

let eggSpeed = 3;

let eggRenderSpeed = 1;

eggs = [];

let lives = 3;

let score = 0;

let currentTime;
let elapsedTime;

let initBunnySpeed;
let initEggSpeed;
let initLivesCount;
let initEggRenderSpeed;

ctx.font = "30px Arial";
ctx.fillStyle = "black";
ctx.textAlign = "center";

// stan gry
let paused = false;

c.style.display = "none";

displayScores();
