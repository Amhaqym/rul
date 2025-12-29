const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");

function resize(){
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
}
resize();
window.addEventListener("resize",resize);

const drops=[];
for(let i=0;i<140;i++){
drops.push({
x:Math.random()*canvas.width,
y:Math.random()*-canvas.height,
len:Math.random()*35+25,
speed:Math.random()*6+6,
w:Math.random()*1.8+1.2,
o:Math.random()*0.4+0.4
});
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
drops.forEach(d=>{
ctx.strokeStyle=`rgba(255,255,255,${d.o})`;
ctx.lineWidth=d.w;
ctx.beginPath();
ctx.moveTo(d.x,d.y);
ctx.lineTo(d.x,d.y+d.len);
ctx.stroke();
d.y+=d.speed;
if(d.y>canvas.height)d.y=-50;
});
requestAnimationFrame(animate);
}
animate();
