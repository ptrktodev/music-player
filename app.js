const music = [
    {
        name : 'Give It to Me',
        artist : 'Tombaland',
        path : './music/GiveItToMe.mp3',
        img : './Image/tombaland.jpg',
    },
    {
        name : 'The Way I Are',
        artist : 'Tombaland',
        path : './music/TheWayIAre.mp3',
        img : './Image/capa01.jpg',
    }, 
    {
        name : 'Just Dance',
        artist : 'Lady Gaga',
        path : './music/justdance.mp3',
        img : './Image/capa02.jpg',
    }
]

const imgMusic = document.querySelector(".img");
const titleMusic = document.querySelector(".title");
const artistMusic = document.querySelector('.artist')

const buttonBack = document.querySelector(".button-back");
const buttonPlay = document.querySelector(".button-play");
const buttonNext = document.querySelector(".button-next");

const progress = document.querySelector(".progress");
const volMusic = document.querySelector(".volume_slide");

let audio = document.createElement('audio')

/*------------------------------------ */

// NUMERO RANDOM

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const numAleatorio = random(0, music.length - 1)

// --------------------------------------

let indexTrack = numAleatorio
let Song = false // condicionador

// PRIMARY FUNCTION ---------------

function loadSong(indexTrack) {
    audio.src = music[indexTrack].path;
    titleMusic.innerHTML = music[indexTrack].name;
    artistMusic.innerHTML = music[indexTrack].artist;
    imgMusic.src = music[indexTrack].img;
    audio.load() // carregar a musica
}
loadSong(indexTrack)

// FUNÇÕES

function toPause() {
    buttonPlay.removeAttribute("src")
    buttonPlay.setAttribute("src", './svg/botao-play.png')
}

function toPlay() {
    buttonPlay.removeAttribute("src")
    buttonPlay.setAttribute("src", './svg/pausa.png')
}

// PLAY & PAUSE ------------

function pauseSong() {
    audio.pause()
    Song = false
}

function playSong() {
    audio.play()
    Song = true
}

// ICONS -----------

function Play() {
    if (Song === false) {
        playSong()
        toPause()
    } else if (Song === true) {
        pauseSong()
        toPlay()
}}

function next(){
    if (indexTrack < music.length -1){
        indexTrack = indexTrack + 1 
        audio.autoplay = true // auto play para quando passar de musica com next
        loadSong(indexTrack)
    } else {
        indexTrack = 0
        Play()
        loadSong(indexTrack)
    }
}

function prev() {
    if (indexTrack > 0){
            indexTrack = indexTrack - 1
            Play()
            loadSong(indexTrack)
        } else {
            indexTrack = 0
            Play()
            loadSong(indexTrack) }
}

function vol() {
    audio.volume = volMusic.value / 100
}

// EVENT LISTENERS 

buttonPlay.addEventListener("click",  Play)
buttonNext.addEventListener("click",  next)
buttonBack.addEventListener("click",  prev)
volMusic.addEventListener("click",  vol)

audio.addEventListener("ended", () => { // Configura um evento de "fim de música"
    next()
})

progress.addEventListener("input",  () => {// Atualiza a posição da música quando o usuário mover a barra
    audio.currentTime = progress.value //valor de progresso na barra de html
})
 
// Atualiza a posição da barra de progresso enquanto a música estiver sendo reproduzida
audio.addEventListener("timeupdate",  () => {
    progress.max = audio.duration // edit o max do input:range para o max da musica
    progress.value = audio.currentTime // currentTime = tempo atual da musica
})