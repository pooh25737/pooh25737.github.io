
const bodyDom = document.querySelector("img")
checkMediaQuery=()=>{
    if (window.innerWidth < 346) {
    document.getElementById("edit1").innerText = "มีความสุขให้มากๆนะ"
    document.getElementById("edit2").innerText = "ดูแลสุขภาพด้วยนะ 55"
}
}
window.addEventListener('load', checkMediaQuery);

let countb = 0
 back=()=>{
    countb +=1
    if(countb==1)
     bodyDom.src=".//image/toey.jpg"
    else if(countb==2)
        bodyDom.src=".//image/flook1.jpg"
    else if(countb==3)
        bodyDom.src=".//image/flook2.jpg"
    else if(countb==4)
        bodyDom.src=".//image/flook.jpg"
    else if(countb==5)
        bodyDom.src=".//image/kesaraporn.jpg"
    else if(countb==6)
        bodyDom.src=".//image/pugan.jpg"
    else if(countb==7)
        bodyDom.src=".//image/who.jpg"
    else if(countb==8)
        bodyDom.src=".//image/saran.jpg"
    else if(countb==9)
        bodyDom.src=".//image/flook4.jpg"
    else if(countb==10)
        bodyDom.src=".//image/pooh.jpg"
    else if(countb==11)
        bodyDom.src=".//image/flook5.jpg" 
    else if(countb==12)
        bodyDom.src=".//image/pond.jpg"
    else if(countb==13)
        bodyDom.src=".//image/flook6.jpg"
    else if(countb==14)
        bodyDom.src=".//image/pugan1.jpg" 
    else{       
         bodyDom.src="./image/flook3.jpg"
         countb=0
        }
}  
const songs = [
    "./กลิ่นดอกไม้.mp4",
    "./ผู้ถูกเลือก.mp4",
    "./ข้างกัน.mp4",
  ];
  let currentSongIndex = 0;
  let audioElement = new Audio();
play=()=>{
    document.querySelector('img').style.display='inline'
   document.querySelector(".content").classList.add("show")
   setInterval(back,8000)
   document.querySelector(".play").setAttribute("disabled","true")
   document.querySelector(".play").innerText='เพลงเพราะๆในวันปีใหม่555'
   setTimeout(()=>{playNextSong();},1000) 
   const modal = document.querySelector(".popup")
setTimeout(()=>{
    modal.classList.add("show")
},240000)
document.querySelector(".close").addEventListener("click",()=>modal.classList.remove("show"))

}

  function playNextSong() {
    // Check if any songs are left
    if (currentSongIndex >= songs.length) {
      console.log("No more songs to play!");
      return;
    }
    audioElement.src = songs[currentSongIndex];
    audioElement.play();
    currentSongIndex++;

    audioElement.addEventListener("ended", playNextSong);
  }
  

