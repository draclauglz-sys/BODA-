const msg=document.getElementById('msg');
const t=new Date('2026-11-06T19:00:00-05:00').getTime();setInterval(()=>{let x=t-Date.now();if(x<0){msg.textContent='¡Hoy es el gran día!';x=0}let d=Math.floor(x/86400000),h=Math.floor(x%86400000/3600000),m=Math.floor(x%3600000/60000),s=Math.floor(x%60000/1000);['d','h','m','s'].forEach((id,i)=>document.getElementById(id).textContent=[d,h,m,s][i]);},1000);
const music=document.getElementById('bgMusic');
const btn=document.getElementById('musicBtn');
let playing=false;
async function startMusic(){if(playing)return;try{await music.play();playing=true;btn.textContent='⏸';btn.classList.add('playing');}catch(e){}}
btn.onclick=(e)=>{e.stopPropagation();if(!playing){startMusic();}else{music.pause();playing=false;btn.textContent='▶';btn.classList.remove('playing');}};
document.addEventListener('click',startMusic,{once:true});
document.addEventListener('touchstart',startMusic,{once:true});
