/* ================= SKILLS ================= */
window.addEventListener("load",()=>{
  document.querySelectorAll(".progress-bar").forEach(bar=>{
    bar.style.width = bar.dataset.width;
  });
});

/* ================= DATE & TIME ================= */
function updateDateTime(){
  const el=document.getElementById("datetime");
  if(!el)return;

  const now=new Date();
  const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  el.textContent =
    `${days[now.getDay()]} • ` +
    now.toLocaleDateString("en-GB",{day:"2-digit",month:"long",year:"numeric"}) +
    " • " +
    now.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:true});
}
setInterval(updateDateTime,1000);
updateDateTime();

/* ================= MUSIC ================= */
const audio=document.getElementById("bgMusic");
const playBtn=document.getElementById("playBtn");
const progressFill=document.getElementById("progressFill");
const progressContainer=document.getElementById("progressContainer");

if(audio && playBtn){
  playBtn.onclick=()=>{
    if(audio.paused){
      audio.play();
      playBtn.textContent="❚❚";
    }else{
      audio.pause();
      playBtn.textContent="▶";
    }
  };

  audio.addEventListener("timeupdate",()=>{
    if(audio.duration){
      progressFill.style.width=(audio.currentTime/audio.duration)*100+"%";
    }
  });

  progressContainer.onclick=e=>{
    audio.currentTime=(e.offsetX/progressContainer.clientWidth)*audio.duration;
  };
}
