(()=>{const c=document.getElementById('bg');if(!c)return;const x=c.getContext('2d');const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;let w,h,P=[],dpr=Math.min(devicePixelRatio||1,2);
function init(){w=c.width=innerWidth*dpr;h=c.height=innerHeight*dpr;const n=Math.min(90,Math.floor(innerWidth*innerHeight/16000));P=[...Array(n)].map(()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.25*dpr,vy:(Math.random()-.5)*.25*dpr,g:Math.random()<.12}))}
function draw(){x.clearRect(0,0,w,h);const D=140*dpr;for(let i=0;i<P.length;i++){const a=P[i];for(let j=i+1;j<P.length;j++){const b=P[j],dx=a.x-b.x,dy=a.y-b.y,d=Math.hypot(dx,dy);if(d<D){x.strokeStyle=`rgba(80,170,255,${(1-d/D)*.35})`;x.lineWidth=dpr*.8;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}}
for(const p of P){x.fillStyle=p.g?'rgba(245,196,81,.9)':'rgba(34,211,238,.85)';x.beginPath();x.arc(p.x,p.y,(p.g?2.2:1.6)*dpr,0,7);x.fill()}}
function step(){for(const p of P){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1}draw();requestAnimationFrame(step)}
init();addEventListener('resize',()=>{init();if(rm)draw()});rm?draw():step()})();
