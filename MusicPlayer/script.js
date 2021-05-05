const Music_Container = document.querySelector('.MusicContainer')
const PlayBtn = document.querySelector('#play')
const Nxt = document.querySelector('#forward')
const Prv = document.querySelector('#prev')
const Audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progressContainer')
const title = document.querySelector('#title')
const imeg = document.querySelector('#cover')

//
const Songs = ['Satanic Realm', 'Praises', 'Worthless', 'Heart in the freezer', 'If you know me']

let songIndex = 1
loadSong(Songs[songIndex])

function loadSong(song){
    title.innerText = song
    Audio.src = (String(song)+".mp3")
    imeg.src = (String(song)+".jpg")
}


//Event Listeners


function playSong(){
    Music_Container.classList.add('play')
    PlayBtn.querySelector('i.fas').classList.replace('fa-play', 'fa-pause')
    Audio.play()
}

function pauseSong(){
    Music_Container.classList.remove('play')
    PlayBtn.querySelector('i.fas').classList.replace('fa-pause', 'fa-play')
    Audio.pause()
}





PlayBtn.addEventListener('click', () => {
    const isPlaying = Music_Container.classList.contains('play')

    if(isPlaying){
        pauseSong()
    }

    if(!isPlaying){
        playSong()
    }

})

//ChangeSong

Prv.addEventListener('click', () => {
    songIndex--
    if(songIndex < 0){
        songIndex = Songs.length - 1
    }

    loadSong(Songs[songIndex])
    playSong()

})


Nxt.addEventListener('click', () => {
    songIndex = songIndex + 1
    if(songIndex > 4){
    console.log(songIndex)
    songIndex = 0
    
    loadSong(Songs[songIndex])
    playSong()
    }

    else{
    loadSong(Songs[songIndex])
    playSong()
    }
})

Audio.addEventListener('timeupdate', (e) =>{
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
    console.log(progressPercent)
})

progressContainer.addEventListener('click', (e) =>{
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = Audio.duration

    e.currentTime = (clickX / width) * duration
})