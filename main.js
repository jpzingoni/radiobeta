window.onload = function(){

    const play = document.querySelector("#escuchar")
    const audio = document.querySelector("audio")
    const retroceder = document.querySelector("#anterior")
    const adelantar = document.querySelector("#siguiente")
    const canciones = document.querySelectorAll("source")
    const h1 = document.querySelector("h1")
    let arranque = audio.pause
    let escuchando = 0
    const songsInLibrary = (canciones.length - 1)
    
    

    play.onclick = function sonando(){
        if (arranque === audio.pause){
            audio.play()
            arranque = audio.play
            h1.style.animationPlayState = "running"
        }else{
            audio.pause()
            arranque = audio.pause
            h1.style.animationPlayState = "paused"
        }
    }
    
    adelantar.onclick = function(){
         escuchando++
         if(escuchando < canciones.length){
            audio.src = canciones[escuchando].src
            arranque = audio.pause
            h1.style.animationPlayState = "paused"
         }
         if(escuchando >= canciones.length){
            escuchando = 0
            audio.src = canciones[escuchando].src
            arranque = audio.pause
            h1.style.animationPlayState = "paused"
        }}
    
    retroceder.onclick = function(){
        if(escuchando < 0){
            audio.src = canciones[songsInLibrary].src
            escuchando = songsInLibrary
            arranque = audio.pause
            h1.style.animationPlayState = "paused"
         }
        if(escuchando < canciones.length){
           audio.src = canciones[escuchando].src
           console.log(audio.src)
           escuchando--
           arranque = audio.pause
           h1.style.animationPlayState = "paused"
        }
       }
   
    }

    